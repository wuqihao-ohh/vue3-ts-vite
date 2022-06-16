import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  // 新的用法
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "com": path.resolve(__dirname, "src/components")
    }
  },
  // 配置器
  css: {
    // css预处理
    preprocessorOptions: {
      scss: {
        // 引入全局配置的 variadles.scss 文件
        additionalData: `@import'./src/assets/styles/variadles.scss';`
      }
    }
  },

  plugins: [vue()]
})
