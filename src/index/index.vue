<template>
    <view>
      <!-- 异性好友匹配 -->
      <match-friends></match-friends>
      <!-- 顶部导航栏 -->
      <navigation-bar></navigation-bar>
      <!-- 底部菜单栏 -->
      <tab-bar></tab-bar>
    </view>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import MatchFriends from './components/MatchFriends.vue'
  import NavigationBar from '@/components/NavigationBar.vue'
  import TabBar from '@/components/TabBar.vue'
  
  export default defineComponent({
    components: {
      MatchFriends,
      NavigationBar,
      TabBar
    }
  })
  </script>