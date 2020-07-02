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
		</view>
		<view class="listFunction" v-if="!isCanUse && index==1">
			<view class="listStrip" v-for="(item, index) in list" :key="index" @click="listJump(index)">
				<image :src="item.img" mode="aspectFit"></image>
				<view class="text">{{ item.text }}</view>
				<text class="iconfont iconyou"></text>
			</view>
			<view class="u-text" v-if="text">
				<text>{{text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{img: '../../static/tab-download-current.png', text: '最近浏览' },
				{img:'../../static/wxlogin.png',text:'联系作者'}
			],
			data: uni.setStorageSync("userInfo"),
			SessionKey: '',
			OpenId: '',
			nickName: null,
			avatarUrl: null,
			background:"#fff",
			index:0,
			text:"",
			isCanUse: uni.setStorageSync('isCanUse') //默认为true
		};
	},
	onReady(){
		let _this = this;
		let option = uni.getStorageSync('config');
		this.index = option.index
		this.text = option.text
	},
	onLoad() {
		let _this = this;
		_this.isCanUse = uni.setStorageSync('isCanUse') || true;
		_this.data = uni.setStorageSync("userInfo");
	},
	onShow() {
		let _this = this;
		_this.isCanUse = uni.setStorageSync('isCanUse');
		_this.data = uni.setStorageSync("userInfo");
		// #ifdef MP-WEIXIN
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
					_this.data = uni.setStorageSync("userInfo")
					_this.background = "RGB(248,249,251)"
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							//获取用户信息后向调用信息更新方法
							let nickName = infoRes.userInfo.nickName; //昵称
							let avatarUrl = infoRes.userInfo.avatarUrl; //头像
							_this.data = infoRes.userInfo;
							// console.log("infoRes1",infoRes)
							try {
								uni.setStorageSync('userInfo', infoRes.userInfo);
								uni.setStorageSync('isCanUse', false); //记录是否第一次授权  false:表示不是第一次授权
								_this.isCanUse = false;
								// _this.updateUserInfo(); //调用更新信息方法
								uni.request({
									url: 'https://www.gjtool.cn/download/config.json',
									method: 'GET',
									complete: res => {
										if (res.statusCode == 200 && res.data) {
											uni.setStorage({
												key: 'config',
												data: res.data
											});
										}
									}
								});
							} catch (e) {}
						}
					});
				}
			}
		});
		//#endif
	},
	methods: {
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
		font-size: 32upx;
		position: relative;
		top: 10upx;
		.iconshezhi1 {
			position: absolute;
			right: 30upx;
			font-size: 42upx;
		}
	}
	.headPortrait {
		display: flex;
		// margin-top: 40upx;
		flex-direction: column;
		align-items: center;
		padding: 30upx 50upx 10upx;
		// border-bottom: 1px solid #ccc;
		image {
			width: 160upx;
			height: 160upx;
			border-radius: 50%;
			border: 1px solid #a8dbfa;
			background: #fff;
		}
		.name {
			font-size: 34upx;
			color: #000;
			margin-top: 20upx;
		}
	}
	.myQrCode {
		color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
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
		padding: 30upx;
		box-shadow: 0 2upx 4upx #e7e7e7;
		border-radius: 10px;
		.currentQuota {
			display: flex;
			align-items: center;
			padding: 10upx 0;
			.numberFrame {
				width: 50%;
				text-align: center;
				.number {
					font-size: 38upx;
					color: #000;
				}
				.text {
					font-size: 28upx;
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
			font-size: 32upx;
			// line-height:28upx;
			image {
				width: 60upx;
				height: 60upx;
				margin-bottom: 10upx;
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
		padding: 30upx;
		position: relative;
		// &:last-of-type{
		// 	border: none;
		// }
		image {
			width: 50upx;
			height: 50upx;
		}
		.text {
			padding-left: 15px;
			color: #000;
			font-size: 32upx;
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
	margin: 90rpx 0 90rpx 50rpx;
	border-bottom: 1px solid #ccc;
	text-align: center;
	width: 650rpx;
	height: 300rpx;
	line-height: 450rpx;
}

.header image {
	width: 200rpx;
	height: 200rpx;
}

.content {
	margin-left: 50rpx;
	margin-bottom: 90rpx;
}

.content text {
	display: block;
	color: #9d9d9d;
	margin-top: 40rpx;
}

.bottom {
	border-radius: 80rpx;
	margin: 70rpx 50rpx;
	font-size: 35rpx;
}
.u-text{
	padding: 30px;
	font-size: 12px;
	color: #777;
}
</style>
