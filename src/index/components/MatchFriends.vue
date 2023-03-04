<template>
  <view>
    <!-- 匹配按钮 -->
    <button @click="matchFriends">匹配异性好友</button>
    <!-- 匹配结果 -->
    <view v-if="matched">
      <view>你的匹配结果：</view>
      <view>用户名：{{ matched.username }}</view>
      <view>性别：{{ matched.gender }}</view>
      <view>年龄：{{ matched.age }}</view>
      <button @click="chat">立即聊天</button>
    </view>
  </view>
</template>
  
  <script lang="ts">
import { defineComponent, ref } from "vue";
import { request } from "@/common/request";
import { showToast } from "@/common/utils";

export default defineComponent({
  setup() {
    const matched = ref(null); // 匹配结果

    // 匹配异性好友
    const matchFriends = async () => {
      try {
        const res = await request.post("/match-friends");
        if (res.code === 0) {
          matched.value = res.data;
        } else {
          showToast(res.msg);
        }
      } catch (err) {
        console.error(err);
        showToast("网络请求出错，请稍后再试");
      }
    };

    // 进入聊天页面
    const chat = () => {
      uni.navigateTo({
        url: `/pages/index/chat?username=${matched.value.username}`,
      });
    };

    return {
      matched,
      matchFriends,
      chat,
    };
  },
});
</script>
  