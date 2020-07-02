<template>
	<view class="content">
		<!-- <uni-nav-bar :status-bar="true" :show="true" title="收藏夹" :right-text="cancelFlag ? '完成' : '编辑'" @click-right="bianji"
		 :background-color="'#ec706b'" class="uni-nav-bar" /> -->

		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft" v-if="index==1">
			<view v-for="(item, index) in tabBars" :key="item.id" class="nav-item" :class="{ current: index === tabCurrentIndex }" :id="'tab' + index" @click="changeTab(index)">
				{{ item.name }}
			</view>
		</scroll-view>
		<view class="panel-content" v-if="index==1">
			<!-- 内容部分 -->
			<swiper id="swiper" class="swiper-box" :duration="300" :current="tabCurrentIndex" @change="changeTab">
				<swiper-item v-for="(tabItem,i) in tabBars" :key="i">
					<scroll-view class="panel-scroll-box" :scroll-y="enableScroll">
						<view v-for="(item, index) in tabItem.contentList" :key="index" class="news-item">
							<view v-if="cancelFlag" @tap="deleteItem(tabItem.id, item, index)" class="cancel"><icon type="cancel" size="30" /></view>
							<view v-if="item.cover" class="img-list" @longpress="longpress(item, index)" @tap="navToDetails(item)">
								<image class="img" :src="item.cover" @error="imgError(item)"></image>
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

		<!-- 底部弹窗 -->
		<uni-popup ref="share" :type="type" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-title">{{ selectObj.name }}</view>
				<view class="uni-share-content">
					<view class="uni-share-item" @tap="gotoXsJianjie">
						<view class="uni-share-content-image"><image src="../../static/jianjie.png" class="image" /></view>
						<view class="uni-share-content-text">简介</view>
					</view>
					<view class="uni-share-item" @tap="gotoXsMulu">
						<view class="uni-share-content-image"><image src="../../static/mulu.png" class="image" /></view>
						<view class="uni-share-content-text">目录</view>
					</view>
					<view class="uni-share-item" @tap="downloadXs">
						<view class="uni-share-content-image"><image src="../../static/download.png" class="image" /></view>
						<view class="uni-share-content-text">下载</view>
					</view>
					<view class="uni-share-item" @tap="deleteXsSc">
						<view class="uni-share-content-image"><image src="../../static/delete.png" class="image" /></view>
						<view class="uni-share-content-text">删除</view>
					</view>
				</view>
				<view class="uni-share-btn" @click="cancel('share')">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import config from '@/config';
import mixLoading from '@/components/mix-loading/mix-loading';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
let windowWidth = 0,
	scrollTimer = false,
	tabBar;
export default {
	components: {
		mixLoading,
		uniIcons,
		uniNavBar,
		uniPopup
	},
	data() {
		return {
			tabBars: [
				{
					name: '影视',
					id: '3',
					contentList: []
				},
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
			keyWord: '',
			loadListRequest: null,
			cancelFlag: false,
			show: false,
			type: '',
			selectObj: '', //选择的小说，电影，漫画
			index:0,
			selectObjIndex: 0 //选择的索引值
		};
	},
	computed: {},
	async onLoad() {
		// 获取屏幕宽度
		windowWidth = uni.getSystemInfoSync().windowWidth;
		
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
		this.loadList();
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
	onHide() {
		this.$refs['share'].close();
		this.cancelFlag = false;
	},
	onReady() {
		let option = uni.getStorageSync('config');
		this.index = option.index
		// #ifndef MP
		this.index = 1
		// #endif
	},
	methods: {
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
							_this.tabBars = [
								{
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
		gotoXsJianjie() {
			let item = this.selectObj;
			//跳转影视
			if (item._type == '3') {
				// #ifdef APP-PLUS
				uni.navigateTo({
					url: `/pages/video/video?data=${JSON.stringify(item)}`
				});
				// #endif
				// #ifndef APP-PLUS
				uni.navigateTo({
					url: `/pages/details/details?data=${JSON.stringify(item)}`
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
		gotoXsMulu() {
			let item = this.selectObj;
			//跳转影视
			if (item._type == '3') {
			}
			//跳转漫画
			if (item._type == '1') {
			}
			//跳转小说
			if (item._type == '2') {
				uni.navigateTo({
					url:
						'/pages/xslist/xslist?xsname=' +
						encodeURIComponent(item.name) +
						'&num=' +
						encodeURIComponent(item.num) +
						'&from=index' +
						'&url=' +
						item.url +
						'&cover=' +
						item.cover
				});
			}
		},
		downloadXs() {
			uni.showToast({
				title: '点击下载'
			});
		},
		deleteXsSc() {
			this.$refs['share'].close();
			this.deleteItem(this.selectObj._type, this.selectObj, this.selectObjIndex);
		},
		imgError(item) {
			item.cover = '/static/404.jpg';
		},
		bianji() {
			this.cancelFlag = !this.cancelFlag;
			// #ifdef APP-PLUS
			var currentWebview = this.$mp.page.$getAppWebview();
			var tn = currentWebview.getStyle().titleNView;
			tn.buttons[1].text = this.cancelFlag ? '完成' : '编辑';
			currentWebview.setStyle({
				titleNView: tn
			});
			// #endif
		},
		deleteItem(id, item, index) {
			let _this = this;
			uni.showModal({
				title: '提示',
				content: '确定删除《' + item.name + '》吗？',
				success: function(res) {
					if (res.confirm) {
						// if (id == '2') {
						// 	let data = _this.tabBars[1].contentList;
						// 	_this.tabBars[0].contentList = _this.deleteSC('xsShouCang', data, item);
						// }
						if (id == '3') {
							let data = _this.tabBars[0].contentList;
							_this.tabBars[0].contentList = _this.deleteSC('ysShouCang', data, item);
						}
						if (id == '1') {
							let data = _this.tabBars[1].contentList;
							_this.tabBars[1].contentList = _this.deleteSC('mhShouCang', data, item);
						}
					} else if (res.cancel) {
						_this.cancelFlag = false;
					}
				}
			});
		},
		deleteSC(type, data, item) {
			let _this = this;
			const value = uni.getStorageSync('type');
			for (let i = 0; i < value.length; i++) {
				if (value[i].name == item.name) {
					value.splice(i, 1);
					break;
				}
			}
			uni.removeStorage('xsNum' + item.name);
			uni.setStorage({
				key: type,
				data: value,
				success: function() {
					uni.showToast({
						title: '删除成功'
					});
					_this.cancelFlag = false;
				}
			});
			for (let i = 0; i < data.length; i++) {
				if (data[i].name == item.name) {
					data.splice(i, 1);
				}
			}
			return data;
		},
		longpress(item, index) {
			this.selectObj = item;
			this.selectObjIndex = index;
			this.cancelFlag = false;
			if (item._type == '2') {
				this.togglePopup('bottom', 'share');
			}
		},
		togglePopup(type, open) {
			switch (type) {
				case 'top':
					this.content = '顶部弹出 popup';
					break;

				case 'bottom':
					this.content = '底部弹出 popup';
					break;
				case 'center':
					this.content = '居中弹出 popup';
					break;
			}
			this.type = type;
			if (open === 'tip') {
				this.show = true;
			} else {
				this.$refs[open].open();
			}
		},
		cancel(type) {
			if (type === 'tip') {
				this.show = false;
				return;
			}
			this.$refs[type].close();
		},
		change(e) {
			// console.log(e.show)
		},
		loadList() {
			let _this = this;
			// uni.getStorage({
			// 	key: 'xsShouCang',
			// 	success(res) {
			// 		let list = res.data;
			// 		if (list && list.length) {
			// 			list.forEach((item, i) => {
			// 				item._type = '2';
			// 			});
			// 			_this.tabBars[0].contentList = list;
			// 		}
			// 	}
			// });
			uni.getStorage({
				key: 'ysShouCang',
				success(res) {
					let list = res.data;
					list.forEach((item, i) => {
						item._type = '3';
					});
					_this.tabBars[0].contentList = list;
				}
			});
			uni.getStorage({
				key: 'mhShouCang',
				success(res) {
					let list = res.data;
					list.forEach((item, i) => {
						item._type = '1';
					});
					_this.tabBars[1].contentList = list;
				}
			});
		},
		//详情
		navToDetails(item) {
			//跳转影视
			if (item._type == '3') {
				uni.navigateTo({
					url: `/pages/details/details?data=${JSON.stringify(item)}`
				});
			}
			//跳转漫画
			if (item._type == '1') {
				let obj = item.list[item.num];
				uni.setStorage({
					key: 'mhlist' + item.name,
					data: item.list
				});
				uni.navigateTo({
					url:
						'/pages/mh/mh?src=' +
						encodeURIComponent(obj.url) +
						'&name=' +
						encodeURIComponent(item.list[item.num].num) +
						'&mhname=' +
						encodeURIComponent(item.name) +
						'&num=' +
						encodeURIComponent(item.num) +
						'&url=' +
						item.url +
						'&cover=' +
						item.cover
				});
			}
			//跳转小说
			if (item._type == '2') {
				let obj = item.list[item.num];
				uni.setStorage({
					key: 'xslist' + item.name,
					data: item.list
				});
				uni.navigateTo({
					url:
						'/pages/xs/xs?src=' +
						encodeURIComponent(obj.url) +
						'&name=' +
						encodeURIComponent(item.list[item.num].num) +
						'&xsname=' +
						encodeURIComponent(item.name) +
						'&num=' +
						encodeURIComponent(item.num) +
						'&url=' +
						item.url +
						'&cover=' +
						item.cover
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

.uni-scroll-view {
}

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
	flex:1;
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
	max-width: 150px;
	width: 32%;
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
	width: 115px;
	height: 153px;
}

.img {
	flex: 1;
	width: 45%;
	height: 100%;
}

.cancel {
	position: absolute;
	right: 0px;
	top: 0px;
	background: #fff;
	z-index: 2;
	border-radius: 50%;
}

/* 底部分享 */
.uni-share {
	background: #fff;
}

.uni-share-title {
	line-height: 30px;
	font-size: 16px;
	padding: 7px 0;
	text-align: center;
}

.uni-share-content {
	display: block;

	.uni-share-item {
		display: block;
		width: 25%;
		float: left;
		text-align: center;
	}
}

.uni-share-content-box {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25%;
	box-sizing: border-box;
}

.uni-share-content-image {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	overflow: hidden;
	border-radius: 5px;
	margin: 0 auto;
}

.uni-share-content-image .image {
	width: 100%;
	height: 100%;
}

.uni-share-content-text {
	font-size: 13px;
	color: #333;
	padding-top: 5px;
	padding-bottom: 10px;
}

.uni-share-btn {
	height: 45px;
	line-height: 45px;
	border-top: 1px #f5f5f5 solid;
	text-align: center;
	color: #666;
}
</style>
