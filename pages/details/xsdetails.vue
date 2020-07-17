<template>
	<view class="content">
		<!-- <uni-nav-bar :status-bar="true" left-icon="arrowleft" @click-left="back" :title="title" right-text="收藏" @click-right="shoucang"
		 :background-color="'#ec706b'" class="uni-nav-bar" /> -->

		<scroll-view class="scroll" scroll-y  v-if="index==1">
			<view class="scroll-content">
				<view class="image-box">
					<image :src="obj.cover" @error="imgError(obj)"></image>
				</view>
				<view class="text-right">
					<view class="text-name"><text>名称</text>：<text>{{obj.name? obj.name : ""}}</text></view>
					<view><text>作者</text>：<text>{{obj.author ? obj.author : ""}}</text></view>
					<view><text>状态</text>：<text>{{obj.status? obj.status : ""}}</text></view>
					<view class="button-box">
						<button class="play-button" type="primary" size="mini" @click="play(list[num],num)">开始阅读</button>
						<button class="play-button" type="default" size="mini" @click="gotoxslist">章节目录</button>
						<!-- #ifdef APP-PLUS -->
						<button class="play-button" type="primary" size="mini" plain @click="download">下载全部</button>
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
			uniNavBar,
		},
		data() {
			return {
				index:0,
				visible: false,
				num: 0,
				loading: true,
				detailData: {},
				list: [],
				obj: {},
				title: "",
				type: "h5" ,// h5 video
				openid: ""
			}
		},
		onShareAppMessage(res) {
		  return {
			title: "[小说]"+this.title ,
			imageUrl:this.detailData.cover,
			path: '/pages/details/xsdetails?data='+JSON.stringify(this.detailData)
		  }
		},
		onShareTimeline(){
			return {
				title: "[小说]"+this.title ,
				imageUrl:this.detailData.cover,
				query: 'data='+JSON.stringify(this.detailData)
			}
		},
		onShow() {
			// this.num = uni.getStorageSync("xs"+this.title);
		},
		onPullDownRefresh(){
			this.getList()
		},
		onLoad(options) {
			let option = uni.getStorageSync('config');
			this.index = option.index
			// #ifndef MP
			this.index = 1
			// #endif
			this.openid = uni.getStorageSync("userInfo").openid;
			this.detailData = JSON.parse(options.data);
			this.title = this.detailData.name;
			this.num = config.getXsZJnum(this.detailData.url);
			this.num = this.num ? this.num : 0;
			uni.setNavigationBarTitle({
				title: this.title
			});
			this.getList()
			//监听事件
			this.$eventHub.$on('changeXsNum', (data) => {
				this.num = data;
				if(this.list && this.list.length&&this.list[data]){
					this.detailData.title = this.list[data].num;
					this.detailData.index = data;
					this.detailData.Time = new Date().getTime();
					this.detailData.saveTime = config.getDate("/"); 
					config.setXsZJ(data, this.detailData)
				}
			})
		},
		methods: {
			getList(){
				uni.request({
					url: uni.getStorageSync('baseUrl'),
					data: {
						xsurl1: this.detailData.url
					},
					method: "GET",
					complete: (res) => {
						this.loading = false
						uni.stopPullDownRefresh()
						if (res.statusCode == 200 && res.data && res.data.code == 0) {
							let data = res.data.list
							this.list = data;
							this.obj = res.data.data;
							this.detailData.cover = this.obj.cover;
							this.getCacheState(data)
							try {
								uni.setStorageSync('xslist'+ this.detailData.url, this.list);
							} catch (e) {}
							
						}
					}
				});
			},
			getCacheState(xslist){
				let _this = this;
				let value = uni.getStorageSync('xsDownload');
				if (value) {
					for (let i = 0; i < value.length; i++) {
						if (value[i].name == _this.title) {
							let arr = value[i].data;
							value[i].xslist = xslist;
							arr.forEach((item)=>{
								xslist.forEach((obj)=>{
									if(item.numName == obj.num && item.state == "done"){
										obj.state = "done";
									}
								})
							})
							break;
						}
					}
					uni.setStorageSync('xsDownload',value);
				}
			},
			download() {
				uni.showToast({
					title: '点击了下载',
					icon: 'none'
				});
			},
			imgError(obj){
				obj.cover = "/static/404.jpg"
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			play(item, index) {
				this.num = index;
				this.detailData.title = this.list[index].num;
				this.detailData.index = this.num;
				config.setXsZJ(this.num, this.detailData)
				try {
					uni.setStorageSync('xslist' + this.detailData.url, this.list);
				} catch (e) {}
				uni.navigateTo({
					url: '/pages/xs/xs?src=' + encodeURIComponent(item.url) + "&data=" + JSON.stringify(this.detailData)
				});
			},
			shoucang() {
				try {
					const value = uni.getStorageSync('xsShouCang');
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
						}else {
							value.push(this.detailData)
							uni.setStorage({
								key: 'xsShouCang',
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
							key: 'xsShouCang',
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
					data.push(this.detailData)
					uni.setStorage({
						key: 'xsShouCang',
						data: data,
						success: function() {
							uni.showToast({
								title: "收藏成功"
							})

						}
					});
				}

			},
			gotoxslist() {
				let data = {
					xsname: this.title,
					num: this.num,
					from: "xsdetails",
					url: this.detailData.url,
					cover: this.detailData.cover
				}
				uni.navigateTo({
					url: `/pages/xslist/xslist?data=${JSON.stringify(data)}&obj=${JSON.stringify(this.detailData)}`
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
		padding-top: 64px;
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
		top:200px;
		/* #endif */
		left: 150px;
	}

	switch {
		transform: scale(0.7);
	}

	.play-button {
		margin-right:10px;
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
		height: calc( 100% -  230px);
		/* #endif */
		/* #ifdef H5 */
		// height: 310upx;
		height: calc( 100% -  230px);
		/* #endif */
		overflow: hidden;
		text-indent: 25px;
	}

	.text-name {
		// white-space: nowrap;
		// text-overflow: ellipsis;
		// overflow: hidden;
	}
	.button-box {
		margin-top: 10px;
	}
	.text-zx {
		font-size: 14px;
		padding-left: 10px;
		padding-top: 10px;
		margin-top: 10px;
		.text-item{
		}
		.text-zx-title {
			
		}
		.text-zx-content {
			color: #333;
		}
		.text-zx-content.active{
			color: #007AFF;
			font-weight: 500;
		}
	}
</style>
