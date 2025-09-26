

<template>
  <div class="header">
    <NavBar
    :title="title"
    left-text="返回"
    right-text="按钮"
    left-arrow
    :placeholder="true"
    :safe-area-inset-top="true"
    @click-left="onClickLeft"
    @click-right="onClickRight"
    ></NavBar>
  </div>
</template>
<script setup lang="ts">

import { NavBar  } from 'vant';
import {useRouter} from 'vue-router'
const router = useRouter()
defineProps({
  title: String
})
function onClickLeft() {
  console.log('点击了返回按钮');
  router.back()
}

function onClickRight() {
  console.log('点击了按钮');
}


</script>
<style lang="less" scoped>
.header{
  position: fixed;
  top: 0;
  background-color: var(--van-white);
  width: 100vw;
  height: 64px;
  :deep(.van-nav-bar){
    bottom: -20px;
  }
}
</style>