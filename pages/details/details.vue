<template>
	<view class="content">
		<uni-nav-bar
		v-if="index==1"
			:status-bar="true"
			:show="show"
			left-icon="arrowleft"
			@click-left="back"
			:title="title"
			right-text="收藏"
			@click-right="shoucang"
			:background-color="'#ec706b'"
			class="uni-nav-bar"
		/>
		<view class="video-box" v-if="index==1">
			<web-view class="video" :style="webviewStyles" :src="webviewsrc"></web-view>
		</view>
		<scroll-view v-if="index==1" class="scroll" scroll-y>
			<view class="scroll-content">
				<view class="image-box"><image :src="obj.cover" @error="imgError(obj)"></image></view>
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
			show:true,
			title:"影视详情",
			num: 0,
			index:0,
			loading: true,
			detailData: {},
			list: [],
			obj: {},
			name: '',
			videoContext: null,
			video_mask: null,
			video_content: null,
			videoshow: false,
			webview: null,
			webviewShow: true,
			first:true,
			checked:false,
			webviewStyles: {
				top:"44px",
				videoFullscreen:"landscape"
			},
			webviewsrc:"/hybrid/html/index.html",
		};
	},
	onReady: function(res) {
		let option = uni.getStorageSync('config');
		this.index = option.index
		// #ifndef MP
		this.index = 1
		// #endif
	},
	computed: {
		
	},
	onUnload() {},
	onLoad(options) {
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
							cover:this.obj.cover,
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
					this.list = data;
					
					this.src()
					// console.log(this.obj)
				}
			}
		});
	},
	methods: {
		src() {
			var _this = this;
			let num = this.num;
			num = parseFloat(num);
			if (this.list.length == 0) {
				return '';
			}
			let item = this.list[num];
			let url =  item.m3u8url;
			var iframe = document.getElementsByTagName("iframe")[0];
			if(iframe){
				var player = iframe.contentWindow.player
				if(player){
					player.pause()
				}
			}
			if(url==''){
				uni.showToast({
					title:"当前播放线路为空,请更换线路",
					icon:"none"
				})
				return
			}
			if(this.first){
				this.webviewsrc = this.webviewsrc+"?url="+url
				this.first = false;
			}else{
				var player = iframe.contentWindow.player
				player.src(url);
				player.play();
			}
			
			return url;
		},
		fullscreenchange() {},
		playClick() {},
		videoErrorCallback(e) {
			// uni.showModal({
			// 	content: e.target.errMsg,
			// 	showCancel: false
			// });
		},
		back(){
			uni.navigateBack()
			// uni.switchTab({
			// 	url: '/pages/home/home'
			// });
		},
		shoucang(){
			uni.showToast({
				title:"点击了收藏"
			})
		},
		imgError(obj) {
			obj.cover = '/static/404.jpg';
		},
		plays(){
			setTimeout(()=>{
				this.play()
			},1000)
		},
		play(item, index) {
			var iframe = document.getElementsByTagName("iframe")[0];
			var player = iframe.contentWindow.player
			player.play()
		},
		play2(item, index) {
			var iframe = document.getElementsByTagName("iframe")[0];
			var player = iframe.contentWindow.player
			if(this.num==index){
				player.play()
			}else{
				this.num = index;
				let item = this.list[index];
				let url =  item.m3u8url;
				player.src(url);
				player.play();
			}
		},
		playh5(item, index) {
			
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
		margin-top: 10px;
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
	overflow: hidden;
}
.text-name {
	
}
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
}
.switch-label{
	line-height: 32px;
}
cover-view,
cover-image {
	display: inline-block;
}
.cover-view {
	color: #ffffff;
}
</style>
