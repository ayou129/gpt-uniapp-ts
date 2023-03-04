<template>
  <view class="home">
    <Header title="首页"></Header>
    <swiper :autoplay="true" :interval="5000">
      <swiper-item>
        <image src="/static/images/banner1.jpg"></image>
      </swiper-item>
      <swiper-item>
        <image src="/static/images/banner2.jpg"></image>
      </swiper-item>
    </swiper>
    <view class="buttons">
      <!-- <view class="button" @click="$router.push('/match')">
        <text>匹配好友</text>
      </view>
      <view class="button" @click="$router.push('/community')">
        <text>公共社区</text>
      </view>
      <view class="button" @click="$router.push('/friend')">
        <text>好友关注</text> -->
      </view>
    </view>
</template>
  
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  title: string = "Hello";

  onLoad() {
  }
}
</script>
  
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
}

swiper {
  height: 150px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 15px;
}

.button {
  width: 31%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.button text {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
</style>
  