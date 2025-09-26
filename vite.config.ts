import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
// 配合types/node否则引入node的模块会报错
// https://vite.dev/config/
console.log('fileURLToPath-----',import.meta.url)
export default defineConfig({
  plugins: [vue()],
  server:{
    // 使用ip能访问 
    host:'0.0.0.0'//true
  },
  base:'/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      
    }
  }
})
