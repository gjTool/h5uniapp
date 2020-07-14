<template>
	<view class="user" :style="{'background':background}">
		<view class="status_bar_bg">
			<view class="status_bar"></view>
			<view class="headPortrait">
				<image :src="data.avatarUrl || '../../static/404.jpg'"></image>
				<view class="name">{{ data.nickName || '暂无信息' }}</view>
			</view>
		</view>
		<view class="" v-if="isCanUse">
			<button class="bottom" type="primary" @click="login">立即登录</button>
		</view>
		<view class="listFunction" v-if="index==0">
			<view class="listStrip">
				<image src="../../static/tab-shoucang-current.png" mode="aspectFit"></image>
				<view class="text">欢迎使用pdfh5咨讯查询，您在这里可以查询到当地天气详情</view>
				<text class="iconfont iconyou"></text>
			</view>
			<view class="u-text" v-if="text" @longpress="copyBtn">
				<text>{{text}}</text>
			</view>
		</view>
		<view class="listFunction" v-if="!isCanUse && index==1">
			<view class="listStrip" v-for="(item, index) in list" :key="index" @click="listJump(index)">
				<image :src="item.img" mode="aspectFit"></image>
				<view class="text">{{ item.text }}</view>
				<text class="iconfont iconyou"></text>
			</view>
			<view class="u-text" v-if="text"  @longpress="copyBtn">
				<text>{{text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import config from '@/config';
export default {
	data() {
		return {
			list: [
				{img: '../../static/zuijin.png', text: '最近浏览' },
				{img:'../../static/wxlogin.png',text:'联系方式'}
			],
			data:uni.getStorageSync("userInfo"),
			SessionKey: '',
			OpenId: '',
			nickName: null,
			avatarUrl: null,
			background:"#fff",
			index:uni.getStorageSync('config').index,
			text:"",
			isCanUse: uni.getStorageSync('isCanUse'), //默认为true
			configTimer:null
		};
	},
	onShareAppMessage(res) {
	  return {
		title: "[免费vip影视]登陆即可观看" ,
		imageUrl:"/static/share.jpg",
		path: '/pages/home/home'
	  }
	},
	onShareTimeline(){
		return {
			title: "[免费vip影视]登陆即可观看" ,
			imageUrl:"/static/share.jpg",
			query: ''
		}
	},
	onLoad() {
		let _this = this;
		let option = uni.getStorageSync('config');
		this.index = option.index
		this.text = option.text
		//监听事件
		this.$eventHub.$on('isCanUse2', (num) => {
			let option = uni.getStorageSync('config');
			this.index = option.index;
			if(this.index==0){
				uni.request({
					url: 'https://www.gjtool.cn/download/config.json?_t='+new Date().getTime(),
					method: 'GET',
					complete: res => {
						if (res.statusCode == 200 && res.data) {
							uni.setStorage({
								key: 'config',
								data: res.data
							});
							if(res.data.baseUrl){
								uni.setStorageSync('baseUrl', res.data.baseUrl);
							}else{
								uni.setStorageSync('baseUrl', "https://www.gjtool.cn/py");
							}
							_this.index = res.data.index;
							// #ifndef MP
							_this.index = 1
							// #endif
						}
					}
				});
			}
		})
		uni.getSetting({
			success(res) {
				let authSetting=res.authSetting
				if (!res.authSetting['scope.userInfo']) {
					//未授权
					_this.isCanUse = true;
					_this.data ={};
					uni.setStorageSync('userInfo',{});
					uni.setStorageSync('isCanUse', true); //记录是否第一次授权  false:表示不是第一次授权
				} else {
					//用户已经授权过了
					_this.isCanUse = false;
					_this.background = "RGB(248,249,251)";
					uni.setStorageSync('isCanUse', false); 
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							let code = loginRes.code;
							uni.getUserInfo({
								provider: 'weixin',
								success: function(infoRes) {
									uni.request({
										url: 'https://www.gjtool.cn/wxlogin',
										data: {
											code: code
										},
										method: 'POST',
										success: res => {
											try {
												infoRes.userInfo.session_key=res.data.session_key;
												infoRes.userInfo.openid=res.data.openid;
												uni.setStorageSync('userInfo', infoRes.userInfo);
												_this.isCanUse = false;
												_this.$eventHub.$emit('isCanUse',0)
												_this.$eventHub.$emit('isCanUse2',0)
											} catch (e) {}
										},
										error:err=>{
											
										}
									});
								}
							});
						}
					})
				}
			}
		});
	},
	onShow() {
		let _this = this;
		let option = uni.getStorageSync('config');
		
		_this.text = option.text
		_this.isCanUse = uni.getStorageSync('isCanUse');
		_this.data = uni.getStorageSync("userInfo");
		if(_this.isCanUse===false){
			_this.index = option.index;
		}else{
			_this.index = 0;
		}
		// #ifdef MP-WEIXIN
		clearTimeout(config.configTimer)
		
		uni.getSetting({
			success(res) {
				let authSetting=res.authSetting
				if (!res.authSetting['scope.userInfo']) {
					//这里调用授权
					_this.isCanUse = true;
					_this.data ={};
					uni.setStorageSync('userInfo',{});
					uni.setStorageSync('isCanUse', true); //记录是否第一次授权  false:表示不是第一次授权
				} else {
					//用户已经授权过了
					_this.isCanUse = false;
					_this.background = "RGB(248,249,251)";
					uni.setStorageSync('isCanUse', false); 
					if(!_this.data){
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								let code = loginRes.code;
								uni.getUserInfo({
									provider: 'weixin',
									success: function(infoRes) {
										uni.request({
											url: 'https://www.gjtool.cn/wxlogin',
											data: {
												code: code
											},
											method: 'POST',
											success: res => {
												try {
													infoRes.userInfo.session_key=res.data.session_key;
													infoRes.userInfo.openid=res.data.openid;
													uni.setStorageSync('userInfo', infoRes.userInfo);
													_this.isCanUse = false;
													_this.$eventHub.$emit('isCanUse',0)
													_this.$eventHub.$emit('isCanUse2',0)
												} catch (e) {}
											},
											error:err=>{
												
											}
										});
									}
								});
							}
						})
					}
				}
				
				config.configTimer = setTimeout(()=>{
					uni.request({
						url: 'https://www.gjtool.cn/download/config.json?_t='+new Date().getTime(),
						method: 'GET',
						complete: res => {
							if (res.statusCode == 200 && res.data) {
								uni.setStorage({
									key: 'config',
									data: res.data
								});
								if(!_this.isCanUse){
									_this.index = res.data.index;
									_this.text = res.data.text
									// #ifndef MP
									_this.index = 1
									// #endif
								}else{
									_this.index = 0
								}
							}
						}
					});
				},3000)
			}
		});
		//#endif
	},
	methods: {
		copyBtn(){
			uni.setClipboardData({
				data: this.text,
				success: function(res) {
					uni.getClipboardData({
						success: function(res) {
							// uni.showToast({
							// 	title: '已复制到剪贴板',
							// 	icon: 'none'
							// });
						}
					});
				}
			});
		},
		listJump(index) {
			if (index === 0) {
				let url = `/pages/index/index`;
				if(this.index==0){
					url=""
				}
				uni.navigateTo({
					url: url
				});
			}
			if (index === 1) {
				let url = `/pages/lx/lx`;
				if(this.index==0){
					url=""
				}
				uni.navigateTo({
					url: url
				});
			}
		},
		login(){
			uni.navigateTo({
				url: `/pages/login/login`,
				animationType: 'slide-in-bottom',
				animationDuration: 200
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.user {
	min-height: 100vh;
}
.status_bar_bg {
	// background: url('../../static/user/adorn001.png') no-repeat;
	background-size: cover;
	text-align: center;
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.personal {
		text-align: center;
		color: #000;
		font-size: 16px;
		position: relative;
		top: 5px;
		.iconshezhi1 {
			position: absolute;
			right: 15px;
			font-size: 21px;
		}
	}
	.headPortrait {
		display: flex;
		// margin-top: 40upx;
		flex-direction: column;
		align-items: center;
		padding: 15px 25px 5px;
		// border-bottom: 1px solid #ccc;
		image {
			width: 90px;
			height: 90px;
			border-radius: 50%;
			border: 1px solid #a8dbfa;
			background: #fff;
		}
		.name {
			font-size: 17px;
			color: #000;
			margin-top: 10px;
		}
	}
	.myQrCode {
		color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		text {
			// font-size: 36upx;
		}
	}
	.userCard {
		width: 90%;
		background: linear-gradient(to bottom, #3b5fa1, #417dae);
		margin: auto;
		margin-top: 4vh;
		box-sizing: border-box;
		padding: 15px;
		box-shadow: 0 1px 2px #e7e7e7;
		border-radius: 10px;
		.currentQuota {
			display: flex;
			align-items: center;
			padding: 5px 0;
			.numberFrame {
				width: 50%;
				text-align: center;
				.number {
					font-size: 19px;
					color: #000;
				}
				.text {
					font-size: 14px;
					color: #efefef;
				}
			}
			.numberFrame {
				border-right: 1px solid #ececec;
				&:last-of-type {
					border: none;
				}
			}
		}
	}
}

.infoCard {
	width: 100%;
	// background: tran;
	padding: 10px 0;
	margin-top: 5vh;
	.functionButton {
		display: flex;
		position: relative;
		// top:-3vh;
		.outerFrame {
			width: 33.333333%;
			text-align: center;
			color: #000;
			font-size: 16px;
			// line-height:28upx;
			image {
				width: 30px;
				height: 30px;
				margin-bottom: 5px;
			}
		}
	}
}

.listFunction {
	margin-top: 15px;
	// background:#fff;
	.listStrip {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #CCC;
		padding: 10px;
		position: relative;
		// &:last-of-type{
		// 	border: none;
		// }
		image {
			width: 20px;
			height: 20px;
		}
		.text {
			padding-left: 10px;
			color: #000;
			font-size: 14px;
		}
		.iconyou {
			position: absolute;
			right: 15px;
			color: #dbdbdb;
		}
	}
}
.button-box {
	padding: 4px 40px;
	height: 40px;
}
.header {
	margin: 45px 0 45px 25px;
	border-bottom: 1px solid #ccc;
	text-align: center;
	width: 325px;
	height: 150px;
	line-height: 225px;
}

.header image {
	width: 100px;
	height: 100px;
}

.content {
	margin-left: 25px;
	margin-bottom: 45px;
}

.content text {
	display: block;
	color: #9d9d9d;
	margin-top: 20px;
}

.bottom {
	border-radius: 40px;
	margin: 35rpx 25px;
	font-size: 17px;
}
.u-text{
	padding: 30px;
	font-size: 12px;
	color: #777;
}
</style>
