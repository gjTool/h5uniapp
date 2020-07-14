<template>
	<view class="content">
		<view class="video-box" v-if="index==1">
			<video id="myVideo" :title="videoTitle" class="myVideo" autoplay :src="src" controls show-casting-button direction="90"
			 show-mute-btn enable-play-gesture enable-progress-gesture show-screen-lock-button @touchstart="mytouchstart"
			 @loadedmetadata="loadedmetadata" @longtap="mylongtap" @play="myplay" @touchend="mytouchend" vslide-gesture-in-fullscreen
			 @timeupdate="mytimeupdate" @controlstoggle="mycontrolstoggle" @fullscreenchange="myfullscreenchange">
				<view class="rate" @click="rateBtn" v-show="rateShow">x{{Rate===1?"1.0":Rate===2?"2.0":Rate}}</view>
				<view class="rate-list-box" v-show="rateListShow" @click="closeratelist">
					<view class="rate-list" overflow-y="true">
						<view class="rate-title">倍速播放</view>
						<view class="rate-item" :class="{'active':Rate===0.5}" @click="setRate(0.5)">x0.5</view>
						<view class="rate-item" :class="{'active':Rate===0.8}" @click="setRate(0.8)">x0.8</view>
						<view class="rate-item" :class="{'active':Rate===1.0}" @click="setRate(1.0)">x1.0</view>
						<view class="rate-item" :class="{'active':Rate===1.25}" @click="setRate(1.25)">x1.25</view>
						<view class="rate-item" :class="{'active':Rate===1.5}" @click="setRate(1.5)">x1.5</view>
						<view class="rate-item" :class="{'active':Rate===2.0}" @click="setRate(2.0)">x2.0</view>
					</view>
				</view>

				<view class="xuanji" @click="xuanjiBtn" v-show="xuanjiShow&&xunjiif">选集</view>
				<view class="xuanji-list-box" v-show="xuanjiListShow" @click="closexuanjilist">
					<view class="xuanji-list" overflow-y="true">
						<view class="xuanji-item" v-for="(item,k) in list" :key="k" @click="play2(item, k)">
							<view class="item" :class="{'active':num===k}">{{item.num}}</view>
						</view>
					</view>
				</view>
			</video>
		</view>
		<scroll-view class="scroll" scroll-y v-if="index==1">
			<view class="scroll-content">
				<view class="image-box">
					<image :src="obj.cover" class="img" @error="imgError(obj)" show-menu-by-longpress></image>
				</view>
				<view class="text-right">
					<view>
						<text>年份</text>
						：
						<text>{{ obj.Release ? obj.Release : '' }}</text>
					</view>
					<view>
						<text>类型</text>
						：
						<text>{{ obj.genre ? obj.genre : '' }}</text>
					</view>
					<view>
						<text>导演</text>
						：
						<text>{{ obj.director ? obj.director : '' }}</text>
					</view>
					<view>
						<text>语言</text>
						：
						<text>{{ obj.Language ? obj.Language : '' }}</text>
					</view>
					<view>
						<text>地区</text>
						：
						<text>{{ obj.region ? obj.region : '' }}</text>
					</view>
					<scroll-view class="performer" scroll-y>
						<view>
							<text>主演</text>
							：
							<text>{{ obj.performer ? obj.performer : '' }}</text>
						</view>
					</scroll-view>
				</view>
				<view class="text-bottom">
					<button class="play-button" type="primary" size="mini" @click="play(list[num], num)">播放</button>
				</view>
				<view class="text-box">
					<view>
						<text>简介</text>
						：
						<text>{{ obj.introduce ? obj.introduce : '' }}</text>
					</view>
				</view>
				<view class="list-box">
					<view><text>选集：</text></view>
					<button v-for="(item, index) in list" :key="index" @click="play2(item, index)" type="primary" size="mini" :plain="index == num ? false : true">
						{{ item.num }}
					</button>
				</view>
				<!-- 加载图标 -->
				<mixLoading class="mix-loading" v-if="loading"></mixLoading>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import config from '@/config';
	import mixLoading from '@/components/mix-loading/mix-loading';
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components: {
			uniIcons,
			uniNavBar,
			mixLoading
		},
		data() {
			return {
				show: true,
				title: "影视详情",
				num: 0,
				loading: true,
				detailData: {},
				list: [],
				obj: {},
				name: '',
				videoContext: null,
				video_mask: null,
				video_content: null,
				videoshow: false,
				first: true,
				checked: false,
				videoTitle: "",
				index: 0,
				islongtap: false,
				isfullScreen: false,
				controlsShow: true,
				isjiesuo: true,
				suoShow: false,
				Rate: 1,
				rateShow: false,
				rateTimer: null,
				rateListShow: false,
				xuanjiShow: false,
				xuanjiTimer: null,
				xuanjiListShow: false,
				openid: "",
				timeupdateTimer: null,
				xunjiif:true,
				jindu:false
			};
		},
		onReady: function(res) {
		
		},
		computed: {
			src() {
				var _this = this;
				let num = this.num;
				num = parseFloat(num);
				if (this.list.length == 0) {
					return '';
				}
				let item = this.list[num];
				let url = item.m3u8url;
				if (url == '') {
					uni.showToast({
						title: "当前播放线路为空,请更换线路",
						icon: "none"
					})
					return
				}
				return url;
			}
		},
		onUnload() {},
		onShareAppMessage(res) {
		  return {
			title:  "["+this.detailData.genre+"]"+this.title,
			imageUrl:this.detailData.cover,
			path: '/pages/details/detailsMP?data='+JSON.stringify(this.detailData)
		  }
		},
		onShareTimeline(){
			return {
				title:  "["+this.detailData.genre+"]"+this.title,
				imageUrl:this.detailData.cover,
				query: 'data='+JSON.stringify(this.detailData)
			}
		},
		onLoad(options) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
			let option = uni.getStorageSync('config');
			this.index = option.index
			// #ifndef MP
			this.index = 1
			// #endif
			this.openid = uni.getStorageSync("userInfo").openid;
			this.detailData = JSON.parse(options.data);
			this.title = this.detailData.name
			uni.setNavigationBarTitle({
				title: this.detailData.name
			});
			uni.request({
				url: uni.getStorageSync('baseUrl'),
				data: {
					ysurl: this.detailData.url
				},
				method: 'GET',
				complete: res => {
					this.loading = false;
					if (res.statusCode == 200 && res.data && res.data.code == 0) {
						let data = res.data.list;
						this.obj = res.data.data;
						for (let i = 0; i < data.length; i++) {
							let a = data[i].download;
							let b = data[i].m3u8url;
							let c = data[i].onlineurl;
							let obj = {
								cover: this.obj.cover,
								num: data[i].num,
								download: '',
								m3u8url: '',
								onlineurl: ''
							};
							if (a.indexOf('.m3u8') != -1) {
								obj.m3u8url = a;
							}
							if (a.indexOf('.mp4') != -1) {
								obj.download = a;
							}
							if (a.indexOf('.m3u8') == -1 && a.indexOf('.mp4') == -1) {
								obj.onlineurl = a;
							}
							if (b.indexOf('.m3u8') != -1) {
								obj.m3u8url = b;
							}
							if (b.indexOf('.mp4') != -1) {
								obj.download = b;
							}
							if (b.indexOf('.m3u8') == -1 && b.indexOf('.mp4') == -1) {
								obj.onlineurl = b;
							}
							if (c.indexOf('.m3u8') != -1) {
								obj.m3u8url = c;
							}
							if (c.indexOf('.mp4') != -1) {
								obj.download = c;
							}
							if (c.indexOf('.m3u8') == -1 && c.indexOf('.mp4') == -1) {
								obj.onlineurl = c;
							}
							data[i] = obj;
						}
						if (this.detailData.genre.indexOf("综艺") != -1) {
							this.list = data.reverse();
						} else {
							this.list = data;
						}

						let item = this.list[0];
						this.videoTitle = this.title + " " + item.num;
						let op = config.getYsZJnum(this.detailData.url);
						this.num = op.num ? op.num : 0;
						
						if (
							this.list.length <= 4 &&
							this.detailData.genre.indexOf('综艺') == -1 &&
							this.detailData.genre.indexOf('日韩动漫') == -1 &&
							(this.detailData.genre.indexOf('剧') <= -1 ||
								this.detailData.genre.indexOf('剧情片') != -1 ||
								this.detailData.genre.indexOf('喜剧片') != -1 ||
								this.detailData.genre.indexOf('悲剧片') != -1)
						) {
							this.xunjiif = false;
						}
					}
				}
			});
		},
		methods: {
			//秒数转换时间
			formatSeconds(value) {
				var theTime = parseInt(value); // 秒
				var middle = 0; // 分
				var hour = 0; // 小时
				if (theTime > 60) {
					middle = parseInt(theTime / 60);
					theTime = parseInt(theTime % 60);
					if (middle > 60) {
						hour = parseInt(middle / 60);
						middle = parseInt(middle % 60);
					}
				}
				var result = "" + parseInt(theTime) + "秒";
				if (middle > 0) {
					result = "" + parseInt(middle) + "分" + result;
				}
				if (hour > 0) {
					result = "" + parseInt(hour) + "小时" + result;
				}
				return result;
			},
			myplay(){
				if(!this.jindu){
					this.jindu = true;
					let op = config.getYsZJnum(this.detailData.url);
					if(op.currentTime){
						this.videoContext.seek(op.currentTime);
					}
				}
			},
			//数据加载
			loadedmetadata() {
				this.videoContext.playbackRate(this.Rate);
			},
			//进度条变化
			mytimeupdate(event) {
				let currentTime = event.detail.currentTime;
				let duration = event.detail.duration;

				clearTimeout(this.xuanjiTimer);
				clearTimeout(this.timeupdateTimer);
				this.timeupdateTimer = setTimeout(() => {
					 let title = this.list[this.num].num;
					 title +=" "+this.formatSeconds(currentTime);
					 this.detailData.currentTime = currentTime;
					 this.detailData.title = title;
					 this.detailData.Time = new Date().getTime();
					 this.detailData.saveTime = config.getDate("/"); 
					 config.setYsZJ(this.num, this.detailData)
				}, 250)
			},
			//关闭选集列表
			closexuanjilist() {
				if (this.isfullScreen) {
					this.xuanjiListShow = false;
				}
			},
			//选集按钮点击
			xuanjiBtn() {
				if (this.isfullScreen) {
					this.xuanjiListShow = true;
				}
			},
			//关闭倍速列表
			closeratelist() {
				if (this.isfullScreen) {
					this.rateListShow = false;
				}
			},
			//倍速按钮点击
			rateBtn() {
				if (this.isfullScreen) {
					this.rateListShow = true;
				}
			},
			setRate(num) {
				if (this.isfullScreen) {
					this.videoContext.playbackRate(num);
					this.Rate = num;
					this.rateListShow = false;
				}
			},
			//触摸开始
			mytouchstart(event) {
				if (this.isfullScreen) {

				}

				// console.log("触摸开始")
			},
			//触摸结束
			mytouchend(event) {
				if (this.isfullScreen) {

				}
				if (this.islongtap) {
					this.videoContext.playbackRate(this.Rate)
					this.islongtap = false;
				}
			},
			//长按事件
			mylongtap(event) {
				this.islongtap = true;
				this.videoContext.playbackRate(2)
			},
			//控制栏显示、隐藏 event.detail = {show}
			mycontrolstoggle(event) {
				this.controlsShow = event.detail.show;
				clearTimeout(this.xuanjiTimer)
				if (this.isfullScreen) {
					this.rateShow = this.controlsShow;
					this.xuanjiShow = this.controlsShow;
					if (event.detail.show) {
						this.xuanjiTimer = setTimeout(() => {
							this.xuanjiShow = false;
							this.rateShow = false;
						}, 5000)
					}
				}
				if (!event.detail.show) {
					this.rateShow = false;
					this.xuanjiShow = false;
				}
			},
			//全屏、退出全屏 direction 有效值为 vertical 或 horizontal
			myfullscreenchange(event) {
				let fullScreen = event.detail.fullScreen;
				this.isfullScreen = fullScreen;
				clearTimeout(this.xuanjiTimer)
				if (this.isfullScreen) {
					this.rateShow = true;
					this.xuanjiShow = true;
					this.xuanjiTimer = setTimeout(() => {
						this.xuanjiShow = false;
						this.rateShow = false;
					}, 5000)
				} else {
					this.rateShow = false;
					this.xuanjiShow = false;
					this.rateListShow = false;
					this.xuanjiListShow = false;
				}
			},
			fullscreenchange() {},
			playClick() {},
			videoErrorCallback(e) {},
			back() {
				this.jindu = false;
				uni.navigateBack({
					delta: 1
				})
			},
			shoucang() {
				uni.showToast({
					title: "点击了收藏"
				})
			},
			imgError(obj) {
				obj.cover = '/static/404.jpg';
			},
			play(item, index) {
				let obj = this.list[index];
				item.url = obj.m3u8url;
				item.num = obj.num;
				item.title = this.title;
				this.num = index;
				this.videoTitle = this.title + " " + item.num
			},
			play2(item, index) {
				let obj = this.list[index];
				item.url = obj.m3u8url;
				item.num = obj.num;
				item.title = this.title;
				this.num = index;
				this.videoTitle = this.title + " " + item.num;
				this.closexuanjilist()
			}
		}
	};
</script>
<style lang="scss">
	page {
		height: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #fff;
	}

	.scroll {
		flex: 1;
		position: relative;
		background-color: #f8f8f8;
		height: 0;
	}

	.scroll::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		display: none;
	}

	.scroll-content {
		display: flex;
		flex-direction: column;
	}

	.image-box {
		width: 170px;
		height: 230px;
		max-width: 220px;
		max-height: 220px;
		margin-top: 5px;
		margin-left: 5px;
		display: flex;
	}

	uni-image {
		width: 170px;
		height: 230px;
		max-width: 220px;
		max-height: 220px;
	}

	.text-box {
		margin-top: 0px;
		padding: 5px;
		font-size: 12px;
		/* #ifdef MP */
		margin-top: 54px;
		font-size: 16px;
		/* #endif */
	}

	.text-right {
		width: calc(100% - 180px);
		font-size: 12px;
		position: absolute;
		top: 0;
		right: 0;
		padding: 5px;
		font-size: 14px;
	}

	.text-bottom {
		width: calc(100% - 180px);
		position: absolute;
		/* #ifdef APP-PLUS */
		top: 210px;
		/* #endif */
		/* #ifdef H5 */
		top: 180px;
		/* #endif */
		/* #ifdef MP */
		top: 248px;
		/* #endif */
		right: 0;
		padding: 5px;
		font-size: 14px;

		button,
		text,
		switch {
			float: left;
		}

		text {
			margin-top: 5px;
		}
	}

	switch {
		transform: scale(0.7);
	}

	.play-button {
		margin-right: 15px;
	}

	.list-box {
		padding: 5px;
		padding-bottom: 10px;
		font-size: 16px;

		button {
			margin-top: 5px;
			margin-right: 10px;
		}
	}

	.performer {
		/* #ifdef APP-PLUS */
		height: 90px;
		/* #endif */
		/* #ifdef H5 */
		height: 74px;
		/* #endif */
		/* #ifdef MP */
		height: 126px;
		/* #endif */
		overflow: hidden;
	}

	.performer::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		display: none;
	}

	.text-name {}

	.video-box {
		width: 100%;
		height: 225px;
		max-height: 320px;
		/* #ifdef H5 */
		margin-top: 44px;

		/* #endif */
		.video {
			width: 100%;
			height: 225px;
			max-height: 320px;
		}

		.myVideo {
			width: 100%;
			height: 225px;
			max-height: 320px;
			position: relative;
		}
	}

	.switch-label {
		line-height: 32px;
	}

	.view {
		color: #ffffff;
	}

	.img {
		pointer-events: auto !important;
	}



	.jiesuo {
		position: absolute;
		width: 30px;
		height: 30px;
		top: 50%;
		left: 30px;
		margin-top: -15px;
	}

	.rate {
		position: absolute;
		width: 60px;
		height: 30px;
		top: 50%;
		right: 10px;
		margin-top: -40px;
		color: #fff;
		font-size: 14px;
	}

	.rate-list-box {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		background-color: rgba(0, 0, 0, 0.3);

		.rate-list {
			position: absolute;
			right: 0;
			top: 0;
			width: 80px;
			height: 100%;
			background-color: rgba(0, 0, 0, 1);
			text-align: center;
			overflow-y: scroll;
			-webkit-overflow-scrolling: touch;

			.rate-title {
				color: #fff;
				display: block;
				height: 30px;
				line-height: 30px;
				margin-top: 30px;
			}

			.rate-item {
				color: #fff;
				display: block;
				height: 26px;
				line-height: 26px;
				margin-top: 8px;
			}

			.rate-item.active {
				color: green;
				font-weight: 600;
			}
		}

		.rate-list::-webkit-scrollbar {
			width: 0;
			height: 0;
			color: transparent;
			display: none;
		}
	}

	.xuanji {
		position: absolute;
		width: 60px;
		height: 30px;
		top: 50%;
		right: 10px;
		margin-top: 10px;
		color: #fff;
		font-size: 14px;
	}

	.xuanji-list-box {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.xuanji-list {
			// position: absolute;
			// right: 0;
			// top:0;
			width: 260px;
			height: 100%;
			background-color: rgba(0, 0, 0, 1);
			white-space: pre-wrap;
			padding: 20px 10px 10px 10px;
			overflow-y: scroll;
			-webkit-overflow-scrolling: touch;

			.xuanji-item {
				text-align: center;
				display: inline-block;

				.item {
					color: #fff;
					font-size: 14px;
					line-height: 20px;
					padding: 5px 8px;
					margin: 10px 10px 0 10px;
					background-color: rgba(255, 255, 255, 0.2);
					display: inline-block;
				}

				.item.active {
					color: green;
					font-weight: 600;
				}
			}
		}

		.xuanji-list::-webkit-scrollbar {
			width: 0;
			height: 0;
			color: transparent;
			display: none;
		}
	}
</style>
