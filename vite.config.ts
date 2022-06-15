import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  // 新的用法
  server:{
    port:3002
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src"),
      "com":path.resolve(__dirname,"src/components")
    }
  },




  plugins: [vue()]
})
