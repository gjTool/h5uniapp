<template>
	<view class="content">

		<!-- <uni-nav-bar  right-text="清除" @click-right="clearCache" :status-bar="true" :show="true" title="下载管理" :background-color="'#ec706b'" class="uni-nav-bar" /> -->

		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view v-for="(item, index) in tabBars" :key="item.id" class="nav-item" :class="{ current: index === tabCurrentIndex }"
			 :id="'tab' + index" @click="changeTab(index)">
				{{ item.name }}
			</view>
		</scroll-view>
		<view class="panel-content">
			<!-- 内容部分 -->
			<swiper id="swiper" class="swiper-box" :duration="300" :current="tabCurrentIndex" @change="changeTab">
				<swiper-item v-for="tabItem in tabBars" :key="tabItem.id">
					<view  class="panel-scroll-box" scroll-y>
						<!-- 小说 -->
						<view v-if="tabItem.id==2 && item.cache"  v-for="(item, index) in tabItem.contentList" :key="index" @longpress="longpress(item, index,tabItem.id)"
						 class="news-item">
							<view class="news-item-text"><text>小说名称：{{ item.name }}</text></view>
							<view class="news-item-text"><text>下载进度：{{item.data.length+"/"+item.xslist.length}}</text></view>
							<view class="news-item-text"><text>下载状态：{{getDownloadState(item.download)}}</text></view>
							<progress :percent="getPercent(item)" show-info stroke-width="3" backgroundColor="#999" />
						</view>
						<!-- 影视 -->
						<!-- 漫画 -->
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 底部弹窗 -->
		<uni-popup ref="share" :type="type" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-title">{{selectObj.name}}</view>
				<view class="uni-share-content">
					<view class="uni-share-item" @tap="gotoXsJianjie">
						<view class="uni-share-content-image">
							<image src="../../static/jianjie.png" class="image" />
						</view>
						<view class="uni-share-content-text">简介</view>
					</view>
					<view class="uni-share-item" @tap="gotoXsMulu">
						<view class="uni-share-content-image">
							<image src="../../static/mulu.png" class="image" />
						</view>
						<view class="uni-share-content-text">目录</view>
					</view>
					<view class="uni-share-item" @tap="downloadXs">
						<view class="uni-share-content-image">
							<image src="../../static/download.png" class="image" />
						</view>
						<view class="uni-share-content-text">{{selectObj.downloadText}}</view>
					</view>
					<view class="uni-share-item" @tap="deleteXsSc">
						<view class="uni-share-content-image">
							<image src="../../static/delete.png" class="image" />
						</view>
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
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
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
					// {
					// 	name: '小说',
					// 	id: '2',
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
				keyWord: '',
				timedown: 3,
				loadListRequest: null,
				cancelFlag: false,
				show: false,
				type: '',
				selectObj: "", //选择的小说，电影，漫画
				selectObjIndex: 0 //选择的索引值
			};
		},
		onHide() {
			this.$refs["share"].close();
			this.cancelFlag = false;
		},
		computed: {

		},
		onNavigationBarButtonTap(e){
			if (e.index == 0) {
				
			}
			if (e.index == 1) {
				this.clearCache()
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
		async onLoad() {
			let _this = this;
			// 获取屏幕宽度
			windowWidth = uni.getSystemInfoSync().windowWidth;

			//监听小说下载事件
			this.$eventHub.$on('xsDownload', (data) => {
				let value = uni.getStorageSync('xsDownload');
				if (value) {
					for (let i = 0; i < value.length; i++) {
						if (value[i].name == data.name) {
							value[i].cache = true;
							value[i].download = "2";
							_this.downloadxsAll(value[i])
							break;
						}
					}
					_this.tabBars[1].contentList = value;
					uni.setStorageSync('xsDownload',value)
				}
			})
			//监听影视下载事件
			this.$eventHub.$on('ysDownload', (data) => {

			})
			//监听漫画下载事件
			this.$eventHub.$on('mhDownload', (data) => {

			})
			setTimeout(()=>{
				let value =  _this.tabBars[1].contentList;
				for (let i = 0; i < value.length; i++) {
					if(value[i].download != "1"){
						value[i].download = "3";
					}
				}
				_this.tabBars[1].contentList = value;
				uni.setStorageSync('xsDownload',value)
			},300)
		},
		onUnload(){
			let value =  _this.tabBars[1].contentList;
			for (let i = 0; i < value.length; i++) {
				value[i].download = "3";
			}
			_this.tabBars[1].contentList = value;
			uni.setStorageSync('xsDownload',value)
		},
		onReady() {
			// let obj = {
			// 	"name": _this.xsname, //小说名称
			// "cover":_this.cover, //当前小说预览图
			// "url":this.url1, //小说url
			// "num":this.num, //当前章节索引
			// 	"cache": false, //是否缓存-显示在下载管理
			// 	"download": "0", //缓存状态 0未缓存 1全部缓存完毕 2正在缓存 3缓存暂停
			// 	"xslist": data, //小说章节目录
			// 	"data": []
			// };
			// let obj2 = {
			// 	"numName": data[num].num, //缓存下载的章节名称
			// 	"numUrl": data[num].url, //缓存下载的章节url
			// 	"num": num, //缓存下载的章节索引
			// 	"list": list, //缓存下载的章节内容
			// 	"state": state //缓存状态 loading fail done
			// }

		},
		methods: {
			clearCache(){
				uni.showModal({
					title: '提示',
					content: '确定清除所有缓存吗？',
					success: (res) => {
						if (res.confirm) {
							try {
							    uni.clearStorage()
								uni.showToast({
									title:"清除成功",
									icon:"none"
								})
							} catch (e) {
							    // error
							}
						}
					}
				});
			},
			//下载所有小说章节
			downloadxsAll(item){
				if(item.cache){
					let xslist = item.xslist;
					let data = item.data;
					this.getData(0,item)
				}
			},
			isDownload(num,data){
				let flag = false;
				for (let i = 0; i < data.length; i++) {
					if(data[i].num == num &&  (data[i].list.length ||
					data[i].state == "done")){
						flag = true;
						break;
					}
				}
				return flag
			},
			getNoDownload(num,data){
				if(!this.isDownload(num,data)){
					return num
				}
				num++
				return this.getNoDownload(num,data)
			},
			//下载章节内容
			getData(num,item){
				let _this = this;
				let value = uni.getStorageSync('xsDownload');
				if (value) {
					for (let i = 0; i < value.length; i++) {
						if (value[i].name == item.name) {
							item = value[i]
							break;
						}
					}
				}
				//递归查找
				let count = this.getNoDownload(num,item.data)
				num = count;
				if(num>=item.xslist.length){
					let value =  _this.tabBars[1].contentList;
					for (let i = 0; i < value.length; i++) {
						if(value[i].name == item.name){
							value[i].download = "1";
						}
					}
					
					_this.tabBars[1].contentList = value;
					uni.setStorageSync('xsDownload',value);
					_this.selectObj.downloadText = "继续"
					return
				}
				if(item.download == "3"){
					return
				}
				uni.request({
					url: config.baseUrl,
					data: {
						xsurl2: item.xslist[num].url
					},
					method: 'GET',
					complete: res => {
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							let list = res.data.content;
							// console.log("加载成功：第" + num + "章")
							_this.setCacheValue(num, list, "done",item,()=>{
								num++;
								_this.getData(num,item)
							})
						} else {
							// console.log("加载失败：第" + num + "章")
							_this.setCacheValue(num, [], "fail",item,()=>{
								_this.getData(num,item)
							})
						}
					}
				});
			},
			//设置缓存
			setCacheValue(num, list, state,item,callback) {
				let _this = this;
				let data = item.xslist;
				num = parseInt(num)
				let obj = {
					"name": item.name, //小说名称
					"cover": item.cover, //当前小说预览图
					"url": item.url, //小说url
					"num": item.num, //当前章节索引
					"cache": false, //是否缓存-显示在下载管理
					"download": "0", //缓存状态  0未缓存 1下载完毕 2正在下载 3下载暂停
					"xslist": data, //小说章节目录
					"data": []
				};
				if(num>=data.length-1){
					obj.download = "1";
				}else {
					obj.download = "2";
				}
				let obj2 = {
					"numName": data[num].num, //缓存下载的章节名称
					"numUrl": data[num].url, //缓存下载的章节url
					"num": num, //缓存下载的章节索引
					"list": list, //缓存下载的章节内容
					"state": state //缓存状态 loading fail done
				}
				obj.data.push(obj2)
				let value = uni.getStorageSync('xsDownload');
				let isSave = false;
				if (value) {
					for (let i = 0; i < value.length; i++) {
						if (value[i].name == item.name) {
							let arr = value[i].data;
							value[i].cover = item.cover; //当前小说预览图
							value[i].url = item.url; //小说url
							value[i].num = item.num; //当前章节索引
							let flag = false;
							for (let j = 0; j < arr.length; j++) {
								if (arr[j].numName == data[num].num && arr[j].num == num) {
									arr[j].list = list;
									arr[j].numUrl = data[num].url;
									arr[j].state = "done";
									flag = true;
								}
							}
							if (!flag) {
								value[i].xslist = data;
								value[i].data.push(obj2)
							}
							isSave = true;
							break;
						}
					}
					if (!isSave) {
						value.push(obj)
					}
				} else {
					value = [];
					value.push(obj)
				}
				_this.tabBars[1].contentList = value;
				uni.setStorageSync('xsDownload', value);
				callback && callback()
			},
			gotoXsJianjie() {
				let item = this.selectObj;
				//跳转影视
				if (this.selectType == '3') {
					// #ifdef APP-PLUS
					uni.navigateTo({
						url: `/pages/video/video?data=${JSON.stringify(item)}`
					})
					// #endif
					// #ifndef APP-PLUS
					uni.navigateTo({
						url: `/pages/details/details?data=${JSON.stringify(item)}`
					});
					// #endif
				}
				//跳转漫画
				if (this.selectType == '1') {
					uni.navigateTo({
						url: `/pages/details/mhdetails?data=${JSON.stringify(item)}`
					});
				}
				//跳转小说
				if (this.selectType == '2') {
					let obj = {
						cover: item.cover,
						name: item.name,
						num: item.num,
						url: item.url
					}
					uni.navigateTo({
						url: `/pages/details/xsdetails?data=${JSON.stringify(obj)}`
					});
				}
			},
			gotoXsMulu() {
				let item = this.selectObj;
				//跳转影视
				if (this.selectType == '3') {

				}
				//跳转漫画
				if (this.selectType == '1') {

				}
				//跳转小说
				if (this.selectType == '2') {
					uni.navigateTo({
						url: '/pages/xslist/xslist?xsname=' + encodeURIComponent(item.name) + '&num=' + encodeURIComponent(item.num) +
							'&from=download' + "&url=" + item.url + "&cover=" + item.cover
					});
				}
			},
			downloadXs() {
				let _this  = this;
				let item = this.selectObj;
				this.$refs["share"].close();
				//下载影视
				if (this.selectType == '3') {

				}
				//下载漫画
				if (this.selectType == '1') {

				}
				//下载小说
				if (this.selectType == '2') {
					let value = uni.getStorageSync('xsDownload');
					let obj = {};
					if (value) {
						for (let i = 0; i < value.length; i++) {
							if (value[i].name == item.name) {
								value[i].cache = true;
								if(value[i].download != "2"){
									value[i].download = "2";
									obj = value[i];
									_this.selectObj.downloadText = "暂停"
								}else {
									value[i].download = "3";
									_this.selectObj.downloadText = "继续"
								}
								break;
							}
						}
						_this.tabBars[1].contentList = value;
						uni.setStorageSync('xsDownload',value)
						if(obj && obj.download && obj.download == "2"){
							_this.downloadxsAll(obj);
						}
					}
				}
			},
			deleteXsSc() {
				let _this = this;
				this.$refs["share"].close();
				let item = this.selectObj;
				uni.showModal({
					title: '提示',
					content: '确定删除《' + item.name + '》吗？',
					success: (res) => {
						if (res.confirm) {
							//删除影视
							if (this.selectType == '3') {

							}
							//删除漫画
							if (this.selectType == '1') {

							}
							//删除小说
							if (this.selectType == '2') {
								let value = uni.getStorageSync('xsDownload');
								let flag = false;
								if (value && value.length) {
									for (let i = 0; i < value.length; i++) {
										if (value[i].name == item.name) {
											flag = true;
											value[i].cache = false;
											value.splice(i,1)
											break;
										}
									}
									_this.tabBars[1].contentList = value;
									uni.setStorageSync('xsDownload', value);
								}
								setTimeout(() => {
									if (flag) {
										uni.showToast({
											title: "删除成功"
										})
									} else {
										uni.showToast({
											title: "删除失败",
											icon: "none"
										})
									}
								}, 100);
							}
						} else if (res.cancel) {

						}
					}
				});

			},
			longpress(item, index, type) {
				this.selectObj = item;
				this.selectObjIndex = index;
				if(item.download == "3" || item.download == "1"){
					this.selectObj.downloadText = "继续";
				}else {
					this.selectObj.downloadText = "暂停";
				}
				this.cancelFlag = false;
				this.selectType = type;
				if (this.selectType == "2") {
					this.togglePopup('bottom', 'share')
				}
			},
			togglePopup(type, open) {
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break

					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			cancel(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				this.$refs[type].close()
			},
			change(e) {
				// console.log(e.show)
			},
			loadList() {
				let _this = this;
				uni.getStorage({
					key: 'xsDownload',
					success(res) {
						// console.log(res.data)
						_this.tabBars[1].contentList = res.data;
					}
				});
				uni.getStorage({
					key: 'ysDownload',
					success(res) {
						_this.tabBars[0].contentList = res.data;
					}
				});
				uni.getStorage({
					key: 'mhDownload',
					success(res) {
						_this.tabBars[2].contentList = res.data;
					}
				});
			},
			getPercent(item) {
				let a = item.data.length;
				let b = item.xslist.length;
				return ((a / b) * 100).toFixed(2)
			},
			getDownloadState(state) {
				// 0未缓存 1下载完毕 2正在下载 3下载暂停
				let str = ""
				switch (state) {
					case "1":
						str = "下载完毕";
						break;
					case "2":
						str = "正在下载";
						break;
					case "3":
					default:
						str = "下载暂停";
						break;
				}
				return str
			},
			imgError(item) {
				item.cover = "/static/movie.png"
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

				}, 300);
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
		// height: 1056upx;
		/* #endif */
		/* #ifdef H5 */
		/* #endif */
		position: relative;
	}

	.panel-scroll-box {
		padding: 10px;
		height: 100%;
		/* #ifdef APP-PLUS */
		// height: 1056upx;
		padding-bottom:20px;
		/* #endif */
		/* #ifdef H5 */
		/* #endif */
		position: relative;
		overflow-y: auto;
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
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		display: block;
		font-size: 14px;
		margin-bottom: 10px;
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
		.news-item-text {
			margin-bottom: 4px;
		}
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
		line-height:45px;
		border-top: 1px #f5f5f5 solid;
		text-align: center;
		color: #666;
	}
	uni-progress.uni-progress .uni-progress-info{
		font-size: 10px !important;
	}
</style>
