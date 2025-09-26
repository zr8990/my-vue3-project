import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'//引入路由配置文件


// 1. 引入你需要的组件
// import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)
app.use(router).mount('#app')
