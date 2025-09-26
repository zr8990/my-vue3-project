<template>
  <div>
  <KeepAlive>
    <component :is="curComponent"></component>
  </KeepAlive>
  <Tabbar :active="active" @changeActive="getCurActive"></Tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref,shallowRef } from 'vue'
import Tabbar from '../components/tabbar.vue'
import Home from './home/index.vue'
import CommunityOne from './community/index.vue'
import My from './my/index.vue'
const active = ref(0)
let obj:any = {
  0:Home,
  1:CommunityOne,
  2:My
}
const curComponent = shallowRef(obj[active.value])
function getCurActive(val:any){
  console.log('val------',val)
  active.value = val
  curComponent.value = obj[val]
}
</script>

<style scoped>
</style>