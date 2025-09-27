<template>
  <div class="dog-detail">
  <Navbar :title="'狗狗信息'"></Navbar>
  <div  class="img-box">
    <div class="card" v-for="(item,index) in dogListMore.slice(0,9)" :key="index">
      <img :src="item" alt="" class="dog-img-small">
  </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '../../../components/navbar.vue'
import useDog from '@/hooks/useDog'
const {dogListMore,getDogMore}= useDog()
getDogMore()
</script>

<style lang="less" scoped>
.dog-detail {
  padding-top: 64px;
  .img-box {
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    // gap: 10px;
  }
  .card {
    width: 30%;
    padding: 0;
    // flex: 1 1 calc(33.33% - 20px); /* 自适应宽度 */
  }
  .dog-img-small {
    width: 100%;
    // height: 100%;
  }
}
</style>