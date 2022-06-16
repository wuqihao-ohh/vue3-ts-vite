# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

### 创建项目

```
yarn create vite
// 下面直接选用自己需要的东西
```


### 配置vite.config.ts
将后面引入的 "../../../../" 转换为 @ 代替

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
  // 新的用法
  server:{
    port:3002
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")，
      "com":path.resolve(__dirname,"src/components")
    }
  },
  plugins: [vue()]
})

```
### 父子传值的defineProps（传递数据）

```
<!-- 子组件 -->
<script setup lang="ts">
import { ref } from 'vue'
// 1.普通声明（基础写法）
defineProps({
  msg:{
    type:String,
    default:'你好啊！',
    required:true
  },
})
// 2.TS写法(这样就没法设置默认值)
defineProps<{
  msg:String,
  arr?:Array<Number>
}>()

// 3.用withDefaults包裹实现封装默认值
const props =withDefaults(
  defineProps<{
  msg:string,
  arr?:Array<number>
}>(),{
  msg:"hahahahha",
  arr:()=>[1,2]
}
)
const count = ref(0)
</script>

<template>
  <h1>{{ count }}</h1>
  <div>传过来的数据：{{msg}}</div>
</template>

<style scoped>
</style>





<!-- 父组件 -->
<template>
  <HelloWorld msg="发发发发发" />
</template>
```


### 父子相互调用方法 defineEmits

```
<!-- 子组件 -->
<script setup lang="ts">
// 1.普通声明
const emit=defineEmits(["fatherEmit"])
const sonClick=()=>{
  emit("fatherEmit","我是子组件的数据")
}

// 2.类型声明
const emit=defineEmits<{
   (e:'fatherEmit',data:string):void
}>()
const sonClick=()=>{
  emit("fatherEmit","我是子组件的数据")
}

</script>

<template>
  <button @click="sonClick">传递方法</button>
</template>

<style scoped>
</style>



<!--父组件-->
<template>
  <DefineEmits @fatherEmit="fatherEmit" />
</template>

```

### 父子组件插槽  useSlots  useAttrs


```
<!-- 子组件 -->
<script setup lang="ts">
// useSlots 获取父组件插槽里面的dom节点
import { onMounted, useSlots，useAttres } from 'vue';
const slots = useSlots()
const attrs= useAttres()
onMounted(() => {
  console.log(slots.header && slots.header());  //获取父组件对应header插槽里面的数据，存在就打印数据
  console.log(attrs);  // 不包括prop传递的参数
})
</script>

<template>
  <!-- 插槽 -->
  <p>子组件</p>
  <slot name="header">
    我是子组件
  </slot>
</template>

<style scoped>
</style>



<!-- 父组件 -->
<template>
 <SlotsAttrs>
    <template #header>
      <h1>sgdj </h1>
    </template>
  </SlotsAttrs>
</template>
```
# vueRouter的引入及使用
### 1.下载 vueRouter 插件

```
npm i vue-router@4   或    npm i vue-router@4(直接固定版本号)
```

### 2.router-->index.ts

```
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import("@/components/DefineEmits.vue")
    },
    {
        path: '/login',
        component: () => import("@/components/SlotsAttrs.vue")
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
```

### 3.main.ts引入使用 vuerouter

```
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
createApp(App).use(router).mount('#app')

```
### 4.使用方法与之前一样
