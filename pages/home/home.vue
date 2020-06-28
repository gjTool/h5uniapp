<template>
	<view class="content">
		<!-- #ifdef H5 -->
		<uni-nav-bar :status-bar="true" :background-color="'#ec706b'" class="uni-nav-bar">
			<view class="input-view">
				<uni-icons type="search" size="22" color="#666666" />
				<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="点击输入搜索内容" />
			</view>
		</uni-nav-bar>
		<!-- #endif -->
		<!-- #ifdef MP -->
		<uni-nav-bar :status-bar="true" :background-color="'#ec706b'" class="uni-nav-bar">
			<view class="input-view">
				<uni-icons type="search" size="22" color="#666666" />
				<input confirm-type="search" @confirm="confirm" class="input" type="text" />
			</view>
		</uni-nav-bar>
		<!-- #endif -->
		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" :style="{'top':top}" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view v-for="(item, index) in tabBars" :key="item.id" class="nav-item" :class="{ current: index === tabCurrentIndex }" :id="'tab' + index" @click="changeTab(index)">
				{{ item.name }}
			</view>
		</scroll-view>
		<view class="panel-content" :style="{'margin-top':marginTop}">
			<!-- 内容部分 -->
			<swiper id="swiper" class="swiper-box" :duration="300" :current="tabCurrentIndex" @change="changeTab">
				<swiper-item v-for="(tabItem,i) in tabBars" :key="i">
					<scroll-view class="panel-scroll-box" :scroll-y="enableScroll">
						<view v-for="(item, index) in tabItem.contentList" :key="index" class="news-item" @click="navToDetails(item)">
							<view v-if="item.cover" class="img-list"><image class="img" @error="imgError(item)" :src="item.cover" lazy-load="true"></image></view>
							<view class="text-list">
								<text class="title">{{ item.name }}</text>
							</view>
						</view>
						<view v-if="first && !tabItem.contentList.length" style="margin-top:40px;text-align: center;"><text class="title">没有搜索到数据～</text></view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 加载图标 -->
		<mixLoading class="mix-loading" v-if="loading"></mixLoading>
	</view>
</template>

<script>
import config from '@/config';
import mixLoading from '@/components/mix-loading/mix-loading';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
let windowWidth = 0,
	scrollTimer = false,
	tabBar;
export default {
	components: {
		mixLoading,
		uniIcons,
		uniNavBar
	},
	data() {
		return {
			tabBars: [
				// {
				// 	name: '影视',
				// 	id: '3',
				// 	contentList: []
				// },
				{
					name: '漫画',
					id: '1',
					contentList: []
				}
			],
			tabCurrentIndex: 0, //当前选项卡索引
			scrollLeft: 0, //顶部选项卡左滑距离
			enableScroll: true,
			contentData: {},
			loading: false,
			first: false,
			keyWord: '',
			loadListRequest: null,
			timedown: 3,
			ipad: false,
			top:"65px",
			marginTop:"99px"
		};
	},
	computed: {
		advertNavUrl() {
			return '/pages/gonggao/gonggao';
		},
		advertImgUrl() {
			return '/static/advert/1.jpg';
			// let arr = ["/static/advert/1.jpg", "/static/advert/2.jpg", "/static/advert/3.jpg"]
			// return arr[Math.floor(Math.random() * 3)]
		}
	},
	async onLoad() {
		this.loading = true;
		// 获取屏幕宽度
		let windowWidth = uni.getSystemInfoSync().windowWidth;
		// 获取状态栏高度
		this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
		// #ifdef MP
		this.top = (this.statusBarHeight+45)+"px";
		this.marginTop = (this.statusBarHeight+79)+"px";
		// #endif
		// #ifdef H5
		this.top = "45px";
		this.marginTop = "79px";
		// #endif
		if (windowWidth >= 768) {
			this.ipad = true;
		}
		this.keyWord = '1';
		let tabItem1 = this.tabBars[0];
		this.loadList(tabItem1);
		let tabItem2 = this.tabBars[1];
		this.loadList(tabItem2);
		let tabItem3 = this.tabBars[2];
		this.loadList(tabItem3);
	},
	onNavigationBarSearchInputChanged(e) {},
	onNavigationBarSearchInputConfirmed(e) {
		this.confirm({
			detail: {
				value: e.text
			}
		});
	},
	onShow() {
		// #ifdef APP-PLUS
		plus.navigator.setFullscreen(false);
		// #endif
		uni.request({
			url: 'https://www.gjtool.cn/download/config.json',
			method: 'GET',
			complete: res => {
				if (res.statusCode == 200 && res.data) {
					let data = res.data;
					uni.setStorage({
						key: 'config',
						data: data
					});
					if (!data || !data.enable) {
						uni.reLaunch({
							url: '/pages/gonggao/gonggao'
						});
					}
				}
			}
		});
	},
	onHide() {},
	onReady() {
		/**
		 * 启动页广告
		 *  初始化的时机应该是在splash关闭时，否则会造成在app端广告显示了数秒后首屏才渲染出来
		 */
		let option = uni.getStorageSync('config');
		if (option && !option.advert) {
			this.timedown = 0;
		}
		// #ifdef MP || H5
		this.timedown = 0;
		// #endif
		// #ifdef APP-PLUS
		plus.navigator.setFullscreen(false);
		// #endif
	},
	methods: {
		imgError(item) {
			item.cover = '/static/404.jpg';
		},
		/**
		 * 点击软键盘搜索按键触发
		 */
		confirm(e) {
			let _this = this;
			this.keyWord = e.detail.value;
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
			uni.hideKeyboard();
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});
			if (this.keyWord.indexOf('baseUrl:') != -1) {
				let url = this.keyWord.replace('baseUrl:', '');
				uni.showModal({
					title: '提示',
					content: '基础配置url由' + config.baseUrl + '\n改为：' + url,
					success: function(res) {
						if (res.confirm) {
							uni.setStorageSync('baseUrl', url);
							config.baseUrl = url;
							_this.keyWord = '2020';
							let tabItem1 = _this.tabBars[0];
							_this.loadList(tabItem1);
							let tabItem2 = _this.tabBars[1];
							_this.loadList(tabItem2);
							let tabItem3 = _this.tabBars[2];
							_this.loadList(tabItem3);
						} else if (res.cancel) {
						}
					}
				});
				return;
			}
			if (this.keyWord.trim() != '') {
				let tabItem1 = this.tabBars[0];
				this.loadList(tabItem1);
				let tabItem2 = this.tabBars[1];
				this.loadList(tabItem2);
				let tabItem3 = this.tabBars[2];
				this.loadList(tabItem3);
			}
		},
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		loadList(tabItem) {
			let _this = this;
			let search = '';
			if(!tabItem){
				return
			}
			if (tabItem.id == '1') {
				search = 'mhname';
			}
			if (tabItem.id == '2') {
				search = 'xsname';
			}
			if (tabItem.id == '3') {
				search = 'ysname';
			}
			if (this.keyWord.trim() == '') {
				return;
			}
			this.loading = true;
			if (this.loadListRequest) {
				// this.loadListRequest.abort();
			}

			this.loadListRequest = uni.request({
				url: config.baseUrl + '?' + search + '=' + this.keyWord + '&_=' + new Date().getTime(),
				method: 'GET',
				complete: res => {
					if (res.statusCode == 200 && res.data && res.data.code == 0) {
						let list = res.data.list;
						let arr = [];
						list.forEach(item => {
							if (item.genre && item.genre.indexOf('福利') <= -1 && item.genre.indexOf('伦理') <= -1 && item.genre.indexOf('写真') <= -1) {
								arr.push(item);
							}
						});
						if (search == 'ysname') {
							_this.contentData = arr;
						} else {
							_this.contentData = res.data.list;
						}
						_this.contentData.length = 33;
						_this.getList(tabItem, _this.contentData);
					} else {
						_this.getList(tabItem, []);
					}
					this.loading = false;
					this.loadListRequest = null;
				}
			});
		},
		//生成列表
		getList(tabItem, data) {
			let _this = this;
			let list = data;
			tabItem.contentList = []; //刷新前清空数组
			list.forEach((item, i) => {
				if (tabItem && tabItem.id == '3' && !item.cover) {
					item.cover = '/static/404.jpg';
				}
				item._type = tabItem.id;
				tabItem.contentList.push(item);
			});
			this.first = true;
		},
		//详情
		navToDetails(item) {
			//跳转影视
			if (item._type == '3') {
				// #ifdef APP-PLUS 
				uni.navigateTo({
					url: `/pages/video/video?data=${JSON.stringify(item)}`
				});
				// #endif
				// #ifdef H5
				uni.navigateTo({
					url: `/pages/details/details?data=${JSON.stringify(item)}`
				});
				// #endif
				// #ifdef MP
				uni.navigateTo({
					url: `/pages/details/detailsMP?data=${JSON.stringify(item)}`
				});
				// #endif
			}
			//跳转漫画
			if (item._type == '1') {
				uni.navigateTo({
					url: `/pages/details/mhdetails?data=${JSON.stringify(item)}`
				});
			}
			//跳转小说
			if (item._type == '2') {
				uni.navigateTo({
					url: `/pages/details/xsdetails?data=${JSON.stringify(item)}`
				});
			}
		},

		//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
		setEnableScroll(enable) {
			if (this.enableScroll !== enable) {
				this.enableScroll = enable;
			}
		},
		//tab切换
		async changeTab(e) {
			this.loading = false;
			if (scrollTimer) {
				//多次切换只执行最后一次
				clearTimeout(scrollTimer);
				scrollTimer = false;
			}
			let index = e;
			//e=number为点击切换，e=object为swiper滑动切换
			if (typeof e === 'object') {
				index = e.detail.current;
			}
			if (typeof tabBar !== 'object') {
				tabBar = await this.getElSize('nav-bar');
			}
			//计算宽度相关
			let tabBarScrollLeft = tabBar.scrollLeft;
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
			scrollTimer = setTimeout(() => {
				if (width - nowWidth / 2 > windowWidth / 2) {
					//如果当前项越过中心点，将其放在屏幕中心
					this.scrollLeft = width - nowWidth / 2 - windowWidth / 2;
				} else {
					this.scrollLeft = 0;
				}
				if (typeof e === 'object') {
					this.tabCurrentIndex = index;
				}
				this.tabCurrentIndex = index;

				let tabItem = this.tabBars[this.tabCurrentIndex];
				// this.loadList(tabItem);
			}, 300);
		},
		//获得元素的size
		getElSize(id) {
			return new Promise((res, rej) => {
				let el = uni.createSelectorQuery().select('#' + id);
				el.fields(
					{
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
<style>
page {
	background-color: #f8f8f8;
	flex: 1;
	height: 100%;
	overflow: hidden;
	/* #ifdef APP-PLUS */
	display: flex;
	/* #endif */
}
</style>
<style lang="scss" scoped>
.input-view {
	/* #ifdef APP-PLUS */
	width: 92%;
	/* #endif */
	/* #ifdef H5 */
	width: 92%;
	/* #endif */
	/* #ifdef MP */
	width: 74%;
	min-width: 190px;
	/* #endif */
	display: flex;
	background-color: #e7e7e7;
	height: 30px;
	border-radius: 15px;
	padding: 0 4%;
	flex-wrap: nowrap;
	margin: 7px 0;
	line-height: 30px;
	background: #f5f5f5;
	position: relative;
}

.input-view .uni-icon {
	line-height: 30px !important;
	font-size: 20px !important;
}
.input-view .uni-input-placeholder {
	color: #cccccc !important;
	font-size: 14px !important;
}
.input-view .input {
	height: 30px;
	line-height: 30px;
	width: 88%;
	padding: 0 3%;
	/* float: left; */
	position: absolute;
	left: 12%;
	color: #666;
}
page,
.content {
	background-color: #f8f8f8;
	flex: 1;
	height: 100%;
	overflow: hidden;
	/* #ifdef APP-PLUS */
	display: flex;
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

.uni-scroll-view {
}

.panel-content {
	flex:1;
	height: 100%;
	position: relative;
	margin-top: 45px;
	/* #ifdef H5 */
	margin-top:99px;
	/* #endif */
	/* #ifdef APP-PLUS */
	display: flex;
	/* #endif */
}

.swiper-box {
	flex:1;
	height: 100%;
	position: relative;
	/* #ifdef APP-PLUS */
	display: flex;
	/* #endif */
	/* #ifdef H5 */
	/* #endif */
}

.panel-scroll-box {
	flex:1;
	height: 100%;
	justify-content: space-around;
	.panel-item {
		background: #fff;
		padding: 30px 0;
		border-bottom: 2px solid #000;
	}
}

view {
	display: flex;
	flex-direction: column;
}

.news-item {
	position: relative;
	/* #ifndef MP */
	max-width: 150px;
	width: 32%;
	/* #endif */
	/* #ifdef MP */
	width: 33%;
	/* #endif */
	padding: 5px;
	border-bottom-width: 1px;
	border-color: #eee;
	display: flex;
	float: left;
	text-align: center;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
}

.text-list {
	width: 125px;
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

.img-list {
	flex-shrink: 0;
	flex-direction: row;
	background-color: #fff;
	width: 100%;
	height: 153px;
}

.img {
	flex: 1;
	width: 45%;
	height: 100%;
}

</style>
