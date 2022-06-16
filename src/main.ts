import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import {store} from "./store"
// Ui组件
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 引入tailwide.css
import "@/assets/styles/tailwind.css"
// 引入iconfont.css文件
import "@/assets/styles/iconfont.css"

createApp(App).use(router).use(store).use(Antd).mount('#app')
