<!-- 子组件 -->
<script setup lang="ts">
// 1.普通声明
// const emit=defineEmits(["fatherEmit"])
// const sonClick=()=>{
//   emit("fatherEmit","我是子组件的数据")
// }

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
