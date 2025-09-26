

<template>
<!-- <keep-alive :include="cachedViews">
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  <Login></Login>
</template>
<script lang="ts" setup>
import Login from './views/login/index.vue'

// export default {
//   computed: {
//     cachedViews() {
//       return this.$route.matched // 获取当前路由的所有匹配记录
//         .filter(record => record.meta && record.meta.keepAlive) // 过滤出需要缓存的记录
//         .map(record => typeof record.components.default === 'string' ? record.components.default : record.components.default.name) // 获取组件名或默认导出名的字符串表示
//         .join(','); // 转换为逗号分隔的字符串，供 keep-alive 的 include 使用
//     }
//   }
// }
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
