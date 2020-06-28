<template>
	<view>
		<text>{{text}}</text>
	</view>
</template>

<script>
	import config from '@/config'
	export default {
		data() {
			return {
				text:config.alert
			}
		},
		methods: {

		},
		onShow() {
			uni.request({
				url: "https://www.gjtool.cn/download/config.json",
				method: "GET",
				complete: (res) => {
					if (res.statusCode == 200 && res.data) {
						let data = res.data
						if (!data || !data.enable) {
							// #ifdef APP-PLUS
							var currentWebview = this.$mp.page.$getAppWebview();
							currentWebview.setStyle({
								popGesture: "none",
								titleNView: {
									autoBackButton: false
								}
							});
							// #endif
							// #ifdef H5
							document.getElementsByClassName("uni-page-head-hd")[0].style.display = "none"
							// #endif
						}
					}
				}
			});
		}
	}
</script>

<style>
	view {
		padding: 5px;
		padding-top:10px;
		text-indent: 28px;
	}

	text {
		font-size: 14px;
	}
</style>
