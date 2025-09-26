

<template>
 <router-view v-slot="{ Component, route }">
    <keep-alive :include="cachedComponents">
      <component 
        :is="Component" 
        :key="route.fullPath"
      />
    </keep-alive>
  </router-view>
</template>
<script lang="ts" setup name="App">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const cachedComponents = ref<string[]>([]);

// 根据路由元信息动态控制缓存组件列表
watch(
  () => route.meta,
  (meta) => {
    if (meta?.keepAlive && route.name) {
      const componentName = route.name as string;
      if (!cachedComponents.value.includes(componentName)) {
        cachedComponents.value.push(componentName);
      }
    }
  },
  { immediate: true }
);

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
