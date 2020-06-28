<template>
	<view>
		<view class="video-box" :style="{ height: boxHeight }" v-if="index==1"></view>
		<view :style="{ top: scrollTop, height: scrollHeight }" class="scroll" scroll-y v-if="index==1">
			<view class="scroll-content">
				<view class="image-box"><image class="uni-image" :src="obj.cover" @error="imgError(obj)"></image></view>
				<view class="text-right">
					<view class="text-over">
						<view class="text">年份：{{ obj.Release ? obj.Release : '' }}</view>
					</view>
					<view class="text-over">
						<view class="text">类型：{{ obj.genre ? obj.genre : '' }}</view>
					</view>
					<view class="text-over">
						<view class="text">导演：{{ obj.director ? obj.director : '' }}</view>
					</view>
					<view class="text-over">
						<view class="text">语言：{{ obj.Language ? obj.Language : '' }}</view>
					</view>
					<view class="text-over">
						<view class="text">地区：{{ obj.region ? obj.region : '' }}</view>
					</view>
					<view class="text-over performer">
						<view class="text">主演：{{ obj.performer ? obj.performer : '' }}</view>
					</view>
				</view>
				<view class="text-bottom" :class="{ ipad: ipad }">
					<button class="play-button" type="primary" size="mini" @click="play(list[num], num)">播放</button>
				</view>
				<view class="text-box" :class="{ ipad: ipad }">
					<view class="text">简介：{{ obj.introduce ? obj.introduce : '' }}</view>
				</view>
				<view class="list-box">
					<view class="text-over text-over1"><text class="text">选集：</text></view>
					<button v-for="(item, index) in list" :key="index" @click="play2(item, index)" type="primary" size="mini" :plain="index == num ? false : true">
						{{ item.num }}
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import config from '@/config';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import battery from '@/components/battery/battery.vue';
export default {
	components: {
		uniIcons,
		uniNavBar,
		battery
	},
	data() {
		return {
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
			checked: false,
			index:0,
			webviewStyles: {
				top: '64px',
				height: '350upx',
				background: '#000000',
				progress: {
					color: 'green'
				}
			},
			title: '影视详情',
			buttons: null, //返回按钮图片
			show: true,
			// src:'',
			webview: null,
			webviewShow: true,
			fanhui: null, //返回按钮
			full: null, //满屏幕点击处理
			statusBarHeight: 0,
			screenWidth: 0,
			screenHeight: 0,
			time: '00:00',
			titleShow: false,
			boxHeight: '350px',
			scrollHeight: '394upx',
			scrollTop: '394upx',
			pageTitle: null, //原生标题栏
			timer: null,
			titleButtonShowFlag: false,
			pageIndex: 1,
			h450: 0,
			ipad: false,
			isFullScreen: false,
			fullScreenButton: null,
			isControllShow: false,
			suo1: null,
			suo2: null,
			jiesuo: true,
			full2: null,
			suo1show: false, //锁定false
			suo2show: false,
			playTimer: null,
			videoTitleNvue: null,
			currentWebview: null,
			buttom: null,
			nextTimer: null,
			first: true,
			suo2timer: null,
			platform: '',
			request:null,
			hasNotchInScreen:false, //刘海屏
			main:"",
			windowMe:"",
			decorView:"",
			View:"", 
			params:"",
			noList:false
		};
	},
	onBackPress(event){
		if (this.isFullScreen) {
			this.portraitScreen();
			return true
		} 
	},
	computed: {
		src() {
			let num = this.num;
			num = parseFloat(num);
			if (this.list.length == 0) {
				return '';
			}
			let item = this.list[num],url;
			if(item){
				 url = item.m3u8url;
				if(this.first){
					uni.$emit('videoLoad',url);
				}else{
					uni.$emit('videoPlayNext', url);
					uni.$emit('videoNum', num);
				}
			}
			return url;
		},
		itemName() {
			let num = this.num;
			num = parseFloat(num);
			if (this.list.length == 0) {
				return '';
			}
			let item = this.list[num];
			uni.$emit('videoTitileChange', this.title + '   ' + item.num);
			return item.num;
		}
	},
	created() {
		this.platform = uni.getSystemInfoSync().platform;
		// #ifdef APP-NVUE
		this.hasNotchInScreen = plus.navigator.hasNotchInScreen()
		if(this.platform=="android"){
			this.main = plus.android.runtimeMainActivity();
			this.windowMe = main.getWindow();  
			plus.android.importClass(this.windowMe);  
			this.decorView = this.windowMe.getDecorView();  
			plus.android.importClass(this.decorView);  
			this.View = plus.android.importClass("android.view.View"); 
			this.params = this.windowMe.getAttributes();
		}
		// #endif
	},
	onShow: function() {
		uni.$emit('webviewResume');
	},
	onHide: function() {
		uni.$emit('webviewPause');
	},
	onLoad(option) {
		let _t = this;
		let resObj = uni.getSystemInfoSync();
		this.statusBarHeight = resObj.statusBarHeight;
		this.screenWidth = resObj.screenWidth;
		this.screenHeight = resObj.screenHeight;
		this.h450 = uni.upx2px(450);
		if (this.screenWidth >= 768) {
			this.ipad = true;
			if (this.h450 != 460) {
				this.h450 = 460;
			}
		} else {
			if (this.h450 != 225) {
				this.h450 = 225;
			}
		}
		this.detailData = JSON.parse(option.data);
		let str = this.detailData.name;
		this.title = str.split(' ')[0];
		uni.setNavigationBarTitle({
			title: this.title
		});

		// #ifdef APP-PLUS
		this.video = uni.getSubNVueById('video');
		// 打开 nvue 子窗体
		this.videoshow = false;
		this.video.setStyle({
			top: 44 + uni.getSystemInfoSync().statusBarHeight + 'px',
			left: '0px',
			width: '100%',
			height: this.h450 + 'px'
		});
		this.video.show('auto', 0, ()=> {
			// 打开后进行一些操作...
			_t.first=false;
		});

		this.videoTitleNvue = uni.getSubNVueById('title');
		this.videoTitleNvue.setStyle({
			top: 44 + uni.getSystemInfoSync().statusBarHeight + 'px',
			left: '0px',
			width: '100%',
			height: '60px'
		});
		this.videoTitleNvue.show('auto', 0, function() {
			// 打开后进行一些操作...
			//
		});
		setTimeout(()=>{
			uni.$emit("videoTitileChange",this.title+"   "+this.itemName)
		},3000)
		this.buttom = uni.getSubNVueById('buttom');
		this.buttom.setStyle({
			bottom: this.screenHeight - this.h450 - (44 + uni.getSystemInfoSync().statusBarHeight) + 'px'
		});
		this.buttom.hide('auto', 0, function() {
			// 打开后进行一些操作...
			//
		});
		// #endif

		this.boxHeight = this.h450 + 'px';
		this.scrollHeight = 'calc(100% - ' + (44 + uni.getSystemInfoSync().statusBarHeight + this.h450) + 'px)';
		this.scrollTop = 44 + uni.getSystemInfoSync().statusBarHeight + this.h450 + 'px';

		this.scrollHeight = 'calc(100% - ' + this.h450 + 'px)';
		this.scrollTop = this.h450 + 'px';
		this.titleShow = false;
		this.full = new plus.nativeObj.View('full', { top: '36px', left: '0', height: '100%', width: '100%',
		 backgroundColor: 'rgba(255,255,255,0)' });

		this.full.setStyle({
			top: this.statusBarHeight + 44 + 'px',
			height: this.h450 - 50 + 'px'
		});
		this.full.show();
		this.full.addEventListener(
			'click',
			() => {
				if (!this.jiesuo) {
					this.suo1.show('auto', 0, function() {});
					this.suo1show = true;
					clearTimeout(this.suo2timer);
					this.suo2timer = setTimeout(() => {
						this.suo1.hide('auto', 0);
						this.suo1show = false;
					}, 3000);
					return;
				}
				if (this.isFullScreen) {
					if (this.titleShow) {
						uni.$emit('videoTitileHide');
						uni.$emit('videoButtomHide');
						uni.$emit('controllHide');
						this.titleShow = false;
						this.isControllShow = false;
						this.suo2.hide('auto', 0);
						this.suo2show = false;
						this.fullScreenButton.hide('auto', 0);
					} else {
						uni.$emit('videoTitileShow');
						uni.$emit('videoButtomShow');
						uni.$emit('controllShow');
						this.titleShow = true;
						this.isControllShow = true;
						this.suo2.show();
						this.suo2show = true;
						this.fullScreenButton.show('auto', 0, function() {});
					}
				} else {
					if (!this.isControllShow) {
						this.isControllShow = true;
						uni.$emit('controllShow');
						uni.$emit('videoButtomShow');
						this.fullScreenButton.show('auto', 0, function() {});
					} else {
						this.isControllShow = false;
						uni.$emit('controllHide');
						uni.$emit('videoButtomHide');
						this.fullScreenButton.hide('auto', 0);
					}
				}
			},
			true
		);
		this.full.addEventListener(
			'doubleclick',
			() => {
				if (!this.jiesuo) {
					return;
				}
				uni.$emit('videoToggle');
			},
			true
		);
		// player.video.duration
		// player.video.currentTime
		let lastX = 0,
			lastY = 0,
			ditance = 60,
			timer;
		this.full.addEventListener('touchstart', e => {
			if (!this.jiesuo) {
				return;
			}
			lastX = e.clientX;
			lastY = e.clientY;
		});
		this.full.addEventListener('touchmove', e => {
			if (!this.jiesuo) {
				return;
			}
			clearTimeout(timer);
			timer = setTimeout(() => {
				let clientX = e.clientX;
				let clientY = e.clientY;
				let tx = clientX - lastX;
				let ty = clientY - lastY;
				//左右滑动
				if (Math.abs(tx) > Math.abs(ty)) {
					// if (tx < -ditance) {
					// 	uni.$emit("videoPlaySeek",tx)
					// } else if (tx > ditance) {
					// 	uni.$emit("videoPlaySeek",tx)
					// }
				} else {
					//上下滑动
					if (ty < -ditance || ty > ditance) {
						let num = this.h450;
						let val = parseFloat((clientY / num).toFixed(2));
						if (this.isFullScreen) {
							if (clientX <= (this.screenHeight * 1) / 4 && clientX >= 0) {
								uni.setScreenBrightness({ value: 1 - val });
							}
							if (clientX <= this.screenHeight && clientX >= (this.screenHeight * 3) / 4) {
								let num = this.screenWidth;
								let val = parseFloat((clientY / num).toFixed(2));
								plus.device.setVolume(1 - val);
							}
						} else {
							if (clientX <= (this.screenWidth * 1) / 4 && clientX >= 0) {
								uni.setScreenBrightness({ value: 1 - val });
							}
							if (clientX <= this.screenWidth && clientX >= (this.screenWidth * 3) / 4) {
								plus.device.setVolume(1 - val);
							}
						}
					}
				}
			}, 15);
		});
		this.full.addEventListener('touchend', e => {
			if (!this.jiesuo) {
				return;
			}
		});
		if (this.platform == 'ios') {
			this.fullScreenButton = new plus.nativeObj.View('fullScreenButton', {
				top: 44 + uni.getSystemInfoSync().statusBarHeight + this.h450 - 50 + 'px',
				right: '0',
				width: '90px',
				height: '50px',
				backgroundColor: 'rgba(255,255,255,0)'
			});
		} else {
			this.fullScreenButton = new plus.nativeObj.View('fullScreenButton', {
				top: 44 + uni.getSystemInfoSync().statusBarHeight + this.h450 - 50 + 'px',
				left: uni.getSystemInfoSync().screenWidth - 70 + 'px',
				right: '0',
				width: '90px',
				height: '50px',
				backgroundColor: 'rgba(255,255,255,0)'
			});
		}
		this.fullScreenButton.show('auto', 0, function() {});
		this.fullScreenButton.addEventListener('click', () => {
			if (this.isFullScreen) {
				this.portraitScreen();
			} else {
				this.landscapeScreen();
			}
		});
		uni.$on('exitFullscreen', () => {
			this.portraitScreen();
		});
		uni.showLoading({
			title: '加载中…'
		});
		this.request = uni.request({
			url: config.baseUrl,
			data: {
				ysurl: this.detailData.url
			},
			method: 'GET',
			complete: res => {
				this.loading = false;
				if (res.statusCode == 200 && res.data && res.data.code == 0) {
					let data = res.data.list;
					for (let i = 0; i < data.length; i++) {
						let a = data[i].download;
						let b = data[i].m3u8url;
						let c = data[i].onlineurl;
						let obj = {
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
					uni.$emit('videoList', this.list);
					this.obj = res.data.data;
					if (
						this.list.length <= 4 &&
						this.obj.genre.indexOf('综艺') == -1 &&
						this.obj.genre.indexOf('日韩动漫') == -1 &&
						(this.obj.genre.indexOf('剧') <= -1 ||
							this.obj.genre.indexOf('剧情片') != -1 ||
							this.obj.genre.indexOf('喜剧片') != -1 ||
							this.obj.genre.indexOf('悲剧片') != -1)
					) {
						this.buttom.close();
						this.noList = true;
					}
					setTimeout(()=>{
						uni.$emit('videoPlayNext', this.list[0].m3u8url);
						uni.$emit('videoNum', 0);
					},300)
				} else {
					uni.showModal({
						title: '提示',
						content: '数据加载失败',
						showCancel: false,
						success: res => {
							if (res.confirm) {
								this.back();
							}
						}
					});
				}
			}
		});
		this.videoList = uni.getSubNVueById('list');
		this.videoList.hide('auto', 0);
	},
	onReady(res) {
		let _t = this;
		let resObj = uni.getSystemInfoSync();
		let option = uni.getStorageSync('config');
		this.index = option.index;
		// #ifndef MP
		this.index = 1
		// #endif
		this.statusBarHeight = resObj.statusBarHeight;
		this.screenWidth = resObj.screenWidth;
		this.screenHeight = resObj.screenHeight;
		this.h450 = uni.upx2px(450);
		this.currentWebview = this.$mp.page.$getAppWebview();
		this.titleNView = this.currentWebview.getTitleNView();
		if (this.screenWidth >= 768) {
			this.ipad = true;
			if (this.h450 != 460) {
				this.h450 = 460;
			}
		} else {
			if (this.h450 == 400) {
				this.h450 = 225;
			}
		}
		//创建锁屏图片
		let button1 = new plus.nativeObj.Bitmap('bmp1');
		//图片加载完毕
		button1.load('static/suo1.png', () => {
			//创建view
			this.suo1 = new plus.nativeObj.View('suo1', { top: this.screenWidth / 2 - 32 + 'px', left: '40px', height: '54px', width: '54px', backgroundColor: 'rgba(0,0,0,0)' });
			//圆形半透明背景
			this.suo1.drawRect({ color: 'rgba(0,0,0,0.1)', radius: '27px' }, { top: '0px', left: '0px', width: '100%', height: '100%' });
			//画锁图片
			this.suo1.drawBitmap(button1, { top: '0px', left: '0px', width: '100%', height: '100%' }, { top: 'auto', left: 'auto', width: '60%', height: '60%' });
			this.suo1.hide('auto', 0);
			this.suo1.addEventListener(
				'click',
				() => {
					this.suo2.show('auto', 0, function() {});
					this.suo1.hide('auto', 0);
					this.jiesuo = true;
					this.suo1show = false;
					this.suo2show = true;

					uni.$emit('videoTitileShow');
					uni.$emit('videoButtomShow');
					uni.$emit('controllShow');
					this.titleShow = true;
					this.isControllShow = true;
					this.fullScreenButton.show('auto', 0, function() {});
				},
				false
			);
		});
		//创建解锁图片
		let button2 = new plus.nativeObj.Bitmap('bmp2');

		button2.load('static/suo2.png', () => {
			this.suo2 = new plus.nativeObj.View('suo2', { top: this.screenWidth / 2 - 32 + 'px', left: '40px', height: '54px', width: '54px', backgroundColor: 'rgba(0,0,0,0)' });
			this.suo2.drawRect({ color: 'rgba(0,0,0,0.1)', radius: '27px' }, { top: '0px', left: '0px', width: '100%', height: '100%' });
			this.suo2.drawBitmap(button2, { top: '0px', left: '0px', width: '100%', height: '100%' }, { top: 'auto', left: 'auto', width: '60%', height: '60%' });
			this.suo2.hide('auto', 0);
			this.suo2.addEventListener(
				'click',
				() => {
					this.suo1.show('auto', 0, function() {});
					this.suo2.hide('auto', 0);
					this.suo2show = false;
					this.jiesuo = false;
					this.suo1show = true;

					uni.$emit('videoTitileHide');
					uni.$emit('videoButtomHide');
					uni.$emit('controllHide');
					this.titleShow = false;
					this.isControllShow = false;
					this.fullScreenButton.hide('auto', 0);

					clearTimeout(this.suo2timer);
					this.suo2timer = setTimeout(() => {
						this.suo1.hide('auto', 0);
						this.suo1show = false;
					}, 3000);
				},
				false
			);
		});
		uni.$on('playNext', () => {
			this.playNext();
		});
		// 监听 drawer 消息
		uni.$on('changePlay', num => {
			this.num = num;
			num = parseFloat(num);
			if (this.list.length == 0) {
				return '';
			}
			let item = this.list[num];
			if(item){
				let url = item.m3u8url;
				uni.$emit('videoPlayNext', url);
				uni.$emit('videoNum', num);
				uni.$emit('videoTitileChange', this.title + '   ' + item.num);
			}
		});
		uni.$on('fullHide', data => {
			this.full.hide('auto', 0);
			uni.$emit('videoTitileHide');
			uni.$emit('videoButtomHide');
			uni.$emit('controllHide');
			this.titleShow = false;
			this.isControllShow = false;
			this.suo2.hide('auto', 0);
			this.suo2show = false;
			this.fullScreenButton.hide('auto', 0);
		});
		uni.$on('fullShow', data => {
			this.full.show('auto', 0, function() {});
			if (this.isFullScreen) {
				uni.$emit('videoTitileShow');
				this.titleShow = true;
				this.suo2.show();
				this.suo2show = true;
			}
			uni.$emit('videoButtomShow');
			uni.$emit('controllShow');
			this.isControllShow = true;
			this.fullScreenButton.show('auto', 0, function() {});
		});
	},
	onNavigationBarButtonTap(val) {
		if (val.index == 1) {
		}
		if (val.index == 0) {
			uni.showToast({
				title: '点击了收藏'
			});
		}
	},
	onUnload() {
		plus.screen.lockOrientation('portrait-primary');
		this.fullScreenButton.close();
		clearInterval(this.timer);
		clearInterval(this.playTimer);
		uni.hideLoading();
		uni.$off('exitFullscreen');
		uni.$off('playNext');
		uni.$off('fullHide');
		uni.$off('fullShow');
		uni.$off('changePlay');
		this.full.close();
		this.suo1.close();
		this.suo2.close();
		this.buttom.hide('auto', 0);
		this.videoTitleNvue.hide('auto', 0);
		this.video.hide('auto', 0);
		this.videoList.hide('auto', 0);
		this.request.abort()
	},
	methods: {
		
		back() {
			uni.navigateBack()
		},
		imgError(item) {
			item.cover = '/static/404.jpg';
		},
		play() {
			uni.$emit('videoPlay');
			// this.landscapeScreen();
		},
		play2(item, index) {
			if (this.num == index) {
			} else {
				this.num = index;
			}
			// this.landscapeScreen();
			let num = this.num;
			num = parseFloat(num);
			let item2 = this.list[num];
			let url = item2.m3u8url;
			uni.$emit('videoPlayNext', url);
			uni.$emit('videoNum', num);
		},
		playNext() {
			clearTimeout(this.nextTimer);
			this.nextTimer = setTimeout(() => {
				let num = this.num;
				num = parseFloat(num);
				num++;
				if (num >= this.list.length - 1) {
					num = this.list.length - 1;
					return;
				}
				this.num = num;
				let item = this.list[num];
				if(item){
					let url = item.m3u8url;
					uni.$emit('videoPlayNext', url);
					uni.$emit('videoNum', num);
					uni.$emit('videoTitileChange', this.title + '   ' + item.num);
				}
			}, 300);
		},
		//横屏
		landscapeScreen() {
			plus.navigator.setFullscreen(true);
			this.currentWebview.setStyle({
				popGesture: 'none'
			});
			plus.screen.lockOrientation('landscape-primary');
			if (this.ipad) {
				this.video.setStyle({
					top: -this.statusBarHeight + 'px',
					left: '0px',
					width: this.screenHeight + 'px',
					height: this.screenWidth + this.statusBarHeight + 'px'
				});
			} else {
				this.video.setStyle({
					top: '0px',
					left: '0px',
					width: this.screenHeight + 'px',
					height: this.screenWidth + 'px'
				});
			}
			this.titleNView.hide('auto', 0);
			this.videoTitleNvue.show('auto', 0);
			this.isFullScreen = true;
			if (this.platform == 'ios') {
				this.fullScreenButton.setStyle({
					top: this.screenWidth - 42 + 'px'
				});
				this.full.setStyle({
					top: '40px',
					height: this.screenWidth - 110 + 'px'
				});
				this.videoTitleNvue.setStyle({
					top: '0px',
					width: this.screenHeight + 'px'
				});
				this.buttom.setStyle({
					bottom: '4px'
				});
			
			} else {
				this.fullScreenButton.setStyle({
					top: this.screenWidth - 48 + 'px',
					left: uni.getSystemInfoSync().screenHeight - 70 + 'px'
				});
				this.full.setStyle({
					top: '60px',
					height: this.screenWidth - 110 + 'px'
				});
				this.videoTitleNvue.setStyle({
					top: '0px',
					width: this.screenHeight + 'px'
				});
				this.buttom.setStyle({
					bottom: '4px'
				});
				//隐藏虚拟按键
				// this.decorView.setSystemUiVisibility(
				// View.SYSTEM_UI_FLAG_HIDE_NAVIGATION| 
				// View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY| 
				// View.SYSTEM_UI_FLAG_FULLSCREEN);  
				
				// this.params.systemUiVisibility = this.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION|this.View.SYSTEM_UI_FLAG_IMMERSIVE;
				// this.windowMe.setAttributes(this.params);
			}
			uni.$emit('videoTitileShow');
			uni.$emit('videoButtomShow');
			uni.$emit('videoButtomXuanjiShow');
			this.suo2.show('auto', 0, function() {});
			this.suo2show = true;
			this.titleShow = true;
			uni.$emit('landscapeScreen');
			this.buttom.show('auto', 0);
			if(this.noList){
				uni.$emit('videoNoList')
			}else{
				uni.$emit('videoFull')
			}
		},
		//竖屏
		portraitScreen() {
			plus.navigator.setFullscreen(false);
			this.currentWebview.setStyle({
				popGesture: 'close'
			});
			plus.screen.lockOrientation('portrait-primary');
			
			this.titleNView.show('auto', 0, function() {});
			this.videoTitleNvue.hide('auto', 0);
			this.isFullScreen = false;
			
			if (this.platform == 'ios') {
				this.fullScreenButton.setStyle({
					top: 44 + uni.getSystemInfoSync().statusBarHeight + this.h450 - 42 + 'px'
				});
				this.full.setStyle({
					top: this.statusBarHeight + 44 + 'px',
					height: this.h450 - 70 + 'px'
				});
				this.videoTitleNvue.setStyle({
					top: 44 + uni.getSystemInfoSync().statusBarHeight + 'px',
					width: this.screenWidth + 'px'
				});
				this.video.setStyle({
					top: '64px',
					left: '0px',
					width: this.screenWidth + 'px',
					height: this.h450 + 'px'
				});
				this.buttom.setStyle({
					bottom: this.screenHeight - this.h450 - (44 + uni.getSystemInfoSync().statusBarHeight)+4 + 'px'
				});
			} else {
				setTimeout(()=>{
					let m= 10;
					let h = this.h450+m
					this.boxHeight = h + 'px';
					this.scrollHeight = 'calc(100% - ' + h + 'px)';
					//显示虚拟按键
					// this.decorView.setSystemUiVisibility(this.View.SYSTEM_UI_FLAG_FULLSCREEN);  
					
					// this.params.systemUiVisibility = this.View.SYSTEM_UI_FLAG_FULLSCREEN;
					// this.windowMe.setAttributes(this.params);
					this.full.setStyle({
						top: (this.statusBarHeight + 44) + 'px',
						height: (m+this.h450 - 50 )+ 'px'
					});
					// this.videoTitleNvue.setStyle({
					// 	top: (44 + uni.getSystemInfoSync().statusBarHeight) + 'px',
					// 	width: this.screenWidth + 'px'
					// });
					this.video.setStyle({
						top: (m+44 + uni.getSystemInfoSync().statusBarHeight )+ 'px',
						left: '0px',
						width: '100%',
						height: this.h450 + 'px'
					});
					// this.buttom.setStyle({
					// 	bottom: this.screenHeight - this.h450 - (44 + uni.getSystemInfoSync().statusBarHeight)+4 + 'px'
					// });
					this.fullScreenButton.setStyle({
						top:(m+ 44 + uni.getSystemInfoSync().statusBarHeight + this.h450 - 50) + 'px',
						left: (uni.getSystemInfoSync().screenWidth - 70) + 'px',
						right: '0',
						width: '90px',
						height: '50px',
					});
				},320)
				
			}
			uni.$emit('videoButtomXuanjiHide');
			uni.$emit('videoTitileHide');
			uni.$emit("videoButtomHide")
			this.suo2.hide('auto', 0);
			this.suo2show = false;
			this.titleShow = false;
			uni.$emit('portraitScreen');
			this.buttom.hide('auto', 0);
			uni.$emit('videoNoFull')
		}
	}
};
</script>
<style>
page {
	background-color: #000000;
}
</style>
<style lang="scss">
.scroll {
	flex: 1;
	position: fixed;
	background-color: #f8f8f8;
	height: calc(100% - 125px);
	top: 125px;
	left: 0;
	// padding-bottom: 160upx;
	overflow-y: auto;
	width: 750upx;
	z-index: 999999;
}
.scroll-content {
	display: flex;
	flex-direction: column;
}

.text-box {
	padding: 5px;
	.text {
		margin: 0;
		padding: 0;
		line-height: 22px;
	}
}
.text-box.ipad {
	position: absolute;
	top: 136px;
	right: 0;
	width: calc(100% - 110px);
	height: 140px;
	overflow: hidden;
	padding: 5px;
}
.image-box {
	width: 100px;
	height: 140px;
	margin-top: 5px;
	margin-left: 5px;
	display: flex;
}
.uni-image {
	width: 100px;
	height: 140px;
}
.text-right {
	width: calc(100% - 110px);
	position: absolute;
	top: 0;
	right: 0;
	padding: 5px;
}
.text-bottom {
	width: calc(100% - 110px);
	position: absolute;
	/* #ifdef APP-PLUS */
	top: 140px;
	/* #endif */
	/* #ifdef H5 */
	top: 130px;
	/* #endif */
	right: 0;
	padding: 5px;
	button,
	text,
	switch {
		float: left;
	}
	text {
		margin-top: 5px;
	}
}
.text-bottom.ipad {
	top: 145px;
}
.play-button {
	margin-right: 15px;
}
.list-box {
	padding: 5px;
	padding-bottom: 20px;
	button {
		margin-top: 10px;
		margin-right: 10px;
	}
}
.performer {
	/* #ifdef APP-PLUS */
	height: 60px;
	/* #endif */
	/* #ifdef H5 */
	height: 40px;
	/* #endif */
	overflow: hidden;
}
.text-over {
	/* #ifdef APP-PLUS */
	height: 22px;
	/* #endif */
	/* #ifdef H5 */
	height: 22px;
	/* #endif */
}
.text-over1 {
	margin-bottom: 10px;
}
.text {
	font-size: 14px;
	line-height: 22px;
	height: 22px;
}
.text-name {
	
}
.video-box {
	width: 750upx;
	height: 175px;
	position: absolute;
	top: 0px;
	left: 0;
	z-index: 10;
	background-color: #000000;
	justify-content: center;
	align-items: center;
	display: flex;
}
.video-box-img {
	width: 40px;
	height: 40px;
}
.backImg {
	width: 100%;
	height:32px;
	position: absolute;
	top: 170px;
	left: 10px;
	color: #ffffff;
}
.web-view {
	
}
.richtext {
	background: #000000;
}
.switch-label {
	line-height: 32px;
}
</style>
