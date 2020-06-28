<template>
	<view class="user" >
		<view >
			<view>
				<view class="header"><image src="../../static/wxlogin.png"></image></view>
				<view class="content">
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>

				<button class="bottom" type="primary" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">授权登录</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				// {img:'../../static/jianjie.png',text:'最近浏览'},
				{ img: '../../static/tab-shoucang-current.png', text: '我的收藏' }
			],
			data: {},
			SessionKey: '',
			OpenId: '',
			nickName: null,
			avatarUrl: null,
			background:"#fff",
			isCanUse: uni.setStorageSync('isCanUse')||true //默认为true
		};
	},
	onLoad() {
		let _this = this;
		_this.isCanUse = uni.setStorageSync('isCanUse')||true;
	},
	onShow() {
		
	},
	methods: {
		//第一授权获取用户信息===》按钮触发
		wxGetUserInfo() {
			let _this = this;
			// uni.showLoading({
			// 	title: '登录中...'
			// });
			// 1.wx获取登录用户code
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					let code = loginRes.code;
					//非第一次授权获取用户信息
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							//获取用户信息后向调用信息更新方法
							let nickName = infoRes.userInfo.nickName; //昵称
							let avatarUrl = infoRes.userInfo.avatarUrl; //头像
							_this.data = infoRes.userInfo;
							try {
								uni.setStorageSync('userInfo', infoRes.userInfo);
								uni.setStorageSync('isCanUse', false); //记录是否第一次授权  false:表示不是第一次授权
								_this.isCanUse = false;
								// _this.updateUserInfo(); //调用更新信息方法
								uni.navigateBack()
							} catch (e) {}
						}
					});

					//2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
					uni.request({
						url: 'https://www.gjtool.cn/wxlogin',
						data: {
							code: code
						},
						method: 'GET',
						header: {
							'content-type': 'application/json'
						},
						success: res => {
							//openId、或SessionKdy存储//隐藏loading
							uni.hideLoading();
							// console.log("wxlogin res",res);
						}
					});
				}
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
</style>
