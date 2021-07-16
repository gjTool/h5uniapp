<template>
	<view class="content">
		<view class="" v-if="index==1">
			<!-- #ifdef H5 -->
			<uni-nav-bar :status-bar="true" :background-color="'#ec706b'" class="uni-nav-bar">
				<view class="input-view">
					<uni-icons type="search" size="22" color="#666666" />
					<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索内容" />
				</view>
			</uni-nav-bar>
			<!-- #endif -->
			<!-- #ifdef MP -->
			<uni-nav-bar :status-bar="true" :background-color="'#ec706b'" class="uni-nav-bar">
				<view class="input-view">
					<uni-icons type="search" size="22" color="#666666" />
					<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索内容" />
				</view>
			</uni-nav-bar>
			<!-- #endif -->
			<!-- 顶部选项卡 -->
			<scroll-view id="nav-bar" class="nav-bar" :style="{'top':top}" scroll-x scroll-with-animation
				:scroll-left="scrollLeft">
				<view v-for="(item, index) in tabBars" :key="item.id" class="nav-item"
					:class="{ current: index === tabCurrentIndex }" :id="'tab' + index" @click="changeTab(index)">
					{{ item.name }}
				</view>
			</scroll-view>
			<view class="panel-content"
				:style="{'margin-top':marginTop,'padding-bottom':paddingBottom,'height':height}">
				<!-- 内容部分 -->
				<swiper id="swiper" class="swiper-box" :duration="300" :current="tabCurrentIndex" @change="changeTab">
					<swiper-item v-for="(tabItem,i) in tabBars" :key="i">
						<scroll-view class="panel-scroll-box" :scroll-y="enableScroll">
							<view v-for="(item, index) in tabItem.contentList" :key="index" class="news-item"
								@click="navToDetails(item)">
								<view v-show="item.cover" class="img-list" :class="{'blank':item.blank}">
									<image class="img" @error="imgError(item)" :src="item.cover" lazy-load="true">
									</image>
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
							<ad unit-id="adunit-78c062b57e82831a" style="width: 100%;"></ad>
							<view v-if="first && !tabItem.contentList.length"
								style="margin-top:40px;text-align: center;"><text class="title">没有搜索到数据～</text></view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 加载图标 -->
			<mixLoading class="mix-loading" v-if="loading"></mixLoading>
			<!-- #ifdef H5 -->
			<view class="weixin-advert" v-if="weixinAdvert" @click="closeImg" id="weixin-advert">
				<view class="img-box">
					<text class="text">长按图片识别小程序码，进入免费看电影小程序</text>
					<img class="img" id="weixin-img" style="position: relative;" src="https://www.gjtool.cn/h5/static/weixin_advert.jpeg" />
				</view>
			</view>
			<!-- #endif -->
		</view>
		<view class="" v-if="index==0" style="overflow-y: scroll !important;flex: 1;">
			<uni-nav-bar :status-bar="true" :background-color="'#ec706b'" class="uni-nav-bar">
				<view class="input-view">
					<uni-icons type="search" size="22" color="#666666" />
					<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入城市名称" />
				</view>
			</uni-nav-bar>
			<scroll-view scroll-y class="panel-content panel-scroll-box user" :style="{'margin-top':marginTop}">
				<!--天气-->
				<view class="listFunction">
					<view class="listStrip">
						<image src="../../static/weather/location_white.png" mode="aspectFit"></image>
						<view class="text">{{weatherBody.city+' '}} {{' '+weatherBody.update_time}}更新</view>
						<text class="iconfont iconyou"></text>
					</view>
				</view>


				<view class="wv-v-h-col-left" style="width: 57.561%;">
					<!--当前天气-->
					<view class="listFunction">
						<view class="listStrip">
							<image class="wimg" v-if="weatherBodydata && weatherBodydata.wea_img=='yun'"
								src="/static/weather/yun.png" alt="">
								<image class="wimg" v-else-if="weatherBodydata && weatherBodydata.wea_img=='yu'"
									src="/static/weather/yu.png" alt="">
									<image class="wimg"
										v-else-if="weatherBodydata && weatherBodydata.wea_img=='bingbao'"
										src="/static/weather/bingbao.png" alt="">
										<image class="wimg"
											v-else-if="weatherBodydata && weatherBodydata.wea_img=='lei'"
											src="/static/weather/lei.png" alt="">
											<image class="wimg"
												v-else-if="weatherBodydata && weatherBodydata.wea_img=='longjuanfeng'"
												src="/static/weather/longjuanfeng.png" alt="">
												<image class="wimg"
													v-else-if="weatherBodydata && weatherBodydata.wea_img=='qing'"
													src="/static/weather/qing.png" alt="">
													<image class="wimg"
														v-else-if="weatherBodydata && weatherBodydata.wea_img=='shachen'"
														src="/static/weather/shachen.png" alt="">
														<image class="wimg"
															v-else-if="weatherBodydata && weatherBodydata.wea_img=='wu'"
															src="/static/weather/wu.png" alt="">
															<image class="wimg"
																v-else-if="weatherBodydata && weatherBodydata.wea_img=='xue'"
																src="/static/weather/xue.png" alt="">
																<image class="wimg"
																	v-else-if="weatherBodydata && weatherBodydata.wea_img=='yin'"
																	src="/static/weather/yin.png" alt="">
																	<image class="wimg"
																		v-else-if="weatherBodydata && weatherBodydata.wea_img=='yujiaxue'"
																		src="/static/weather/yujiaxue.png" alt="">
																		<image class="wimg" v-else
																			src="../../static/weather/cond-a-01d.png">
																			<view class="text">
																				{{weatherBodydata ? weatherBodydata.wea:'' +' '+ weatherBodydata ? weatherBodydata.tem:''}}
																			</view>
						</view>
					</view>
					<view class="wv-v-h-now">
						<view class="wv-n-h-now">

							<!--空气质量-->
							<view class="wv-n-h-now-aqi-item wv-n-h-now-aqi-item-color-2">
								<view class="wv-n-h-label"></view>
								<text>空气质量：{{weatherBodydata.air_level}}</text>
							</view>
							<!--风向湿度压强-->
							<view class="wv-nb-now-base">
								<view class="wv-nb-row">
									<view class="wv-nb-col-3 wv-nb-now-base-item">
										<view>
											{{weatherBodydata.win ? weatherBodydata.win[0]:'' +' '+weatherBodydata.win_speed}}
										</view>
									</view>
									<view class="wv-nb-now-base-item wv-nb-col-3">
										<view>空气指数：{{weatherBodydata.air}}</view>
									</view>
								</view>
								<view class="wv-nb-row">
									<view class="wv-nb-col-3 wv-nb-now-base-item">
										<view>相对湿度{{weatherBodydata.humidity}}%</view>
									</view>
									<view class="wv-nb-now-base-item wv-nb-col-3">
										<view></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="wv-v-h-col-middle"></view>
				<!--今明后天气预报-->
				<view class="wv-v-h-col-right">
					<view class="wv-f-h-row" v-for="(item,index) in forecastList" :key="index">
						<view class="wv-f-h-col-12 wv-f-h-forecast-item">
							<view class="wv-f-h-col-4 wv-f-h-forecast-date" style="width: 42%;">
								<text target="_blank"
									href="http://m.weather.com.cn/mweather15d/index.shtml?101190101#cj"
									class="wv-f-h-a">{{item.day+' '+ item.date}}
								</text>

							</view>
							<view class="listFunction">
								<view class="listStrip">
									<image class="wimg" v-if="item.wea_img=='yun'" src="/static/weather/yun.png" alt="">
										<image class="wimg" v-else-if="item.wea_img=='yu'" src="/static/weather/yu.png"
											alt="">
											<image class="wimg" v-else-if="item.wea_img=='bingbao'"
												src="/static/weather/bingbao.png" alt="">
												<image class="wimg" v-else-if="item.wea_img=='lei'"
													src="/static/weather/lei.png" alt="">
													<image class="wimg" v-else-if="item.wea_img=='longjuanfeng'"
														src="/static/weather/longjuanfeng.png" alt="">
														<image class="wimg" v-else-if="item.wea_img=='qing'"
															src="/static/weather/qing.png" alt="">
															<image class="wimg" v-else-if="item.wea_img=='shachen'"
																src="/static/weather/shachen.png" alt="">
																<image class="wimg" v-else-if="item.wea_img=='wu'"
																	src="/static/weather/wu.png" alt="">
																	<image class="wimg" v-else-if="item.wea_img=='xue'"
																		src="/static/weather/xue.png" alt="">
																		<image class="wimg"
																			v-else-if="item.wea_img=='yin'"
																			src="/static/weather/yin.png" alt="">
																			<image class="wimg"
																				v-else-if="item.wea_img=='yujiaxue'"
																				src="/static/weather/yujiaxue.png"
																				alt="">
																				<image class="wimg" v-else
																					src="../../static/weather/cond-a-02d.png">
																					<view class="text">
																						{{item.wea}}{{' '+item.tem2}}/{{item.tem1}}
																					</view>
								</view>
							</view>
							<view class="wv-v-h-col-middle"></view>
						</view>
					</view>
					<view class="">
						温馨提示：
					</view>
					<view v-for="(item,index) in weatherBodydata.index" :key="index">
						<text v-if="index != 1">
							{{ item.title.indexOf('中国人民保险<br>')!=-1  ? '':item.title+' '+item.level }}</text>
						<text> {{item.desc}}</text>
						<view class="wv-v-h-col-middle"></view>
					</view>
				</view>
				<view class="wv-v-h-copyright">
					<view class="wv-cr-h-copyright">
						<text> 数据来源于天气网</text>
					</view>
				</view>
				<ad unit-id="adunit-78c062b57e82831a" style="width: 100%;"></ad>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import config from '@/config';
	import mixLoading from '@/components/mix-loading/mix-loading';
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components: {
			mixLoading,
			uniIcons,
			uniNavBar
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
				contentData: [],
				loading: false,
				first: false,
				keyWord: '',
				loadListRequest: null,
				timedown: 3,
				ipad: false,
				top: "64px",
				marginTop: "98px",
				paddingBottom: "0px",
				index: uni.getStorageSync('config').index,
				weatherBody: {},
				weatherBodydata: {},
				forecastList: [],
				height: "100%",
				weixinAdvert: true,
				ysurlRequest: null,
				ysurlRequestList: [],
				mhurlRequest: null,
				mhurlRequestList: [],
				searchWord: uni.getStorageSync('config').searchWord || "2020",
				openid: "",
				configTimer: null,
				limit: 12,
				timer0: null
			};
		},
		computed: {
			advertNavUrl() {
				return '/pages/gonggao/gonggao';
			},
			advertImgUrl() {
				return '/static/advert/1.jpg';
			}
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
		async onLoad() {
			clearTimeout(config.timer)
			config.timer = setTimeout(() => {
				if (wx.createInterstitialAd) {
					config.interstitialAd = wx.createInterstitialAd({
						adUnitId: 'adunit-04984e19200bf32e'
					})
					config.interstitialAd.onLoad(() => {})
					config.interstitialAd.onError((err) => {})
					config.interstitialAd.onClose(() => {})

				}
				config.interstitialAd.show().catch((err) => {
					console.error(err)
				})
			}, 1500)
			let _this = this;
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
			// 获取屏幕宽度
			_this.windowWidth = uni.getSystemInfoSync().windowWidth;
			// 获取屏幕高度
			let windowHeight = uni.getSystemInfoSync().windowHeight;
			// 获取状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			// #ifdef MP
			_this.index = option.index;
			this.top = (this.statusBarHeight + 44) + "px";
			this.marginTop = (this.statusBarHeight + 78) + "px";

			// #endif
			// #ifdef H5
			this.top = "44px";
			this.marginTop = "88px";
			this.height = (windowHeight - 88) + "px"
			_this.index = 1;
			_this.loading = true;
			_this.keyWord = _this.searchWord;
			let tabItem1 = _this.tabBars[0];
			_this.loadList(tabItem1);
			let tabItem2 = _this.tabBars[1];
			_this.loadList(tabItem2);
			let tabItem3 = _this.tabBars[2];
			_this.loadList(tabItem3);
			// #endif
			if (_this.windowWidth >= 768) {
				this.ipad = true;
			}
			// #ifdef APP-PLUS
			this.top = "0px";
			this.marginTop = "44px";
			this.height = (windowHeight - 44) + "px";
			// #endif
			this.tabBar = this.getElSize('nav-bar');
			// #ifdef MP
			// #endif
			uni.request({
				url: 'https://www.gjtool.cn/download/config.json?_t=' + new Date().getTime(),
				method: 'GET',
				complete: res => {
					if (res.statusCode == 200 && res.data) {
						uni.setStorage({
							key: 'config',
							data: res.data
						});
						_this.index = res.data.index;
						if (res.data.baseUrl) {
							uni.setStorageSync('baseUrl', res.data.baseUrl);
						} else {
							uni.setStorageSync('baseUrl', "https://www.gjtool.cn/py");
						}
						// #ifdef H5
						_this.index = 1
						// #endif
						if (_this.index == 0) {
							_this.marginTop = (_this.statusBarHeight + 44) + "px";
							if (!_this.forecastList.length) {
								_this.getWeather("北京")
							}
						} else {
							_this.marginTop = (_this.statusBarHeight + 88) + "px";
							_this.height = (uni.getSystemInfoSync().windowHeight - 88 - _this
								.statusBarHeight) + "px";
							if (!_this.contentData.length) {
								_this.loading = true;
								_this.keyWord = _this.searchWord;
								let tabItem1 = _this.tabBars[0];
								_this.loadList(tabItem1);
								let tabItem2 = _this.tabBars[1];
								_this.loadList(tabItem2);
								let tabItem3 = _this.tabBars[2];
								_this.loadList(tabItem3);
							}
						}

					}
				}
			});
		},
		onNavigationBarSearchInputConfirmed(e) {
			this.confirm({
				detail: {
					value: e.text
				}
			});
		},
		onShow() {
			let _this = this;
			// #ifdef APP-PLUS
			plus.navigator.setFullscreen(false);
			// #endif
			this.openid = uni.getStorageSync("userInfo").openid;
			let option = uni.getStorageSync('config');
			if (option && option.limit) {
				this.limit = option.limit ? option.limit : this.limit
			}
			// #ifdef MP
			clearTimeout(config.configTimer)
			if (_this.index == option.index) {
				return
			}
			_this.index = option.index;
			if (_this.index == 0) {
				_this.marginTop = (_this.statusBarHeight + 44) + "px";
				if (!_this.forecastList.length) {
					_this.getWeather("北京")
				}
			} else {
				_this.marginTop = (_this.statusBarHeight + 88) + "px";
				_this.height = (uni.getSystemInfoSync().windowHeight - 88 - _this.statusBarHeight) + "px";
				if (!_this.contentData.length) {
					_this.loading = true;
					_this.keyWord = _this.searchWord;
					let tabItem1 = _this.tabBars[0];
					_this.loadList(tabItem1);
					let tabItem2 = _this.tabBars[1];
					_this.loadList(tabItem2);
					let tabItem3 = _this.tabBars[2];
					_this.loadList(tabItem3);
				}
			}
			// #endif
		},
		methods: {
			closeImg(e) {
				if (e.target.id !== "weixin-img") {
					this.weixinAdvert = false
				}
			},
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
				if (this.index == 1) {
					if (this.tabCurrentIndex == 0) {
						let tabItem1 = this.tabBars[0];
						this.loadList(tabItem1, this.limit);
					} else if (this.tabCurrentIndex == 1) {
						let tabItem2 = this.tabBars[1];
						this.loadList(tabItem2, this.limit);
					} else if (this.tabCurrentIndex == 2) {
						let tabItem3 = this.tabBars[2];
						this.loadList(tabItem3, this.limit);
					}
				} else {
					this.getWeather(this.keyWord)
				}
			},
			getWeather(keyWord) {
				uni.request({
					url: 'https://www.tianqiapi.com/api/',
					method: 'GET',
					data: {
						version: "v1",
						city: keyWord,
						appid: "25698621",
						appsecret: "6vuISqb3",
						vue: 1
					},
					complete: res => {
						let arr = []
						if (res.statusCode == 200 && res.data) {
							// console.log(res.data)
							let data = res.data.data
							for (let i = 0; i < data.length; i++) {
								let index = data[i].day.indexOf('（')
								data[i].day = data[i].day.substr(index + 1, 2)
								arr.push(data[i])
							}
							this.weatherBody = res.data;
							this.weatherBodydata = res.data.data[0];
							this.forecastList = arr
						}
					}
				});
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			loadList(tabItem, limit) {
				if (!limit) {
					limit = this.limit;
				}
				let _this = this;
				let search = '';
				if (!tabItem) {
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
					this.keyWord = this.searchWord
				}
				this.loading = true;
				if (this.loadListRequest) {
					// this.loadListRequest.abort();
				}
				if (this.ysurlRequestList.length) {
					this.clearYsurlRequestList()
				}
				if (this.mhurlRequestList.length) {
					this.clearMhurlRequestList()
				}
				if (this.index == 0) {
					return
				}
				this.loadListRequest = uni.request({
					url: uni.getStorageSync('baseUrl') + '?' + search + '=' + this.keyWord + '&_=' + new Date()
						.getTime(),
					method: 'GET',
					complete: res => {
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							let list = res.data.list;
							let arr = [];
							list.forEach(item => {
								if (item.genre && item.genre.indexOf('福利') <= -1 && item.genre.indexOf(
										'伦理') <= -1 && item.genre.indexOf(
										'写真') <= -1) {
									arr.push(item);
								}
							});
							if (search == 'ysname') {
								_this.contentData = arr;
							} else {
								_this.contentData = res.data.list;
							}
							if (_this.contentData.length < 7) {
								var len = 7 - _this.contentData.length;
								for (let i = 0; i < len; i++) {
									_this.contentData.push({
										imgText: "",
										genre: "",
										cover: "/static/404.jpg",
										blank: true
									})
								}
							} else {
								_this.contentData.length = limit;
							}
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
					let genre = item.genre;
					if (tabItem && tabItem.id == '3' && !item.cover) {
						item.cover = '/static/404.jpg';
					}
					item._type = tabItem.id;
					item.imgText = "";
					item.genre = genre ? genre : "";
					if (tabItem.id == '2') {
						item.imgText = item.num
						item.genre = item.tag ? item.tag : "其他";
					}
					tabItem.contentList.push(item);
				});
				this.first = true;
				if (tabItem.id == '3') {
					for (let k = 0; k < tabItem.contentList.length; k++) {
						((k) => {
							this.getCover(tabItem.contentList[k])
						})(k)
					}
				} else if (tabItem.id == '1') {
					for (let k = 0; k < tabItem.contentList.length; k++) {
						((k) => {
							this.getMhCover(tabItem.contentList[k])
						})(k)
					}
				}
			},
			getCover(item) {
				if (this.index == 0) {
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
							item.name1 = item.name;
							item.name = obj.name;
							let text = str.replace(item.name, "");
							let numstr = res.data.list[res.data.list.length - 1].num;
							if (text.indexOf("更新") != -1) {
								if (item.genre.indexOf("综艺") != -1) {
									if (numstr.indexOf("集") != -1 || numstr.indexOf("期") != -1) {
										item.imgText = "更新至" + numstr;
									} else {
										item.imgText = "更新至" + numstr + "期";
									}

								} else {
									item.imgText = "更新至" + numstr;
								}
							} else if (text.indexOf("完结") != -1) {
								if (item.genre.indexOf("综艺") == -1) {
									item.imgText = res.data.list.length + "集全"
								} else {
									item.imgText = "更新至" + numstr;
								}
							} else if (text.indexOf("集") != -1) {
								item.imgText = "更新至" + numstr;
							} else if (text.indexOf("期") != -1) {
								item.imgText = "更新至" + numstr;
							} else {
								item.imgText = item.time + "更新"
							}
							// console.log(res.data)
						}
					}
				})
				this.ysurlRequest = ysurlRequest;
				return ysurlRequest;
			},
			clearYsurlRequestList() {
				if (this.ysurlRequestList.length) {
					this.ysurlRequestList.forEach((item) => {
						item.abort();
					})
					this.ysurlRequestList = [];
				}
			},
			getMhCover(item) {
				if (this.index == 0) {
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
							item.imgText = obj.time ? obj.time + "更新" : ""
							item.genre = obj.tag ? obj.tag : "其他";
							// console.log(res.data)
						}
					}
				})
				this.mhurlRequest = mhurlRequest;
				return mhurlRequest;
			},
			clearMhurlRequestList() {
				if (this.mhurlRequestList.length) {
					this.mhurlRequestList.forEach((item) => {
						item.abort();
					})
					this.mhurlRequestList = [];
				}
			},
			//详情
			navToDetails(item) {
				if (item.blank) {
					return
				}
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
					let url = `/pages/details/detailsXX?data=${JSON.stringify(item)}`;
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
					let url = `/pages/details/mhdetails?data=${JSON.stringify(item)}`;
					if (this.index == 0) {
						url = ""
					}
					uni.navigateTo({
						url: url
					});
				}
				// console.log(item)
				//跳转小说
				if (item._type == '2') {
					let url = `/pages/details/xsdetails?data=${JSON.stringify(item)}`;
					if (this.index == 0) {
						url = ""
					}
					uni.navigateTo({
						url: url
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
				let _this = this
				this.loading = false;
				if (this.scrollTimer) {
					//多次切换只执行最后一次
					clearTimeout(this.scrollTimer);
					this.scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if (typeof e === 'object') {
					index = e.detail.current;
				}
				if (typeof this.tabBar !== 'object') {
					this.tabBar = await this.getElSize('nav-bar');
				}
				//计算宽度相关
				let tabBarScrollLeft = this.tabBar.scrollLeft;
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
				this.scrollTimer = setTimeout(() => {

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
		height: 44px;
		white-space: nowrap;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
		background-color: #fff;
		text-align: center;

		.nav-item {
			display: inline-block;
			width: 75px;
			height: 44px;
			text-align: center;
			line-height: 44px;
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
		flex: 1;
		height: 100%;
		position: relative;
		margin-top: 44px;
		/* #ifdef H5 */
		margin-top: 98px;
		/* #endif */
		/* #ifdef APP-PLUS */
		display: flex;
		/* #endif */
	}

	.swiper-box {
		flex: 1;
		height: 100%;
		position: relative;
		/* #ifdef APP-PLUS */
		display: flex;
		/* #endif */
		/* #ifdef H5 */
		/* #endif */
	}

	.panel-scroll-box {
		flex: 1;
		height: 100%;

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
		width: 33.3%;
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
		width: 100%;
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

	.img-list.blank {
		opacity: 0;
	}

	.img-list {
		flex-shrink: 0;
		flex-direction: row;
		background-color: #fff;
		width: 100%;
		// height: 153px;
		max-height: 240px;
		height: 306upx;

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
				font-size: 16px;
			}

			.img {
				width: 200px;
				height: 200px;
			}

			img {
				position: relative !important;
				height: 200px !important;
			}
		}
	}
</style>
