<template>
  <view>
    <view class="box">
      <view class="progress-box">
        <view class="progress" :class="{red:width<=20}" :style="{width:width+ '%'}"></view>
      </view>
      <text class="progress-text" :class="{android:platform=='android'}">{{width+ '%'}}</text>
    </view>
  </view>
</template>
<script>
export default {
  name: "battery",
  props: {
    proQuantity: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      width: 0,
      platform: ""
    };
  },
  created() {
    this.width = this.proQuantity;
    this.platform = uni.getSystemInfoSync().platform;
  },
  watch: {
    // 监听是否变化电量 ，如果是 做一个充电动画
    proQuantity(newVal, oldVal) {
      this.width = newVal;
    }
  },
  methods: {}
};
</script>
<style scoped>
.box {
  height: 10px;
  width: 20px;
  border: 1px solid #777;
  position: relative;
}

.box .progress-box {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 1px;
  box-sizing: border-box;
}

.box .progress-box .progress {
  height: 100%;
  width: 30%;
  box-sizing: border-box;
  background-color: #555555;
}
.box .progress-box .progress.red {
  background-color: red;
}
.box::after {
  content: "";
  height: 2px;
  width: 1px;
  background-color: #777;
  border: 1px solid #777;
  position: absolute;
  top: 2px;
  right: -4px;
  border-radius: 0 1px 1px 0;
}
.progress-text {
  font-size: 10px;
  position: absolute;
  top: -4px;
  left: 14px;
  color: #555555;
}
.progress-text.android {
  top: 0px;
}
</style>
