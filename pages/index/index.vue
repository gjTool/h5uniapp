<template>
	<view class="content">
		<!-- <uni-nav-bar :status-bar="true" :show="true" title="收藏夹" :right-text="cancelFlag ? '完成' : '编辑'" @click-right="bianji"
		 :background-color="'#ec706b'" class="uni-nav-bar" /> -->

		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft" v-if="index==1">
			<view v-for="(item, index) in tabBars" :key="item.id" class="nav-item" :class="{ current: index === tabCurrentIndex }"
			 :id="'tab' + index" @click="changeTab(index)">
				{{ item.name }}
			</view>
		</scroll-view>
		<view class="panel-content" v-if="index==1">
			<!-- 内容部分 -->
			<swiper id="swiper" class="swiper-box" :duration="300" :current="tabCurrentIndex" @change="changeTab">
				<swiper-item v-for="(tabItem,i) in tabBars" :key="i">
					<scroll-view class="panel-scroll-box" scroll-y="true">
						<view v-for="(item, index) in tabItem.contentList" :key="index" class="news-item" @click="navToDetails(item)" v-show="item.title">
							<view class="text-time">
								<text class="text-time-l">上次观看到：</text>
								<text class="text-time-t">{{item.title}}</text>
								<text class="text-time-s">{{item.saveTime}}</text>
							</view>
							<view v-show="item.cover" class="img-list">
								<image class="img" @error="imgError(item)" :src="item.cover" lazy-load="true"></image>
								<view class="img-text" v-show="item.imgText">
									{{ item.imgText }}
								</view>
								<view class="img-genre">
									{{ item.genre }}
								</view>
							</view>
							<view class="text-list">
								<text class="title">{{ item.name }}</text>
							</view>
						</view>
						<!-- 加载图标 -->
						<mixLoading class="mix-loading" v-if="loading"></mixLoading>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	import config from '@/config';
	import mixLoading from '@/components/mix-loading/mix-loading';
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components: {
			mixLoading,
			uniIcons,
			uniNavBar,
			uniPopup
		},
		data() {
			return {
				tabBars: [{
						name: '影视',
						id: '3',
						contentList: []
					},
					{
						name: '漫画',
						id: '1',
						contentList: []
					},
					{
						name: '小说',
						id: '2',
						contentList: []
					}
				],
				tabCurrentIndex: 0, //当前选项卡索引
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true,
				contentData: {},
				loading: false,
				keyWord: '',
				loadListRequest: null,
				cancelFlag: false,
				show: false,
				type: '',
				selectObj: '', //选择的小说，电影，漫画
				index: 0,
				selectObjIndex: 0, //选择的索引值
				openid: "",
				MhZJList: [] ,//漫画最近浏览记录
				YsZJList:[] ,//影视最近观看记录
				XsZJList:[] //影视最近观看记录
			};
		},
		async onLoad() {
			let _this = this;
			let option = uni.getStorageSync('config');
			this.index = option.index
			// #ifndef MP
			this.index = 1
			// #endif
			// 获取屏幕宽度
			_this.windowWidth = uni.getSystemInfoSync().windowWidth;
			this.openid = uni.getStorageSync("userInfo").openid;
			this.MhZJList = config.getMhZJ();
			if(this.MhZJList&&this.MhZJList.length){
				this.tabBars[1].contentList = this.MhZJList;
				for(let k=0;k<this.tabBars[1].contentList.length;k++){
					((k)=>{
						this.getMhCover(this.tabBars[1].contentList[k],k,this.tabBars[1].contentList.length)
					})(k)
				}
				
			}
			this.YsZJList = config.getYsZJ();
			if(this.YsZJList&&this.YsZJList.length){
				this.tabBars[0].contentList = this.YsZJList;
				for(let k=0;k<this.tabBars[0].contentList.length;k++){
					((k)=>{
						this.getCover(this.tabBars[0].contentList[k],k,this.tabBars[0].contentList.length)
					})(k)
				}
			}
			this.XsZJList = config.getXsZJ();
			if(this.XsZJList&&this.XsZJList.length){
				this.tabBars[2].contentList = this.XsZJList;
				for(let j=0;j<this.tabBars[2].contentList.length;j++){
					((j)=>{
						this.getXsCover(this.tabBars[2].contentList[j],j,this.tabBars[2].contentList.length)
					})(j)
				}
			}
			_this.tabBar =  this.getElSize('nav-bar');
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				this.clearCache();
			}
			if (e.index == 1) {
				this.bianji();
			}
		},
		onShow() {
			// #ifdef APP-PLUS
			plus.navigator.setFullscreen(false);
			// #endif
			this.MhZJList = config.getMhZJ();
			if(this.MhZJList&&this.MhZJList.length){
				this.tabBars[1].contentList = this.MhZJList
			}
			this.YsZJList = config.getYsZJ();
			if(this.YsZJList&&this.YsZJList.length){
				this.tabBars[0].contentList = this.YsZJList
			}
			this.XsZJList = config.getXsZJ();
			if(this.XsZJList&&this.XsZJList.length){
				this.tabBars[2].contentList = this.XsZJList;
			}
		},
		methods: {
			getCover(item,k,length){
				if (this.index == 0 ) {
					return
				}
				let ysurlRequest = uni.request({
					url: uni.getStorageSync('baseUrl'),
					data: {
						ysurl: item.url
					},
					method: 'GET',
					complete: res => {
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							let obj = res.data.data;
							let str = item.name;
							item.cover = obj.cover;
							item.name = obj.name;
							let text = str.replace(item.name1,"");
							if(text.indexOf("更新")!=-1){
								if(item.genre.indexOf("综艺")!=-1){
									let numstr = res.data.list[res.data.list.length-1].num;
									if(numstr.indexOf("集")!=-1 || numstr.indexOf("期")!=-1){
										item.imgText = "更新至"+numstr;
									}else{
										item.imgText = "更新至"+numstr+"期";
									}
									
								}else{
									item.imgText = text
								}
							}else if(text.indexOf("完结")!=-1){
								if(item.genre.indexOf("综艺")==-1){
									item.imgText =  res.data.list.length+"集全"
								}else{
									item.imgText = text
								}
							}else if(text.indexOf("集")!=-1){
								item.imgText = text
							}else if(text.indexOf("期")!=-1){
								item.imgText = text
							}else{
								item.imgText = item.time+"更新"
							}
						}
					}
				})	
				this.ysurlRequest = ysurlRequest;
				return ysurlRequest;
			},
			clearYsurlRequestList(){
				if(this.ysurlRequestList.length){
					this.ysurlRequestList.forEach((item)=>{
						item.abort();
					})
					this.ysurlRequestList = [];
				}
			},
			getMhCover(item,k,length){
				if (this.index == 0 ) {
					return
				}
				let mhurlRequest = uni.request({
					url: uni.getStorageSync('baseUrl'),
					data: {
						mhurl1: item.url
					},
					method: 'GET',
					complete: res => {
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							let obj = res.data.data;
							let str = item.name;
							item.cover = obj.cover;
							item.name = obj.name;
							item.imgText = obj.time?obj.time+"更新":""
							item.genre = obj.tag ?obj.tag:"其他";
						}
					}
				})	
				this.mhurlRequest = mhurlRequest;
				return mhurlRequest;
			},
			clearMhurlRequestList(){
				if(this.mhurlRequestList.length){
					this.mhurlRequestList.forEach((item)=>{
						item.abort();
					})
					this.mhurlRequestList = [];
				}
			},
			getXsCover(item,k,length){
				if (this.index == 0 ) {
					return
				}
				let xsurlRequest = uni.request({
					url: uni.getStorageSync('baseUrl'),
					data: {
						xsurl1: item.url
					},
					method: 'GET',
					complete: res => {
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							let obj = res.data.data;
							item.imgText = obj.num;
							item.num = obj.num;
						}
					}
				})	
				this.xsurlRequest = xsurlRequest;
				return xsurlRequest;
			},
			clearXsurlRequestList(){
				if(this.xsurlRequestList.length){
					this.xsurlRequestList.forEach((item)=>{
						item.abort();
					})
					this.xsurlRequestList = [];
				}
			},
			//详情
			navToDetails(item) {
				//跳转影视
				if (item._type == '3') {
					// #ifdef APP-PLUS 
					uni.redirectTo({
						url: `/pages/video/video?data=${JSON.stringify(item)}`
					});
					// #endif
					// #ifdef H5
					uni.redirectTo({
						url: `/pages/details/details?data=${JSON.stringify(item)}`
					});
					// #endif
					// #ifdef MP
					let url = `/pages/details/detailsMP?data=${JSON.stringify(item)}`;
					if (this.index == 0) {
						url = ""
					}
					uni.navigateTo({
						url: url
					});
					// #endif
				}
			
				//跳转漫画
				if (item._type == '1') {
					let list = uni.getStorageSync('mhlist' + item.url);
					let url = '/pages/mh/mh?src=' + encodeURIComponent(list[item.num].url) + "&data=" +JSON.stringify(item)
					if (this.index == 0) {
						url = ""
					}
					uni.navigateTo({
						url: url
					});
				}
				//跳转小说
				if (item._type == '2') {
					console.log(item.index,item.cover)
					let list = uni.getStorageSync('xslist' + item.url);
					let url = '/pages/xs/xs?src=' + encodeURIComponent(list[item.index].url) + "&data=" +JSON.stringify(item)
					if (this.index == 0) {
						url = ""
					}
					uni.navigateTo({
						url: url
					});
				}
			},
			clearCache() {
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '确定清除所有缓存吗？',
					success: res => {
						if (res.confirm) {
							try {
								uni.clearStorage();
								uni.showToast({
									title: '清除成功',
									icon: 'none'
								});
								_this.tabBars = [{
										name: '影视',
										id: '3',
										contentList: []
									},
									{
										name: '漫画',
										id: '1',
										contentList: []
									}
								];
							} catch (e) {
								// error
							}
						}
					}
				});
			},
			imgError(item) {
				item.cover = '/static/404.jpg';
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable) {
				if (this.enableScroll !== enable) {
					this.enableScroll = enable;
				}
			},
			//tab切换
			async changeTab(e) {
				let _this  = this;
				this.loading = false;
				if (_this.scrollTimer) {
					//多次切换只执行最后一次
					clearTimeout(_this.scrollTimer);
					_this.scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if (typeof e === 'object') {
					index = e.detail.current;
				}
				if (typeof _this.tabBar !== 'object') {
					_this.tabBar = await this.getElSize('nav-bar');
				}
				//计算宽度相关
				let tabBarScrollLeft = _this.tabBar.scrollLeft;
				let width = 0;
				let nowWidth = 0;
				//获取可滑动总宽度
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
					if (i === index) {
						nowWidth = result.width;
					}
				}
				if (typeof e === 'number') {
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndex = index;
				}
				//延迟300ms,等待swiper动画结束再修改tabbar
				_this.scrollTimer = setTimeout(() => {
					
				}, 0);
				if (width - nowWidth / 2 > _this.windowWidth / 2) {
					//如果当前项越过中心点，将其放在屏幕中心
					this.scrollLeft = width - nowWidth / 2 - _this.windowWidth / 2;
				} else {
					this.scrollLeft = 0;
				}
				if (typeof e === 'object') {
					this.tabCurrentIndex = index;
				}
				this.tabCurrentIndex = index;
				
				let tabItem = this.tabBars[this.tabCurrentIndex];
			},
			//获得元素的size
			getElSize(id) {
				return new Promise((res, rej) => {
					let el = uni.createSelectorQuery().select('#' + id);
					el.fields({
							size: true,
							scrollOffset: true,
							rect: true
						},
						data => {
							res(data);
						}
					).exec();
				});
			}
		}
	};
</script>

<style lang="scss">
	page,
	.content {
		background-color: #f8f8f8;
		height: 100%;
		overflow: hidden;
		/* #ifdef APP-PLUS */
		// height: 1334upx;
		/* #endif */
	}

	/* 顶部tabbar */
	.nav-bar {
		position: fixed;
		/* #ifdef APP-PLUS */
		/* top: 64px; */
		/* #endif */
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 10;
		height: 45px;
		white-space: nowrap;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
		background-color: #fff;
		text-align: center;

		.nav-item {
			display: inline-block;
			width: 75px;
			height: 45px;
			text-align: center;
			line-height: 45px;
			font-size: 15px;
			color: #303133;
			position: relative;

			&:after {
				content: '';
				width: 0;
				height: 0;
				border-bottom: 2px solid #007aff;
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				transition: 0.3s;
			}
		}

		.current {
			color: #007aff;

			&:after {
				width: 50%;
			}
		}
	}

	.uni-scroll-view {}

	.panel-content {
		height: 100%;
		position: relative;
		margin-top: 45px;
		/* #ifdef H5 */
		/* #endif */
		/* #ifdef APP-PLUS */
		// height: 1334upx;
		/* #endif */
	}

	.swiper-box {
		height: 100%;
		position: relative;
		/* #ifdef APP-PLUS */
		// height: 1334upx;
		/* #endif */
		/* #ifdef H5 */
		/* #endif */
	}

	.panel-scroll-box {
		height: 100%;
		flex: 1;
		overflow-y: scroll;
		.panel-item {
			background: #fff;
			padding: 30px 0;
			border-bottom: 2px solid #000;
		}
	}
	.panel-scroll-box::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		display: none;
	}

	view {
		display: flex;
		flex-direction: column;
	}

	.news-item {
		position: relative;
		/* #ifndef MP */
		max-width: 150px;
		/* #endif */
		width: 50%;
		padding: 5px;
		border-bottom-width: 1px;
		border-color: #eee;
		display: flex;
		float: left;
		text-align: center;
		// align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.text-list {
		// width: 125px;
		height: 42px;
		padding: 4px;
	}

	.title {
		font-size: 12px;
		color: #303133;
		line-height: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.text-time{
		font-size: 12px;
		color: #303133;
		line-height: 18px;
		width: 100%;
		text-align: left;
		.text-time-l{
			text-align: left;
		}
		.text-time-t{
			color: green;
		}
		.text-time-s{
			
		}
	}
	.img-list {
		flex-shrink: 0;
		flex-direction: row;
		background-color: #fff;
		width: 100%;
		// height: 153px;
		height: 420upx;
		position: relative;

		.img-genre {
			position: absolute;
			background-color: rgba(0, 0, 0, 0.4);
			color: #fff;
			left: 0;
			top: 0;
			text-align: left;
			font-size: 10px;
			padding-left: 4px;
			padding-right: 4px;
		}

		.img-text {
			position: absolute;
			background-color: rgba(0, 0, 0, 0.4);
			color: #fff;
			left: 0;
			bottom: 0;
			width: 100%;
			text-align: left;
			font-size: 10px;
			padding-left: 4px;
			padding-right: 4px;
		}
	}

	.img {
		flex: 1;
		width: 45%;
		height: 100%;
	}

	.limg {
		width: 24px;
		height: 36px;
	}

	.wimg {
		width: 30px;
		height: 30px;
	}

	.wv-v-h-row {
		padding: 4px 10px;
	}

	.wv-v-h-col-middle {
		margin-bottom: 10px;
	}

	.wv-lt-location {
		display: flex;
		justify-content: center;

		.limg {
			float: left;
		}

		text {
			display: inline;
			float: left;
			width: 30%;
		}
	}

	.listFunction {
		margin-top: 10px;

		// background:#fff;
		.listStrip {
			display: flex;
			padding: 4upx;
			position: relative;

			// &:last-of-type{
			// 	border: none;
			// }
			image {
				width: 50upx;
				height: 50upx;
				position: absolute;
			}

			.text {
				padding-left: 24px;
				color: #fff;
				font-size: 16px;
			}
		}
	}

	.wv-f-h-row {
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
	}

	.wv-v-h-col-left {
		border: 1px solid #ccc;
		padding: 0px 10px 10px 10px;
		margin-top: 10px;
	}

	.user {
		background: #0aebeb url('https://apip.weatherdt.com/view/static/images/bg_00d.png');
		padding: 10px;
		overflow-y: scroll !important;

		view {
			color: #fff;
		}

		text {
			color: #fff;
		}
	}

	.weixin-advert {
		width: 100%;
		height: 100%;
		flex: 1;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 999;
		display: felx;
		justify-content: center;
		align-items: center;

		.img-box {
			text-align: center;
			display: felx;
			justify-content: center;
			align-items: center;

			.text {
				color: #fff;
				padding: 0 10px;
			}

			.img {
				width: 200px;
				height: 200px;

			}
		}
	}
</style>
