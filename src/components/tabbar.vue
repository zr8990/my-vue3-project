

<template>
  <div>
  <Tabbar :model-value="active" active-color="#ee0a24">
    <TabbarItem icon="home-o" v-for="(item) in tabbarList" :key="item.id" @click="changePage(item)">{{ item.text }}
     <!-- <template #icon="props">
      <img :src="props.active ? item.imgIcon.active : item.imgIcon.inactive" />
    </template> -->
    </TabbarItem>
  
  </Tabbar>
  </div>
</template>
<script setup lang="ts">
import { ref,defineEmits } from 'vue'
import { Tabbar,TabbarItem  } from 'vant';

 defineProps<{
    active: number;
}>()
const emits = defineEmits(['changeActive'])
const icon = {
      active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    };
const tabbarList = ref([
  { icon: 'home-o', text: '首页',id:0,path:'/home',imgIcon:icon},
  { icon: 'search', text: '社区1', id:1,path:'/communityOne',imgIcon:icon},
  // { icon: 'friends-o', text: '社区2', id:2,path:'/communityTwo',imgIcon:icon},
  { icon: 'setting-o', text: '我的', id:2,path:'/my',imgIcon:icon}
])

function changePage(item:any){
  console.log('item----',item)
  emits('changeActive',item.id)
  // router.push({
  //   path:item.path,
  // })
}
</script>
<style scoped>
</style>