<!-- 子组件 -->
<script setup lang="ts">
import { ref } from 'vue'
// 1.普通声明（基础写法）
// defineProps({
//   msg:{
//     type:String,
//     default:'你好啊！',
//     required:true
//   },
// })
// // 2.TS写法(这样就没法设置默认值)
// defineProps<{
//   msg:String,
//   arr?:Array<Number>
// }>()

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
