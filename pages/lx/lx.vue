<template>
	<view>
		<view class="img-box" v-if="index == 1"> 
			<view class="img-div"  v-for="(item,index) in imgList" :key="index" >
				<image class="img" mode="widthFix":src="item" show-menu-by-longpress></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				imgList:[]
			}
		},
		methods: {
			
		},
		onReady(){
			
		},
		onLoad(){
			let option = uni.getStorageSync('config');
			this.index = option.index
			// #ifndef MP
			this.index = 1
			// #endif
			this.imgList = option.imgList;
			if(this.index== 1){
				uni.request({
					url: 'https://www.gjtool.cn/download/config.json',
					method: 'GET',
					complete: res => {
						if (res.statusCode == 200 && res.data) {
							this.imgList = res.data.img
							uni.setStorage({
								key: 'config',
								data: res.data
							});
						}
					}
				});
			}
		}
	}
</script>

<style>
	.img-box{
		
	}
	.img-div{
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.img{
		pointer-events: auto !important;
		
	}
</style>
