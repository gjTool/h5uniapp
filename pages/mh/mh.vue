<template>
	<view class="content" @click="scrollClick">
		<uni-nav-bar
			v-if="index==1"
			:status-bar="true"
			:show="show"
			left-icon="arrowleft"
			@click-left="back"
			:title="title"
			:background-color="'#ec706b'"
			class="uni-nav-bar"
		/>
		<view class="text-item text-item-top" v-show="!show" :class="{ black: black }">
		 	<text>{{title}}</text>
		 </view>
		<view v-if="index==1"  class="scroll"
		 id="scrollview" :class="{ black: black }">
			<view class="scroll-content">
				<view class="img-list" v-for="(item,index) in list" :key="index">
					<image class="img" mode="widthFix" :src="item.img" @error="imgError(item)" @load="imgLoad" lazy-load="true"
					 show-menu-by-longpress></image>
				</view>
				<!-- 加载图标 -->
				<mixLoading class="mix-loading" v-if="loading"></mixLoading>
			</view>
		</view>
		<view class="bottom-tools" :class="{ 'show:': show, hide: !show }" v-if="index==1">
			<button class="bottom-button" type="primary" size="mini" plain="true" @click="gotomhlist">目录</button>
			<button class="bottom-button" type="primary" size="mini" plain="true" @click="prev">上一话</button>
			<button class="bottom-button" type="primary" size="mini" plain="true" @click="next">下一话</button>
			<!-- #ifdef APP-PLUS -->
			<button class="bottom-button" type="primary" size="mini" plain="true" @click="download">下载</button>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import config from '@/config';
	import mixLoading from '@/components/mix-loading/mix-loading';
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import battery from '@/components/battery/battery.vue'
	export default {
		components: {
			mixLoading,
			uniIcons,
			uniNavBar,
			battery
		},
		data() {
			return {
				black: false,
				num: 0,
				mhname: '',
				show: false,
				visible: false,
				loading: true,
				title: '',
				url: '',
				url1: '',
				mhlist: [],
				list: [],
				scrollTop: 0,
				prevTimer: null,
				nextTimer: null,
				xsurl2Request: null,
				scrollTimer: null,
				scrollTopTotal: 0,
				index: 0,
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 0,
					mitemHeight: 0
				},
				platform: "",
				main: null,
				Intent: null,
				IntentFilter: null,
				UIDevice: null,
				battery: {}, //电池对象
				level: 100, //电量百分比 
				time: "00:00", //当前时间
				getBatteryTimer: null, //获取电池电量的定时
				load5limitCache: true, //是否开启预加载后5章
				flag: 0, //1向左滑动,2向右滑动,3向上滑动 4向下滑动
				text: '', //向哪里滑动
				lastX: 0,
				lastY: 0,
				ditance: 120, //滑动的判定距离
				cover: "",
				x: 0,
				y: 0,
				currentWebview: null,
				titleNView: null,
				openid: "",
				obj:{},
				detailData: {}
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				this.gotomhlist();
			}
			if (e.index == 1) {}
		},
		created() {
			const res = uni.getSystemInfoSync(); //获取手机可使用窗口高度     api为获取系统信息同步接口
			this.windowWidth = res.windowWidth;
			this.windowHeight = res.windowHeight;
			this.platform = uni.getSystemInfoSync().platform
		},
		methods: {
			imgLoad() {
				this.loading = false
			},
			imgError(item) {
				item.img = '/static/404.jpg';
				uni.showToast({
					title: "加载图片出现错误",
					icon: 'none'
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			prev() {
				let _this = this;
				if (_this.num <= 0) {
					uni.showToast({
						title: '已经是第一话了',
						icon: 'none'
					});
					return;
				}
				clearTimeout(this.prevTimer);
				if (this.xsurl2Request) {
					this.xsurl2Request.abort();
				}
				this.prevTimer = setTimeout(() => {
					this.num--;
					if (_this.num <= -1) {
						_this.num = 0;
					}
					this.url = this.mhlist[this.num].url
					this.reloadContent()
				}, 0);

			},
			next() {
				let _this = this;
				if (_this.num >= this.mhlist.length - 1) {
					uni.showToast({
						title: '已经是最后一话了',
						icon: 'none'
					});
					return;
				}
				// _this.list = [];
				clearTimeout(this.nextTimer);
				if (this.xsurl2Request) {
					this.xsurl2Request.abort();
				}
				this.nextTimer = setTimeout(() => {
					_this.num++;
					if (_this.num >= this.mhlist.length) {
						_this.num = this.mhlist.length - 1;
					}
					this.url = this.mhlist[this.num].url
					this.reloadContent()
				}, 0);
			},
			download() {
				uni.showToast({
					title: '点击了下载',
					icon: 'none'
				});
			},
			gotomhlist() {
				let data = {
					mhname: this.title,
					num: this.num,
					from: "mh",
					url: this.url1,
					cover: this.cover
				}
				uni.navigateTo({
					url: `/pages/mhlist/mhlist?data=${JSON.stringify(data)}&obj=${JSON.stringify(this.detailData)}`
				});
			},
			scrollClick() {
				this.show = !this.show;
				// #ifdef APP-PLUS
				if (this.show) {
					plus.navigator.setFullscreen(false);
					this.titleNView.show('auto', 0);
				} else {
					plus.navigator.setFullscreen(true);
					this.titleNView.hide('auto', 0);
				}
				this.getBattery()
				// #endif
				// #ifdef MP
				if (this.show) {
					// plus.navigator.setFullscreen(false);
					// this.titleNView.show('auto', 0);
				} else {
					// plus.navigator.setFullscreen(true);
					// this.titleNView.hide('auto', 0);
				}
				// #endif
			},
			getScrollTopTotal() {
				let that = this;
				let query = uni.createSelectorQuery();
				query.selectAll('.m-item').boundingClientRect();
				query.select('#scrollview').boundingClientRect();
				query.exec(res => {
					that.style.mitemHeight = 0;
					res[0].forEach(rect => (that.style.mitemHeight = that.style.mitemHeight + rect.height));
					setTimeout(() => {
						that.scrollTopTotal = that.style.mitemHeight - that.style.contentViewHeight;
					}, 100);
				});
			},
			getTIme() {
				let date = new Date();
				let hour = date.getHours();
				let minute = date.getMinutes();
				hour = hour <= 9 ? '0' + hour : hour;
				minute = minute <= 9 ? '0' + minute : minute;
				this.time = hour + ':' + minute
			},
			getBattery() {
				let _this = this;
				_this.getTIme();
				// #ifdef APP-PLUS
				if (this.platform == "ios") {
					let dev = _this.UIDevice.currentDevice();
					if (!dev.isBatteryMonitoringEnabled()) {
						dev.setBatteryMonitoringEnabled(true);
					}
					let level = dev.batteryLevel();
					if (level <= 1 && level >= 0) {
						_this.level = Math.round(level * 100);
					} else {
						_this.level = Math.round(level);
					}
				} else {
					let recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {
						onReceive: function(context, intent) {
							let action = intent.getAction();
							if (action == _this.Intent.ACTION_BATTERY_CHANGED) {
								let level = intent.getIntExtra('level', 0); //电量
								if (level <= 1 && level >= 0) {
									_this.level = Math.round(level) * 100;
								} else {
									_this.level = Math.round(level);
								}
								_this.getTIme();
							}
						}
					});
					let filter = new _this.IntentFilter(_this.Intent.ACTION_BATTERY_CHANGED);
					_this.main.registerReceiver(recevier, filter);
				}
				// #endif
			},
			reloadContent() {
				let _this = this;
				let num = this.num
				num = parseInt(num)
				this.title = this.mhlist[num].num;
				uni.setNavigationBarTitle({
					title: this.title
				});
				this.detailData.title = this.title;
				this.detailData.num = num;
				this.detailData.Time = new Date().getTime();
				this.detailData.saveTime = config.getDate("/");
				config.setMhZJ(num, this.detailData)

				this.$eventHub.$emit('changeMhNum', num);
				try {
					const value = uni.getStorageSync('mhShouCang');
					if (value) {
						let flag = false;
						for (let i = 0; i < value.length; i++) {
							if (value[i].name == _this.mhname) {
								value[i].num = num;
								flag = true;
								break;
							}
						}
						uni.setStorage({
							key: 'mhShouCang',
							data: value
						});
					}
				} catch (e) {
					//TODO handle the exception
				}
				this.loading = true
				this.xsurl2Request = uni.request({
					url: uni.getStorageSync('baseUrl'),
					data: {
						mhurl2: this.url
					},
					method: "GET",
					complete: (res) => {
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							this.list = res.data.list;
							if (!this.list.length) {
								uni.showToast({
									title: "获取漫画数据失败",
									icon: "none"
								})
							}
							setTimeout(() => {
								uni.pageScrollTo({
									scrollTop: 0,
									duration: 0
								})
							}, 0)

						} else {
							uni.showToast({
								title: "获取漫画数据失败",
								icon: "none"
							})
						}
					}
				});
			}
		},
		//监听页面滚动
		onPageScroll: function(obj) {
			this.scrollTop = obj.scrollTop; //实时获取到滚动的值
		},
		onReady() {
			let _this = this;
			this.getTIme()
			let option = uni.getStorageSync('config');
			this.index = option.index;
			// #ifndef MP
			this.index = 1
			// #endif
			// #ifdef APP-PLUS
			// plus.navigator.setFullscreen(true);
			this.currentWebview = this.$mp.page.$getAppWebview();
			this.titleNView = this.currentWebview.getTitleNView();
			// this.titleNView.hide('auto', 0);
			// #endif
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					// #ifdef APP-PLUS
					//注意，安卓需要配置下manifest.json文件，打开后，进入模块权限配置，
					//在右侧的Android权限设置里勾选上android.permission.BATTERY_STATS 
					_this.main = plus.android.runtimeMainActivity();
					_this.Intent = plus.android.importClass('android.content.Intent');
					_this.IntentFilter = plus.android.importClass('android.content.IntentFilter');
					_this.getBattery();
					// #endif
					break;
				case 'ios':
					// #ifdef APP-PLUS
					_this.UIDevice = plus.ios.import("UIDevice");
					_this.getBattery()
					// #endif
					break;
				default:
					// #ifdef H5
					_this.battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

					function updateBatteryStatus(info) {
						_this.level = _this.battery.level * 100;
						_this.getTIme()
					}
					if (_this.battery) {
						_this.battery.addEventListener("levelchange", updateBatteryStatus);
					} else {
						navigator.getBattery().then(function(battery) {
							_this.battery = battery;
							_this.battery.addEventListener('levelchange', updateBatteryStatus)
						})
					}
					// #endif
					break;
			}
		},
		onUnload() {
			// #ifdef APP-PLUS
			// plus.navigator.setFullscreen(false);
			// #endif
		},
		onShow(){
			let _this = this;
			setTimeout(()=>{
				_this.mhlist = uni.getStorageSync('mhlist' + this.url1);
				this.title =_this.mhlist[this.num].num;
				uni.setNavigationBarTitle({
					title: this.title
				});
			},300)
		},
		onShareAppMessage(res) {
		  return {
			title: "[漫画]"+this.mhname+" "+this.title,
			imageUrl:this.detailData.cover,
			path: '/pages/mh/mh?src=' + encodeURIComponent(this.url) + "&data=" + JSON.stringify(this.detailData)
		  }
		},
		onShareTimeline(){
			return {
				title: "[漫画]"+this.mhname+" "+this.title,
				imageUrl:this.detailData.cover,
				query: 'src=' + encodeURIComponent(this.url) + "&data=" + JSON.stringify(this.detailData)
			}
		},
		onLoad(options) {
			let _this = this;
			this.openid = uni.getStorageSync("userInfo").openid;
			this.detailData = JSON.parse(options.data);

			this.title = this.detailData.title;
			this.url = decodeURIComponent(options.src);
			this.mhname = this.detailData.name;
			this.cover = this.detailData.cover;
			this.num = this.detailData.num ? this.detailData.num :0;
			this.url1 = this.detailData.url;
			_this.mhlist = uni.getStorageSync('mhlist' + this.url1);
			uni.setNavigationBarTitle({
				title: this.title
			});
			setTimeout(() => {
				uni.request({
					url: uni.getStorageSync('baseUrl'),
					data: {
						mhurl1: _this.url1
					},
					method: 'GET',
					complete: res => {
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							let data = res.data.list;
							_this.obj = res.data.data
							_this.mhlist = data;
							// _this.getCacheState(data)
							try {
								uni.setStorageSync('mhlist' + _this.url1, _this.mhlist);
							} catch (e) {}
							// _this.reloadContent()
						} else {
							uni.showToast({
								title: "获取章节目录失败",
								icon: "none"
							})
						}
					}
				});
			}, 100)
			this.reloadContent();
			//监听事件
			this.$eventHub.$on('changeMhContent', (data, index) => {
				this.title = data.num;
				uni.setNavigationBarTitle({
					title: this.title
				});
				this.num = index;
				this.url = data.url;
				this.reloadContent();
			});
		},
	}
</script>

<style lang="scss">
	.img-list {
		width: 750upx;
	}
	.img {
		width: 750upx;
		will-change: transform;
		display: block;
	}
	.content {
		display: flex;
		flex-direction: column;
		background: #fff;
	}
	.scroll {
		flex: 1;
		justify-content: center;
		align-items: center;
		position: absolute;
		top:0;
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
		background-color: #007AFF;
	}
	.text-item {
		padding: 0 6px;
		text-indent: 16px;
		font-size: 18px;
	}
	.text-item.text-grey {
		color: #444;
		font-size: 14px;
		text-indent: 0px;
		text-align: center;
	}
	.text-item.black {
		color: #555;
	}
	.scroll,
	.uni-scroll-view,
	.scroll-content {
		background-color: transparent;
	}
	.scroll.black,
	.uni-scroll-view.black,
	.scroll-content.black {
		background-color: #070707;
	}
	.bottom-tools {
		width: 100%;
		// height: 44px;
		padding: 7px 0;
		position: fixed;
		z-index: 1;
		bottom: 0;
		left: 0;
		background-color: #ec706b;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: all 0.1s;
		.bottom-button {
			color: #ffffff !important;
			border: 1px solid #ffffff !important;
		}
	}
	.bottom-tools.hide {
		transform: translateY(100%);
	}
	.bottom-tools.sow {
		transform: translateY(0);
	}
	.text-item-top {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 20px;
		background-color: transparent;
		z-index: 1;
		font-size: 12px;
		color: #555555;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-indent: 0px;
		text-align: center;
	}
	.text-item-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 20px;
		background-color: transparent;
		z-index: 1;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.battery {
			font-size: 10px;
			margin-right: 30px;
		}
		.time {
			font-size: 12px;
			color: #555555;
			position: absolute;
			text-align: center;
			width: 100%;
			top: 0;
			left: 0;
		}
		.time.android {
			top: 4px;
		}
	}
	.text-item-top.black,
	.text-item-bottom.black {
		background-color: #070707;
	}

</style>
