<template>
  <div class="home">
    <Navbar :title="'首页'"></Navbar>
    欢迎你查看首页
    <button @click="getDogImg()">添加一只小狗</button>
    <img :src="dog" alt="" class="dog-img" v-for="(dog,index) in dogList" :key="index">

    <button @click="getDogMore">查看更多</button>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/navbar.vue'
// import Navbar from '../../components/navbar.vue'
import useDog from '../../hooks/useDog'
const { getDogImg, dogList } = useDog()

import { useRouter } from 'vue-router'
const router = useRouter()

function getDogMore() {
  router.push({
    path:'/dogDetail'
  })
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 64px;
}
.dog-img{
  width: 100%;
}
</style>