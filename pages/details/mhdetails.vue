<template>
	<view class="content">
		<!-- <uni-nav-bar :status-bar="true" left-icon="arrowleft" @click-left="back" :title="title" right-text="收藏" @click-right="shoucang"
		 :background-color="'#ec706b'" class="uni-nav-bar" /> -->
		<scroll-view class="scroll" scroll-y v-if="index==1">
			<view class="scroll-content">
				<view class="image-box">
					<image :src="obj.cover" @error="imgError(obj)" class="img" show-menu-by-longpress></image>
				</view>
				<view class="text-right">
					<view class="text-name"><text>名称</text>：<text>{{obj.name? obj.name : ""}}</text></view>
					<view><text>作者</text>：<text>{{obj.author ? obj.author : ""}}</text></view>
					<view><text>状态</text>：<text>{{obj.status? obj.status : ""}}</text></view>
					<view class="button-box">
						<button class="play-button" type="primary" size="mini" @click="play(list[num],num)">开始阅读</button>
						<button class="play-button" type="default" size="mini" @click="gotomhlist">章节目录</button>
						<!-- #ifdef APP-PLUS -->
						<!-- <button class="play-button" type="primary" size="mini" plain @click="download">下载全部</button> -->
						<!-- #endif -->
					</view>
				</view>
				<view class="text-zx">
					<view class="text-item" @click="play(list[num],num)"><text class="text-zx-title">上次阅读</text>：<text class="text-zx-content active">{{list.length ? list[num].num : ""}}</text></view>
					<view class="text-item"><text class="text-zx-title">最新章节</text>：<text class="text-zx-content">{{list.length ? list[list.length-1].num : ""}}</text></view>
					<view class="text-item"><text class="text-zx-title">最后更新</text>：<text class="text-zx-content">{{obj["time"] ? obj["time"] : obj[" time"]}}</text></view>
				</view>
				<view class="list-box">
					<view><text>简介</text>：</view>
					<scroll-view class="performer" scroll-y>
						<view><text>{{obj.introduce? obj.introduce : ""}}</text></view>
					</scroll-view>
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
			mixLoading,
			uniIcons,
			uniNavBar
		},
		data() {
			return {
				visible: false,
				num: 0,
				loading: true,
				detailData: {},
				list: [],
				title: "",
				obj: {},
				index: 0,
				type: "h5", // h5 video
				openid: ""
			}
		},
		onNavigationBarButtonTap(val) {
			if (val.index == 1) {}
			if (val.index == 0) {
				uni.showToast({
					title: '点击了收藏'
				});
			}
		},
		onReady() {
			let option = uni.getStorageSync('config');
			this.index = option.index
			// #ifndef MP
			this.index = 1
			// #endif
		},
		onShareAppMessage(res) {
		  return {
			title: "[漫画]"+this.title ,
			imageUrl:this.detailData.cover,
			path: '/pages/details/mhdetails?data='+JSON.stringify(this.detailData)
		  }
		},
		onShareTimeline(){
			return {
				title: "[漫画]"+this.title ,
				imageUrl:this.detailData.cover,
				query: 'data='+JSON.stringify(this.detailData)
			}
		},
		onLoad(options) {
			this.openid = uni.getStorageSync("userInfo").openid;
			this.detailData = JSON.parse(options.data);
			this.title = this.detailData.name;
			this.num = config.getMhZJnum(this.detailData.url);
			this.num = this.num ? this.num : 0;
			uni.setNavigationBarTitle({
				title: this.title
			});
			uni.request({
				url: uni.getStorageSync('baseUrl'),
				data: {
					mhurl1: this.detailData.url
				},
				method: "GET",
				complete: (res) => {
					this.loading = false
					if (res.statusCode == 200 && res.data && res.data.code == 0) {
						let data = res.data.list
						this.list = data;
						this.obj = res.data.data

						this.detailData.cover = this.obj.cover;
						// this.getCacheState(data)
						try {
							uni.setStorageSync('mhlist' + this.detailData.url, this.list);
						
							this.detailData.title = this.list[this.num].num;
							this.detailData.Time = new Date().getTime();
							this.detailData.saveTime = config.getDate("/"); 
							config.setMhZJ(this.num, this.detailData)
						} catch (e) {}
					}
				}
			});
			//监听事件
			this.$eventHub.$on('changeMhNum', (data) => {
				this.num = data;
				this.detailData.title = this.list[this.num].num;
				this.detailData.Time = new Date().getTime();
				this.detailData.saveTime = config.getDate("/"); 
				config.setMhZJ(data, this.detailData)
			})
		},
		methods: {
			imgError(obj) {
				obj.cover = "/static/404.jpg"
			},
			play(item, index) {
				this.num = index;
				this.detailData.title = this.list[index].num;
				this.detailData.mum = this.num;
				config.setMhZJ(this.num, this.detailData)
				try {
					uni.setStorageSync('mhlist' + this.detailData.url, this.list);
				} catch (e) {}
				uni.navigateTo({
					url: '/pages/mh/mh?src=' + encodeURIComponent(item.url) + "&data=" + JSON.stringify(this.detailData)
				});
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			download() {
				uni.showToast({
					title: '点击了下载',
					icon: 'none'
				});
			},
			shoucang() {
				try {
					const value = uni.getStorageSync('mhShouCang');
					if (value) {
						this.detailData.num = this.num;
						this.detailData.list = this.list;
						// console.log(this.num)
						let flag = false;
						for (let i = 0; i < value.length; i++) {
							if (value[i].name == this.detailData.name) {
								value[i] = this.detailData;
								flag = true;
								break;
							}
						}
						if (flag) {
							uni.showToast({
								title: "已经收藏过啦"
							})
						} else {
							value.push(this.detailData)
							uni.setStorage({
								key: 'mhShouCang',
								data: value,
								success: function() {
									uni.showToast({
										title: "收藏成功"
									})
								}
							});
						}

					} else {
						let data = [];
						this.detailData.num = this.num;
						this.detailData.list = this.list;
						// console.log(this.num)
						data.push(this.detailData)
						uni.setStorage({
							key: 'mhShouCang',
							data: data,
							success: function() {
								uni.showToast({
									title: "收藏成功"
								})
							}
						});
					}
				} catch (e) {
					let data = [];
					this.detailData.num = this.num;
					this.detailData.list = this.list;
					// console.log(this.num)
					data.push(this.detailData)
					uni.setStorage({
						key: 'mhShouCang',
						data: data,
						success: function() {
							uni.showToast({
								title: "收藏成功"
							})

						}
					});
				}
			},
			gotomhlist() {
				let data = {
					mhname: this.title,
					num: this.num,
					from: "mhdetails",
					url: this.detailData.url,
					cover: this.detailData.cover
				}
				uni.navigateTo({
					url: `/pages/mhlist/mhlist?data=${JSON.stringify(data)}&obj=${JSON.stringify(this.detailData)}`
				});
			}
		}
	}
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
		/* #ifdef H5 */
		// padding-top: 44px;
		/* #endif */
		/* #ifdef APP-PLUS */
		// padding-top: 64px;
		/* #endif */
	}

	.scroll-content {
		display: flex;
		flex-direction: column;
	}

	.image-box {
		width: 170px;
		height: 230px;
		margin-top: 5px;
		margin-left: 5px;
		display: flex;
	}

	uni-image {
		width: 170px;
		height: 230px;
	}

	.text-box {
		margin-top: 10px;
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
		position: absolute;
		/* #ifdef APP-PLUS */
		top: 210px;
		/* #endif */
		/* #ifdef H5 */
		top: 200px;
		/* #endif */
		left: 150px;
	}

	switch {
		transform: scale(0.7);
	}

	.play-button {
		margin-right: 10px;
		margin-top: 20px;
		display: inline-block;
	}

	.list-box {
		padding: 10px;
		font-size: 16px;
	}

	.performer {
		/* #ifdef APP-PLUS */
		// height: 320upx;
		height: calc(100% - 230px);
		/* #endif */
		/* #ifdef H5 */
		// height: 310upx;
		height: calc(100% - 230px);
		/* #endif */
		overflow: hidden;
		text-indent: 25px;
	}

	.text-name {}

	.button-box {
		margin-top: 10px;
	}

	.text-zx {
		font-size: 14px;
		padding-left: 10px;
		padding-top: 10px;
		margin-top: 10px;

		.text-item {}

		.text-zx-title {}

		.text-zx-content {
			color: #333;
		}

		.text-zx-content.active {
			color: #007AFF;
			font-weight: 500;
		}
	}

	.img {
		pointer-events: auto !important;
	}
</style>
