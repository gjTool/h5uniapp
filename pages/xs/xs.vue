<template>
	<view class="content" >
		<view v-if="index==1">
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
			<view class="text-item text-item-top" v-show="!show"  :class="{ black: black }">
				<text>{{ title }}</text>
			</view>
			<view
				@click="scrollClick"
				class="scroll"
				id="scrollview"
				:class="{ black: black }"
			>
				<view class="scroll-content" :class="{ black: black }">
					<view class="text-item text-grey" v-show="itemshow" :class="{ black: black }"><text>------------- 本章开始 -------------</text></view>
					<view class="img-list m-item" v-for="(item, index) in list" :key="index">
						<view class="text-item" :class="{ black: black }" >
							<text class="text-content" :style="{'font-size':fontSize+'px'}">{{ item }}</text>
						</view>
					</view>
					<view class="text-item  text-grey" v-show="itemshow" :class="{ black: black }"><text>------------- 本章结束 -------------</text></view>
				</view>
			</view>
			<!-- 加载图标 -->
			<mixLoading class="mix-loading" v-if="loading"></mixLoading>
			<!-- #ifdef APP-PLUS -->
			<view class="text-item  text-item-bottom" v-show="!show" :class="{ black: black }">
				<battery class="battery" :proQuantity="level"></battery>
				<view class="time" :class="{android:platform=='android'}">
					<text>{{ time }}</text>
				</view>
			</view>
			<!-- #endif -->
		</view>
		<view class="bottom-tools" :class="{ 'show:': show, hide: !show }" v-if="index==1">
			<view class="bottom-view">
				<button class="bottom-button bottom-button1" type="primary" size="mini" plain="true" @click="prev">上一章</button>
				<slider v-if="xslist.length" class="bottom-slider" :value="num" min="0" :max="xslist.length" disabled block-size="12" />
				<button class="bottom-button bottom-button1" type="primary" size="mini" plain="true" @click="next">下一章</button>
			</view>
			<view class="bottom-view">
				<button class="bottom-button" type="primary" size="mini" plain="true" @click="gotoxslist">目录</button>
				<button class="bottom-button" type="primary" size="mini" plain="true" @click="refontSize">A-</button>
				<button class="bottom-button" type="primary" size="mini" plain="true" @click="fontSize=20;uni.setStorageSync('fontsize', this.fontSize)">普通</button>
				<button class="bottom-button" type="primary" size="mini" plain="true" @click="addfontSize">A+</button>
				<button class="bottom-button" type="primary" size="mini" plain="true" @click="changeBg">{{ black ? '白天' : '黑夜' }}</button>
				<!-- #ifdef APP-PLUS -->
				<button class="bottom-button" type="primary" size="mini" plain="true" @click="download">下载</button>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>

<script>
import config from '@/config';
import mixLoading from '@/components/mix-loading/mix-loading';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import battery from '@/components/battery/battery.vue';
export default {
	components: {
		mixLoading,
		uniIcons,
		uniNavBar,
		battery
	},
	data() {
		return {
			mode: false, // false上下滚动 true左右滑动
			black: false,
			num: 0,
			xsname: '',
			show: false,
			visible: false,
			loading: true,
			title: '',
			url: '',
			url1: '',
			xslist: [],
			list: [],
			scrollTop: 0,
			prevTimer: null,
			nextTimer: null,
			xsurl2Request: null,
			scrollTimer: null,
			scrollTopTotal: 0,
			fontSize:uni.getStorageSync('fontsize')||20,
			style: {
				pageHeight: 0,
				contentViewHeight: 0,
				footViewHeight: 0,
				mitemHeight: 0
			},
			platform:"",
			main:null,
			Intent:null,
			IntentFilter:null,
			UIDevice: null,
			battery: {}, //电池对象
			level: 100, //电量百分比
			time: '00:00', //当前时间
			getBatteryTimer: null, //获取电池电量的定时
			load5limitCache: true, //是否开启预加载后5章
			flag: 0, //1向左滑动,2向右滑动,3向上滑动 4向下滑动
			text: '', //向哪里滑动
			lastX: 0,
			lastY: 0,
			ditance: 120, //滑动的判定距离
			cover: '',
			currentIndex: 0,
			pageList: [],
			windowWidth: 0,
			windowHeight: 0,
			pageIndex: 0,
			currentWebview: null,
			index: 0,
			openid: "",
			obj:{},
			detailData: {}
		};
	},
	computed: {
		itemshow() {
			if (this.list && this.list.length > 0) {
				return true;
			}
			return false;
		}
	},
	created() {
		const res = uni.getSystemInfoSync(); //获取手机可使用窗口高度     api为获取系统信息同步接口
		this.style.pageHeight = res.windowHeight;
		this.style.contentViewHeight = res.windowHeight - (res.screenWidth / 750) * 100 - 70; //像素   因为给出的是像素高度 然后我们用的是upx  所以换算一下
		this.windowWidth = res.windowWidth;
		this.windowHeight = res.windowHeight;
		this.platform = uni.getSystemInfoSync().platform
	},
	onShareAppMessage(res) {
	  return {
		title: "[小说]"+this.xsname+" "+this.title,
		imageUrl:this.detailData.cover,
		path: '/pages/xs/xs?src=' + encodeURIComponent(this.url) + "&data=" + JSON.stringify(this.detailData)
	  }
	},
	onShareTimeline(){
		return {
			title: "[小说]"+this.xsname+" "+this.title,
			imageUrl:this.detailData.cover,
			query: 'src=' + encodeURIComponent(this.url) + "&data=" + JSON.stringify(this.detailData)
		}
	},
	methods: {
		addfontSize(){
			this.fontSize++
			if(this.fontSize>=28){
				this.fontSize=28
			}
			uni.setStorageSync('fontsize', this.fontSize);
		},
		refontSize(){
			this.fontSize--;
			if(this.fontSize<=12){
				this.fontSize=12
			}
			uni.setStorageSync('fontsize', this.fontSize);
		},
		changePage(e) {
			let index = e.detail.current;
			this.pageIndex = index;
			// console.log(index)
		},
		prev() {
			let _this = this;
			if (_this.num <= 0) {
				uni.showToast({
					title: '已经是第一章了',
					icon: 'none'
				});
				return;
			}
			// _this.list = [];
			clearTimeout(this.prevTimer);
			this.prevTimer = setTimeout(() => {
				this.num--;
				if (_this.num <= -1) {
					_this.num = 0;
				}
				this.reloadContent();
			}, 300);
		},
		next() {
			let _this = this;
			if (_this.num >= this.xslist.length - 1) {
				uni.showToast({
					title: '已经是最后一章了',
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
				if (_this.num >= this.xslist.length) {
					_this.num = this.xslist.length - 1;
				}
				this.reloadContent();
			}, 300);
		},
		//加载接口替换当前章节内容
		reloadContent() {
			let _this = this;
			let num = this.num;
			num = isNaN( parseInt(num)) ? 0:parseInt(num);
			if(this.xslist && this.xslist.length){
				this.title = this.xslist[num].num;
				uni.setNavigationBarTitle({
					title: this.title
				});
			}
			this.detailData.title = this.title;
			this.detailData.index = num;
			this.detailData.Time = new Date().getTime();
			this.detailData.saveTime = config.getDate("/");
			config.setXsZJ(num, this.detailData)
			this.$eventHub.$emit('changeXsNum', num);
			try {
				const value = uni.getStorageSync('xsShouCang');
				if (value) {
					let flag = false;
					for (let i = 0; i < value.length; i++) {
						if (value[i].name == _this.xsname) {
							value[i].num = num;
							flag = true;
							break;
						}
					}
					uni.setStorage({
						key: 'xsShouCang',
						data: value
					});
				}
			} catch (e) {
				//TODO handle the exception
			}
			if (this.xslist.length) {
				let data = this.xslist;
				_this.title = data[num].num;
				_this.list = [];
				let value = uni.getStorageSync('xsDownload');
				let flag = false;
				if (value) {
					for (let i = 0; i < value.length; i++) {
						if (value[i].name == _this.xsname) {
							let arr = value[i].data;
							for (let j = 0; j < arr.length; j++) {
								if ((arr[j].num || arr[j].num == 0) && arr[j].num == num && arr[j].list.length) {
									_this.list = arr[j].list;
									setTimeout(() => {
										uni.pageScrollTo({
											scrollTop: 0,
											duration: 0
										});
									}, 0);
									flag = true;
									break;
								}
							}
							break;
						}
					}
				}
				//本章已加载  继续缓存后5章
				if (flag) {
					_this.loading = false;
					setTimeout(() => {
						this.getScrollTopTotal();
						this.load5limit();
					}, 300);
					return;
				}

				_this.loading = true;
				_this.setCacheValue(num, [], 'loading');
				_this.xsurl2Request = uni.request({
					url: uni.getStorageSync('baseUrl'),
					data: {
						xsurl2: data[num].url
					},
					method: 'GET',
					complete: res => {
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							_this.list = res.data.content;
							_this.setCacheValue(num, _this.list, 'done');
							setTimeout(() => {
								this.getScrollTopTotal();
								this.load5limit();
							}, 300);
						} else {
							setTimeout(() => {
								this.getScrollTopTotal();
							}, 300);
							_this.setCacheValue(num, [], 'fail');
							uni.showToast({
								title: '获取第' + num + '章内容失败',
								icon: 'none'
							});
						}
						_this.loading = false;
					}
				});
			}
		},
		//缓存后5章
		load5limit() {
			if (!this.load5limitCache) {
				return;
			}
			let _this = this;
			let num = this.num;
			num = isNaN( parseInt(num)) ? 0:parseInt(num);
			let xslist = this.xslist;
			this.loadCache(num + 1);
			this.loadCache(num + 2);
			this.loadCache(num + 3);
			this.loadCache(num + 4);
			this.loadCache(num + 5);
		},
		//加载缓存
		loadCache(num) {
			let xslist = this.xslist;
			if (num >= xslist.length) {
				return;
			}
			let _this = this;
			let value = uni.getStorageSync('xsDownload');
			let data = _this.xslist;
			num = isNaN( parseInt(num)) ? 0:parseInt(num);
			let flag = false;
			if (value) {
				for (let i = 0; i < value.length; i++) {
					if (value[i].name == _this.xsname) {
						let arr = value[i].data;
						for (let j = 0; j < arr.length; j++) {
							if (arr[j].num && arr[j].num == num && (arr[j].list.length || arr[j].state == 'loading')) {
								flag = true;
								break;
							}
						}
						break;
					}
				}
			}
			//第num章没有缓存，请求接口
			if (!flag) {
				_this.setCacheValue(num, [], 'loading');
				_this.getData(num);
			}
		},
		//缓存请求接口
		getData(num) {
			let _this = this;
			let data = this.xslist;
			num = isNaN( parseInt(num)) ? 0:parseInt(num);
			let url = data[num].url;
			uni.request({
				url: uni.getStorageSync('baseUrl'),
				data: {
					xsurl2: url
				},
				method: 'GET',
				complete: res => {
					_this.loading = false;
					if (res.statusCode == 200 && res.data && res.data.code == 0) {
						let list = res.data.content;
						// console.log('加载成功：第' + num + '章');
						_this.setCacheValue(num, list, 'done');
					} else {
						// console.log('加载失败：第' + num + '章');
						_this.setCacheValue(num, [], 'fail');
					}
				}
			});
		},
		//设置缓存
		setCacheValue(num, list, state) {
			let _this = this;
			let data = this.xslist;
			num = isNaN( parseInt(num)) ? 0:parseInt(num);
			// console.log(_this.cover);
			let obj = {
				name: _this.xsname, //小说名称
				cover: _this.cover, //当前小说预览图
				url: this.url1, //小说url
				num: this.num, //当前章节索引
				cache: false, //是否缓存-显示在下载管理
				download: '0', //缓存状态  0未缓存 1下载完毕 2正在下载 3下载暂停
				xslist: data, //小说章节目录
				data: []
			};
			let obj2 = {
				numName: data[num].num, //缓存下载的章节名称
				numUrl: data[num].url, //缓存下载的章节url
				num: num, //缓存下载的章节索引
				list: list, //缓存下载的章节内容
				state: state //缓存状态 loading fail done
			};
			obj.data.push(obj2);
			let value = uni.getStorageSync('xsDownload');
			let isSave = false;
			if (value) {
				for (let i = 0; i < value.length; i++) {
					if (value[i].name == _this.xsname) {
						let arr = value[i].data;
						value[i].cover = _this.cover; //当前小说预览图
						value[i].url = _this.url1; //小说url
						value[i].num = _this.num; //当前章节索引
						let flag = false;
						for (let j = 0; j < arr.length; j++) {
							if (arr[j].numName == data[num].num && arr[j].num == num) {
								arr[j].list = list;
								arr[j].numUrl = data[num].url;
								arr[j].state = state;
								flag = true;
							}
						}
						if (!flag) {
							value[i].xslist = data;
							value[i].data.push(obj2);
						}
						isSave = true;
						break;
					}
				}
				if (!isSave) {
					value.push(obj);
				}
			} else {
				value = [];
				value.push(obj);
			}

			uni.setStorageSync('xsDownload', value);
		},
		download() {
			uni.showToast({
				title: '点击了下载'
			});
			return;
			let value = uni.getStorageSync('xsDownload');
			if (value) {
				for (let i = 0; i < value.length; i++) {
					if (value[i].name == this.xsname) {
						if (value[i].cache) {
							uni.showToast({
								title: '已经加入下载了',
								icon: 'none'
							});
						} else {
							value[i].cache = true;
							value[i].download = '2';
							uni.showToast({
								title: '加入下载成功'
							});
						}
						this.$eventHub.$emit('xsDownload', value[i]);
						break;
					}
				}
				uni.setStorageSync('xsDownload', value);
			}
		},
		changeBg() {
			this.black = !this.black;
			uni.setStorage({
				key: 'black',
				data: this.black
			});
		},
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		shuaxin() {
			this.loading = true;
			this.getData(this.num);
		},
		gotoxslist() {
			let data = {
				xsname: this.title,
				num: this.num,
				from: "xs",
				url: this.url1,
				cover: this.cover
			}
			uni.navigateTo({
				url: `/pages/xslist/xslist?data=${JSON.stringify(data)}&obj=${JSON.stringify(this.detailData)}`
			});
		},
		scrollClick() {
			this.show = !this.show;
			// #ifdef APP-PLUS
			if (this.show) {
				plus.navigator.setFullscreen(false);
			} else {
				plus.navigator.setFullscreen(true);
			}
			this.getBattery();
			// #endif
		},
		getScrollTopTotal() {
			let that = this;
			let query = uni.createSelectorQuery();
			query.selectAll('.m-item').boundingClientRect();
			query.exec(res => {
				that.style.mitemHeight = 0;
				res[0].forEach((rect, index) => {
					that.style.mitemHeight = that.style.mitemHeight + rect.height;
				});
				setTimeout(() => {
					that.scrollTopTotal = that.style.mitemHeight - that.style.contentViewHeight;
				}, 0);
				that.pageList = [];
				that.pageIndex = 0;
				that.currentIndex = 0;
				//得出一共有几页
				let count = Math.ceil(this.style.mitemHeight / this.style.contentViewHeight);
				setTimeout(() => {
					var arr = [],
						height = 0,
						obj2 = {};
					res[0].forEach((rect, index) => {
						height = height + rect.height;
						for (let i = 1; i <= count; i++) {
							if (height >= i * this.style.contentViewHeight - 20) {
								if (!obj2[i - 1]) {
									obj2[i - 1] = index;
								}
							}
						}
					});
					for (let j = 0; j < count; j++) {
						var obj = {};
						obj.id = j;
						if (j == 0) {
							obj.contentList = that.list.slice(0, obj2[j]);
						} else if (j == count - 1) {
							obj.contentList = that.list.slice(obj2[j - 1], that.list.lenght);
						} else {
							obj.contentList = that.list.slice(obj2[j - 1], obj2[j]);
						}
						arr.push(obj);
					}
					that.currentIndex = 0;
					that.pageList = arr;
				}, 0);
			});
		},
		getTIme() {
			let date = new Date();
			let hour = date.getHours();
			let minute = date.getMinutes();
			hour = hour <= 9 ? '0' + hour : hour;
			minute = minute <= 9 ? '0' + minute : minute;
			this.time = hour + ':' + minute;
		},
		getBattery() {
			let _this = this;
			_this.getTIme();
			// #ifdef APP-PLUS
			if(this.platform == "ios"){
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
			}else{
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
		getCacheState(xslist) {
			let _this = this;
			let value = uni.getStorageSync('xsDownload');
			if (value) {
				for (let i = 0; i < value.length; i++) {
					if (value[i].name == _this.xsname) {
						let arr = value[i].data;
						value[i].cover = _this.cover; //当前小说预览图
						value[i].url = _this.url1; //小说url
						value[i].num = _this.num; //当前章节索引
						value[i].xslist = xslist;
						arr.forEach(item => {
							xslist.forEach(obj => {
								if (item.numName == obj.num && item.state == 'done') {
									obj.state = 'done';
								}
							});
						});
						break;
					}
				}
				uni.setStorageSync('xsDownload', value);
			}
		}
	},
	//监听页面滚动
	onPageScroll: function(obj) {
		this.scrollTop = obj.scrollTop; //实时获取到滚动的值
		// console.log("onPageScroll-------",obj.scrollTop)
		// console.log(this.scrollTopTotal - this.scrollTop)
	},
	onReady() {
		let _this = this;
		let option = uni.getStorageSync('config');
		this.index = option.index
		// #ifndef MP
		this.index = 1
		// #endif
		this.openid = uni.getStorageSync("userInfo").openid;
		uni.getStorage({
			key: 'black',
			success(res) {
				_this.black = res.data;
			}
		});
		this.getTIme();
		// #ifdef APP-PLUS
		this.currentWebview = this.$mp.page.$getAppWebview();
		this.currentWebview.setStyle({
			popGesture: 'none'
		});
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
				_this.UIDevice = plus.ios.import('UIDevice');
				_this.getBattery();
				// #endif
				break;
			default:
				_this.battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

				function updateBatteryStatus(info) {
					_this.level = _this.battery.level * 100;
					_this.getTIme();
				}
				if (_this.battery) {
					_this.battery.addEventListener('levelchange', updateBatteryStatus);
				} else {
					navigator.getBattery().then(function(battery) {
						_this.battery = battery;
						_this.battery.addEventListener('levelchange', updateBatteryStatus);
					});
				}
				break;
		}
		// #endif
	},
	onUnload() {
		// #ifdef APP-PLUS
		plus.navigator.setFullscreen(false);
		// #endif
	},
	onLoad(options) {
		let _this = this;
		// #ifdef APP-PLUS
		plus.navigator.setFullscreen(true);
		// #endif
		this.openid = uni.getStorageSync("userInfo").openid;
		this.detailData = JSON.parse(options.data);
		
		this.title = this.detailData.title;
		this.url = decodeURIComponent(options.src);
		this.xsname = this.detailData.name;
		this.cover = this.detailData.cover;
		this.num = this.detailData.index ? this.detailData.index :0;
		this.url1 = this.detailData.url;
		_this.xslist = uni.getStorageSync('xslist' + this.url1);
		uni.setNavigationBarTitle({
			title: this.title
		});
		setTimeout(() => {
			uni.request({
				url: uni.getStorageSync('baseUrl'),
				data: {
					xsurl1: _this.url1
				},
				method: 'GET',
				complete: res => {
					if (res.statusCode == 200 && res.data && res.data.code == 0) {
						let data = res.data.list;
						_this.xslist = data;
						_this.getCacheState(data);
						try {
							uni.setStorageSync('xslist' + _this.url1, _this.xslist);
						} catch (e) {}
						// _this.reloadContent();
					} else {
						uni.showToast({
							title: '获取章节目录失败',
							icon: 'none'
						});
					}
				}
			});
		}, 100);
		_this.reloadContent();
		//监听事件
		this.$eventHub.$on('changeXsContent', (data, index) => {
			_this.title = data.num;
			uni.setNavigationBarTitle({
				title: _this.title
			});
			_this.num = index;
			_this.url = data.url;
			_this.reloadContent();
		});
	}
};
</script>

<style lang="scss">
.img-list {
	width: 750upx;
}

image {
	width: 750upx;
}

uni-image {
	width: 750upx;
}

page {
	height: 100%;
	background-color: #ebd8b0;
}

.content {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.scroll {
	flex: 1;
	height: 100%;
	position: relative;
	z-index: 0;
	// position: fixed;
	// top:0;
	// left: 0;
}

.scroll-content {
	display: flex;
	flex-direction: column;
	padding: 20px 0;
}

.text-item {
	padding: 0 6px;
	text-indent: 16px;
	font-size: 18px;
}
.text-content {
	font-size: 20px;
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
	background-color: #ebd8b0;
}

.scroll.black,
.uni-scroll-view.black,
.scroll-content.black {
	background-color: #070707;
}

.bottom-tools {
	width: 100%;
	position: fixed;
	z-index: 1;
	bottom: 0;
	left: 0;
	background-color: #ec706b;
	transition: all 0.1s;
	.bottom-view {
		width: 100%;
		padding: 7px 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.bottom-button {
			color: #ffffff !important;
			border: 1px solid #ffffff !important;
		}
		.bottom-button.bottom-button1 {
			color: #ffffff !important;
			border: none !important;
			padding: 0 !important;
			margin: 0 !important;
		}
		.bottom-slider {
			min-width: 230px;
			width: calc(100% - 150px);
			margin: 0;
		}
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
	background-color: #ebd8b0;
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
	background-color: #ebd8b0;
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
	.time.android{
		top: 4px;
	}
	.pagenum {
		font-size: 12px;
		color: #555555;
		position: absolute;
		text-align: right;
		top: 0;
		right: 10px;
	}
}

.text-item-top.black,
.text-item-bottom.black {
	background-color: #070707;
}
.swiper-box {
	flex: 1;
	height: 100%;
	position: relative;
	z-index: 0;
}
</style>
