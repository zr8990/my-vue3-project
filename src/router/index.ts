
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/index.vue').catch(() => {
      // 组件加载失败处理
    }),
    meta: { title: '首页',
      KeepAlive:true
     }
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login/index.vue').catch(() => {
      // 组件加载失败处理
    }),
    meta: { title: '登录',
      KeepAlive:false
     }
  },
  {
    path:'/',
    redirect: '/login'
  },
    {
    path: '/communityOne',
    name: 'CommunityOne',
    component: () => import('../views/community/index.vue'),
    meta: { title: '社区1',
      KeepAlive:true
     }
  },
  //   {
  //   path: '/Commubnitytwo',
  //   name: 'CommubnityTwo',
  //   component: () => import('../views/home/index.vue').catch(() => {
  //   }),
  //   meta: { title: '社区2',
  //     KeepAlive:true
  //    }
  // },
  // {
  //   path: '/my',
  //   name: 'My',
  //   component: () => import('../views/my/index.vue').catch(() => {
  //   }),
  //   meta: { title: '我的',
  //     KeepAlive:true
  //    }
  // },
   {
    path: '/dogDetail',
    name: 'DogDetail',
    component: () => import('../views/home/dogDetail/index.vue').catch(() => {
      // 组件加载失败处理
    }),
    meta: { title: '首页',
      KeepAlive:true
     }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router