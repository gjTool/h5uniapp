<template>
	<view class="content">
		<view class="video-box" v-if="index==1">
			<video id="myVideo" :title="videoTitle" class="myVideo" autoplay :src="src" controls show-casting-button direction="90"
			 show-mute-btn  enable-play-gesture enable-progress-gesture show-screen-lock-button
			  @touchstart="mytouchstart" @longtap="mylongtap" @touchend="mytouchend" vslide-gesture-in-fullscreen 
			   @controlstoggle="mycontrolstoggle" @fullscreenchange="myfullscreenchange">
				<cover-view class="rate" @click="rateBtn" v-show="rateShow">x{{Rate===1?"1.0":Rate===2?"2.0":Rate}}</cover-view>
				<cover-view class="rate-list-box" v-show="rateListShow" @click="closeratelist">
					<cover-view class="rate-list" >
						<cover-view  class="rate-title">倍速播放</cover-view>
						<cover-view class="rate-item" :class="{'active':Rate===0.5}" @click="setRate(0.5)">x0.5</cover-view>
						<cover-view class="rate-item" :class="{'active':Rate===0.8}" @click="setRate(0.8)">x0.8</cover-view>
						<cover-view class="rate-item" :class="{'active':Rate===1.0}" @click="setRate(1.0)">x1.0</cover-view>
						<cover-view class="rate-item" :class="{'active':Rate===1.25}" @click="setRate(1.25)">x1.25</cover-view>
						<cover-view class="rate-item" :class="{'active':Rate===1.5}" @click="setRate(1.5)">x1.5</cover-view>
						<cover-view class="rate-item" :class="{'active':Rate===2.0}" @click="setRate(2.0)">x2.0</cover-view>
					</cover-view>
				</cover-view>
				
				<cover-view class="xuanji" @click="xuanjiBtn" v-show="xuanjiShow">选集</cover-view>
				<cover-view class="xuanji-list-box"  v-show="xuanjiListShow">
					<cover-view class="xuanji-list" overflow-y="scroll" @click="closexuanjilist">
						<cover-view class="xuanji-item" v-for="(item,k) in list" :key="k" @click="play2(item, k)">
							<cover-view  class="item" :class="{'active':num===k}">{{item.num}}</cover-view>
						</cover-view>
					</cover-view>
				</cover-view>
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
				suoShow:false,
				Rate: 1,
				rateShow:false,
				rateTimer:null,
				rateListShow:false,
				xuanjiShow:false,
				xuanjiTimer:null,
				xuanjiListShow:false,
				openid:""
			};
		},
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
			let option = uni.getStorageSync('config');
			this.index = option.index
			// #ifndef MP
			this.index = 1
			// #endif
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
		onLoad(options) {
			this.openid = uni.getStorageSync("userInfo").openid;
			this.detailData = JSON.parse(options.data);
			this.title = this.detailData.name
			uni.setNavigationBarTitle({
				title: this.detailData.name
			});
			uni.request({
				url: config.baseUrl,
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
						if(this.detailData.genre.indexOf("综艺")!=-1){
							this.list = data.reverse();
						}else{
							this.list = data;
						}
						
						let item = this.list[0];
						this.videoTitle = this.title + " " + item.num
					}
				}
			});
		},
		methods: {
			//关闭选集列表
			closexuanjilist(){
				if(this.isfullScreen){
					// this.xuanjiShow = true;
					this.xuanjiListShow = false;
				}
			},
			//选集按钮点击
			xuanjiBtn(){
				if(this.isfullScreen){
					// this.xuanjiShow = false;
					this.xuanjiListShow = true;
				}
			},
			//关闭倍速列表
			closeratelist(){
				if(this.isfullScreen){
					this.rateListShow = false;
					// this.rateShow = true;
				}
			},
			//倍速按钮点击
			rateBtn(){
				if(this.isfullScreen){
					this.rateListShow = true;
					// this.rateShow = false;
				}
			},
			setRate(num){
				if(this.isfullScreen){
					this.videoContext.playbackRate(num);
					this.Rate = num;
					this.rateListShow = false;
					// this.rateShow = true;
				}
			},
			//触摸开始
			mytouchstart(event) {
				if(this.isfullScreen){
					
				}
				
				// console.log("触摸开始")
			},
			//触摸结束
			mytouchend(event) {
				if(this.isfullScreen){
					
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
				if(this.isfullScreen){
					this.rateShow = this.controlsShow;
					this.xuanjiShow = this.controlsShow;
					if(event.detail.show){
						this.xuanjiTimer = setTimeout(()=>{
							this.xuanjiShow = false;
							this.rateShow = false;
						},5000)
					}
				}
				if(!event.detail.show){
					this.rateShow = false;
					this.xuanjiShow = false;
				}
			},
			//全屏、退出全屏 direction 有效值为 vertical 或 horizontal
			myfullscreenchange(event) {
				let fullScreen = event.detail.fullScreen;
				this.isfullScreen = fullScreen;
				if(this.isfullScreen){
					this.rateShow = true;
					this.xuanjiShow = true;
					clearTimeout(this.xuanjiTimer)
					this.xuanjiTimer = setTimeout(()=>{
						this.xuanjiShow = false;
						this.rateShow = false;
					},5000)
				}else{
					this.rateShow = false;
					this.xuanjiShow = false;
				}
			},
			fullscreenchange() {},
			playClick() {},
			videoErrorCallback(e) {},
			back() {
				uni.navigateBack()
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
		height: 140px;
		/* #endif */
		overflow: hidden;
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

	cover-view,
	cover-image {
		display: inline-block;
	}

	.cover-view {
		color: #ffffff;
	}

	.img {
		pointer-events: auto !important;
	}

	cover-view,
	cover-image {
		display: inline-block;
	}

	.jiesuo {
		position: absolute;
		width: 30px;
		height: 30px;
		top: 50%;
		left: 30px;
		margin-top: -15px;
	}
	.rate{
		position: absolute;
		width: 60px;
		height: 30px;
		top: 50%;
		right: 10px;
		margin-top: -40px;
		color: #fff;
		font-size: 14px;
	}
		
	.rate-list-box{
		position: absolute;
		left: 0;
		top:0;
		width: 100%;
		height: 100%;
		z-index:100;
		background-color: rgba(0,0,0,0.3);
		.rate-list{
			position: absolute;
			right: 0;
			top:0;
			width: 80px;
			height: 100%;
			background-color: rgba(0,0,0,1);
			text-align: center;
			.rate-title{
				color: #fff;
				display: block;
				height: 30px;
				margin-top: 10px;
			}
			.rate-item{
				color: #fff;
				display: block;
				height: 30px;
				margin-top: 10px;
			}
			.rate-item.active{
				color: green;
				font-weight: 600;
			}
		}
	}
	.xuanji{
		position: absolute;
		width: 60px;
		height: 30px;
		top: 50%;
		right: 10px;
		margin-top: 10px;
		color: #fff;
		font-size: 14px;
	}
	.xuanji-list-box{
		position: absolute;
		left: 0;
		top:0;
		width: 100%;
		height: 100%;
		z-index:100;
		background-color: rgba(0,0,0,0.9);
		display: flex;
		justify-content: center;
		align-items: center;
		.xuanji-list{
			width: 100%;
			height: 100%;
			white-space: pre-wrap;
			padding: 10px 20px;
			overflow-y: scroll;
			.xuanji-item{
				text-align: center;
				.item{
					color: #fff;
					font-size: 14px;
					padding: 5px 8px;
					margin: 10px 10px 0 10px;
					background-color: rgba(255,255,255,0.2);
				}
				.item.active{
					color: green;
					font-weight: 600;
					background-color: rgba(255,255,255,0.4);
				}
			}
		}
	}
</style>
