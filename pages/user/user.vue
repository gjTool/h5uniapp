<template>
	<view class="user" :style="{'background':background}">
		<view class="status_bar_bg">
			<view class="status_bar"></view>
			<view class="headPortrait">
				<image :src="data.avatarUrl || '../../static/404.jpg'"></image>
				<view class="name">{{ data.nickName || '请点击下方按钮登录' }}</view>
			</view>
		</view>
		<view class="listFunction" v-if="isCanUse">
			<button class="bottom" type="primary" @click="login">立即登录</button>
		</view>
		<view class="listFunction" v-if="index==0">
			<view class="listStrip">
				<image src="../../static/tab-shoucang-current.png" mode="aspectFit"></image>
				<view class="text">欢迎使用本小程序！<text v-if="isCanUse">登陆后开启更多功能……</text></view>
				<text class="iconfont iconyou"></text>
			</view>
			<view class="progress-box">
				<view class="progress-text">
					<text>当前已使用{{currentSize}}kb缓存，缓存最大空间为{{limitSize}}kb</text>
				</view>
				<progress :percent="percent" active stroke-width="4" />
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
			<view class="progress-box">
				<view class="progress-text">
					<text>当前已使用{{currentSize}}kb缓存，缓存最大空间为{{limitSize}}kb</text>
				</view>
				<progress :percent="percent" active stroke-width="4" />
			</view>
			<view class="u-text" v-if="text" @longpress="copyBtn">
				<text>{{text}}</text>
			</view>
		</view>
		<ad unit-id="adunit-78c062b57e82831a" style="position: absolute;left: 0;bottom: 0;"></ad>
	</view>
</template>

<script>
	import config from '@/config';
	export default {
		data() {
			return {
				list: [{
						img: '../../static/zuijin.png',
						text: '最近浏览'
					},
					{
						img: '../../static/wxlogin.png',
						text: '联系方式'
					},
					{
						img: '../../static/delete.png',
						text: '清除缓存'
					}
				],
				data: uni.getStorageSync("userInfo"),
				SessionKey: '',
				OpenId: '',
				nickName: null,
				avatarUrl: null,
				background: "#fff",
				index: uni.getStorageSync('config').index,
				text: "",
				isCanUse: uni.getStorageSync('isCanUse'), //默认为true
				configTimer: null,
				keys: [],
				currentSize: "",
				limitSize: "",
				percent: 0
			};
		},
		onShareAppMessage(res) {
			return {
				title: "免费影视综艺动漫、漫画小说，搜索即可观看",
				imageUrl: "/static/share.jpg",
				path: '/pages/home/home'
			}
		},
		onShareTimeline() {
			return {
				title: "免费影视综艺动漫、漫画小说，搜索即可观看",
				imageUrl: "/static/share.jpg",
				query: ''
			}
		},
		onLoad() {
			let _this = this;
			let option = uni.getStorageSync('config');
			this.index = option.index
			this.text = option.text
			this.openid = uni.getStorageSync("userInfo").openid;
			//监听事件
			this.$eventHub.$on('isCanUse2', (num) => {
				let option = uni.getStorageSync('config');
				this.index = option.index;
				if (this.index == 0) {
					uni.request({
						url: 'https://www.gjtool.cn/download/config.json?_t=' + new Date().getTime(),
						method: 'GET',
						complete: res => {
							if (res.statusCode == 200 && res.data) {
								uni.setStorage({
									key: 'config',
									data: res.data
								});
								if (res.data.baseUrl) {
									uni.setStorageSync('baseUrl', res.data.baseUrl);
								} else {
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
		},
		onShow() {
			let _this = this;
			let option = uni.getStorageSync('config');
			this.getSize()
			_this.text = option.text
			_this.isCanUse = uni.getStorageSync('isCanUse');
			_this.data = uni.getStorageSync("userInfo");
			this.openid = _this.data.openid;
			clearTimeout(config.configTimer)
			// #ifdef MP-WEIXIN
			if (!this.openid) {
				_this.isCanUse = true;
				uni.setStorageSync('isCanUse', true)
			}
			if (_this.data == '' || (_this.data && !_this.data.nickName)) {
				_this.isCanUse = true;
				uni.setStorageSync('isCanUse', true)
			}
			//#endif
		},
		methods: {
			getSize() {
				let _this = this;
				uni.getStorageInfo({
					success: function(res) {
						_this.keys = res.keys;
						_this.currentSize = res.currentSize;
						_this.limitSize = res.limitSize;
						if (_this.currentSize != 0) {
							_this.percent = (_this.currentSize / _this.limitSize) * 100
						}
					}
				});
			},
			copyBtn() {
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
				let _this = this;
				if (index === 0) {
					let url = `/pages/index/index`;
					if (this.index == 0) {
						url = ""
					}
					uni.navigateTo({
						url: url
					});
				}
				if (index === 1) {
					let url = `/pages/lx/lx`;
					if (this.index == 0) {
						url = ""
					}
					uni.navigateTo({
						url: url
					});
				}
				if (index === 2) {
					uni.showActionSheet({
						itemList: ['清除影视记录', '清除漫画记录', '清除小说记录', '清除所有缓存'],
						success: function(res) {
							if (res.tapIndex == 0) {
								uni.showModal({
									title: '清除提示',
									content: "确定要清除影视最近浏览记录吗？",
									success: function(res) {
										if (res.confirm) {
											try {
												uni.removeStorageSync(_this.openid + "ysZJ");
												_this.getSize()
												uni.showToast({
													title: "影视最近浏览记录已清除！",
													icon: "none"
												})
											} catch (e) {
												// error
											}
										}
									}
								});
							}
							if (res.tapIndex == 1) {
								uni.showModal({
									title: '清除提示',
									content: "确定要清除漫画最近浏览记录吗？",
									success: function(res) {
										if (res.confirm) {
											try {
												uni.removeStorageSync(_this.openid + "mhZJ");
												_this.keys.forEach((item) => {
													if (item.indexOf("mhlist") != -1) {
														uni.removeStorageSync(item);
													}
													if (item.indexOf("mhShouCang") != -1) {
														uni.removeStorageSync(item);
													}
												})
												_this.getSize()
												uni.showToast({
													title: "漫画最近浏览记录已清除！",
													icon: "none"
												})
											} catch (e) {
												// error
											}
										}
									}
								});
							}
							if (res.tapIndex == 2) {
								uni.showModal({
									title: '清除提示',
									content: "确定要清除小说最近浏览记录吗？",
									success: function(res) {
										if (res.confirm) {
											try {
												uni.removeStorageSync(_this.openid + "xsZJ");
												_this.keys.forEach((item) => {
													if (item.indexOf("xsNum") != -1) {
														uni.removeStorageSync(item);
													}
													if (item.indexOf("xslist") != -1) {
														uni.removeStorageSync(item);
													}
													if (item.indexOf("xsDownload") != -1) {
														uni.removeStorageSync(item);
													}
													if (item.indexOf("xsShouCang") != -1) {
														uni.removeStorageSync(item);
													}
												})
												_this.getSize()
												uni.showToast({
													title: "小说最近浏览记录已清除！",
													icon: "none"
												})
											} catch (e) {
												// error
											}
										}
									}
								});
							}
							if (res.tapIndex == 3) {
								uni.showModal({
									title: '清除提示',
									content: "确定要清除所有缓存吗？",
									success: function(res) {
										if (res.confirm) {
											try {
												_this.keys.forEach((item) => {
													if (item != "baseUrl" && item !=
														"isCanUse" && item != "config" &&
														item != "userInfo") {
														uni.removeStorageSync(item);
													}
												})
												_this.percent = 0;
												_this.currentSize = 0;
												uni.showToast({
													title: "缓存已全部清除！",
													icon: "none"
												})
											} catch (e) {
												// error
											}
										}
									}
								});
							}
						},
						fail: function(res) {
							console.log(res.errMsg);
						}
					});
				}
			},
			login() {
				let _this = this;
				uni.getUserProfile({
					desc: '登录',
					success: (res) => {
						console.log(res);
						let info = JSON.parse(res.rawData);
						uni.showLoading({
							title: '登录中...'
						});
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								let code = loginRes.code;
								//非第一次授权获取用户信息
								uni.getUserInfo({
									provider: 'weixin',
									success: function(infoRes) {
										//获取用户信息后向调用信息更新方法
										infoRes.userInfo.nickName = info.nickName
										infoRes.userInfo.avatarUrl = info.avatarUrl
										if (_this.data == '') {
											_this.data = {}
										}
										_this.data.nickName = info.nickName
										_this.data.avatarUrl = info.avatarUrl
										let nickName = infoRes.userInfo.nickName; //昵称
										let avatarUrl = infoRes.userInfo
											.avatarUrl; //头像
										//2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
										uni.request({
											url: 'https://www.gjtool.cn/wxlogin',
											data: {
												code: code
											},
											method: 'POST',
											success: res => {
												console.log('wxlogin', res)
												//openId、或SessionKdy存储//隐藏loading
												// session_key: 'sfgBKehUeO83svMivS4TmA==',
												// openid: 'ojV0G5niVZ_kT__Kpo_ejmCHsnbg'
												try {
													infoRes.userInfo
														.session_key = res
														.data.session_key;
													infoRes.userInfo
														.openid = res.data
														.openid;
													uni.setStorageSync(
														'userInfo',
														infoRes
														.userInfo);
													uni.setStorageSync(
														'isCanUse',
														false
													); //记录是否第一次授权  false:表示不是第一次授权
													_this.isCanUse = false;
													// _this.updateUserInfo(); //调用更新信息方法
													_this.$eventHub.$emit(
														'isCanUse', 0)
													_this.$eventHub.$emit(
														'isCanUse2', 0)
												} catch (e) {}
												uni.hideLoading();
											},
											error: err => {
												uni.hideLoading();
												uni.showToast({
													title: "登陆失败，请稍后重试",
													icon: 'none'
												})
											}
										});
									}
								});
							}
						});
					}
				})

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

	.u-text {
		padding: 10px 20px 10px 20px;
		font-size: 12px;
		color: #333;
	}

	.progress-box {
		padding: 5px 20px;

		.progress-text {
			margin-bottom: 5px;
		}

		text {
			font-size: 10px;
			color: #777;
		}
	}
</style>
