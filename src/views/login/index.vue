<template>
  <div>
    <h1>{{ welMsg }}</h1>
    <button @click="submitLogin">
      登录
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const welMsg = ref('欢迎登录')
const submitLogin = () => {
  console.log('登录')
  // 条件符合，登录成功
  // 身份证后四位验证码
  // let codeArr = [6369,6342,6352]
 
    // 跳转页面
    router.push({
      path: '/home',
      query: { code: '6369' }
    })
}
</script>

<style scoped>
</style>