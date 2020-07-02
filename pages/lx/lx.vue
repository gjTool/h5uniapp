<template>
	<view>
		<view class="img-box" v-if="index == 1"> 
			<image class="img" mode="widthFix" src="/static/jin.jpg" show-menu-by-longpress></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0
			}
		},
		methods: {
			
		},
		onReady(){
			let option = uni.getStorageSync('config');
			this.index = option.index
			// #ifndef MP
			this.index = 1
			// #endif
		},
	}
</script>

<style>
	.img-box{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.img{
		pointer-events: auto !important;
		text-align: center;
	}
</style>
