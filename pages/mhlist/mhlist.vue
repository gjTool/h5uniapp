<template>
	<view class="content">
		<!-- 	<uni-nav-bar :status-bar="true" left-icon="arrowleft" @click-left="back" :title="title" :background-color="'#ec706b'"
		 class="uni-nav-bar" :right-text="sort" @click-right="sortlist" /> -->
		<view class="uni-xs-list" v-if="index==1">
			<!-- 下拉刷新组件 -->
			<mix-pulldown-refresh ref="mixPulldownRefresh" :top="0" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
				<scroll-view class="scroll" :scroll-y="enableScroll" scroll-y style="padding:20upx;">
					<view class="list-top">
						<text>到顶了～</text>
					</view>
					<view class="text-view" :ref="index == num ?'active':'' " v-for="(item,index) in mhlist" :key="index" :class="{'active':index == num}"
					 @click="itemClick(item,index)">
						<text class="text">{{item.num}}</text>
						<text v-show="item.state ? true:false" class="cache">已缓存</text>
					</view>

					<view class="list-bottom">
						<text>到底了～</text>
					</view>
				</scroll-view>
			</mix-pulldown-refresh>
		</view>
	</view>
</template>

<script>
	import config from '@/config';
	import mixLoading from '@/components/mix-loading/mix-loading';
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	export default {
		components: {
			mixLoading,
			uniIcons,
			uniNavBar,
			mixPulldownRefresh
		},
		data() {
			return {
				num: 0,
				mhname: "",
				show: false,
				visible: false,
				loading: true,
				enableScroll: true,
				title: "",
				url: "",
				url1: "",
				mhlist: [],
				list: [],
				sort: "升序",
				from: "xs",
				index: 0,
				cover: "",
				openid: "",
				detailData: null,
				detailDataObj:{}
			}
		},
		methods: {
			//下拉刷新
			onPulldownReresh() {
				this.getmhlist((state) => {
					this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
					if (state == "ok") {
						uni.showToast({
							title: "刷新成功"
						})
					} else {
						uni.showToast({
							title: "刷新失败",
							icon: "none"
						})
					}

				})
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable) {
				if (this.enableScroll !== enable) {
					this.enableScroll = enable;
				}
			},
			sortlist() {
				let _this = this;
				let arr = []
				for (let i = this.mhlist.length - 1; i > -1; i--) {
					arr.push(this.mhlist[i])
				}
				this.mhlist = arr;
				let num2 = this.mhlist.length - 1 - this.num;
				this.num = num2;
				if (this.sort == "升序") {
					this.sort = "倒序";
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 0
					});
				} else {
					this.sort = "升序";
					_this.scrollTo()
				}
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			itemClick(item, index) {
				// config.setMhZJ(index, {
				// 	title: this.mhlist[index].num,
				// 	name: this.mhname,
				// 	cover: this.cover,
				// 	url: this.url1
				// })

				this.num = index;
				try {
					const value = uni.getStorageSync('mhShouCang');
					if (value) {
						let flag = false;
						for (let i = 0; i < value.length; i++) {
							if (value[i].name == this.mhname) {
								value[i].num = index;
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
				this.$eventHub.$emit('changeMhNum', index);
				if (this.from == "mh") {
					this.$eventHub.$emit('changeMhContent', item, index);
					setTimeout(() => {
						this.back()
					}, 300)
				} else {
					uni.redirectTo({
						url: '/pages/mh/mh?src=' + encodeURIComponent(item.url) + "&data="+JSON.stringify(this.detailDataObj) 
					});
				}
			},
			scrollTo() {
				let _this = this;
				// 获取屏幕高度
				let windowHeight = uni.getSystemInfoSync().windowHeight;
				let len = (parseInt(_this.num) + 6) * 33 - windowHeight / 2 + 64 + 44
				len = len - windowHeight >= 0 ? len : 0
				uni.pageScrollTo({
					scrollTop: len,
					duration: 0
				});
			},
			getmhlist(callback) {
				let _this = this;
				_this.loading = true
				uni.request({
					url: config.baseUrl,
					data: {
						mhurl1: _this.url1
					},
					method: "GET",
					complete: (res) => {
						_this.loading = false
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							let data = res.data.list
							_this.mhlist = data;
							// _this.getCacheState(_this.mhlist);
							setTimeout(() => {
								_this.scrollTo()
								callback && callback("ok")
							}, 200)
							try {
								uni.setStorageSync('mhlist' + _this.url1, _this.mhlist);
							} catch (e) {}
						} else {
							callback && callback("fail")
						}
					}
				});
			},
			getCacheState(xslist) {
				let _this = this;
				let value = uni.getStorageSync('xsDownload');
				if (value) {
					for (let i = 0; i < value.length; i++) {
						if (value[i].name == _this.xsname) {
							let arr = value[i].data;
							value[i].xslist = xslist;
							arr.forEach((item) => {
								xslist.forEach((obj) => {
									if (item.numName == obj.num && item.state == "done") {
										obj.state = "done";
									}
								})
							})
							_this.xslist = xslist;
							break;
						}
					}
					uni.setStorageSync('xsDownload', value);
				}
			}
		},
		onNavigationBarButtonTap(val) {
			if (val.index == 1) {}
			if (val.index == 0) {
				this.sortlist()
			}
		},
		onReady() {
			let option = uni.getStorageSync('config');
			this.index = option.index
			// #ifndef MP
			this.index = 1
			// #endif
		},
		onLoad(options) {
			let _this = this;
			this.openid = uni.getStorageSync("userInfo").openid;
			this.detailData = JSON.parse(options.data);
			this.detailDataObj = JSON.parse(options.obj);
			this.mhname = decodeURIComponent(this.detailData.mhname);
			this.num = decodeURIComponent(this.detailData.num);
			this.from = decodeURIComponent(this.detailData.from);
			this.url1 = decodeURIComponent(this.detailData.url);
			this.cover = decodeURIComponent(this.detailData.cover);
			this.title = this.mhname;
			uni.setNavigationBarTitle({
				title: this.title
			});

			_this.mhlist = uni.getStorageSync('mhlist' + this.url1);
			// _this.getCacheState(_this.mhlist)
			setTimeout(() => {
				_this.scrollTo()
			}, 200)
			_this.getmhlist()
		}
	}
</script>

<style lang="scss">
	.content,
	.uni-xs-list {
		/* background-color: #ec706b; */
	}

	.content .uni-xs-list .scroll {
		background-color: #FFFFFF;
	}
	.content .uni-xs-list .scroll::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		display: none;
	}	 

	.active {
		color: #007AFF;
		font-weight: 600;
	}

	.uni-xs-list {
		font-size: 16px;
		/* #ifdef H5 */
		// padding-top: 44px;
		/* #endif */
		/* #ifdef APP-PLUS */
		// padding-top: 64px;
		/* #endif */
	}

	.text-view {
		border-bottom: 1px dotted #ccc;
		padding: 6px 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 14px;
		position: relative;
		padding-right: 50px;

		.cache {
			position: absolute;
			top: 6px;
			right: 0;
			color: #999;
			font-weight: 400;
		}
	}

	.list-bottom,
	.list-top {
		text-align: center;
		color: #999;
	}
</style>
