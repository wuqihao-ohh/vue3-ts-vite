<!-- 子组件 -->
<script setup lang="ts">
import { onMounted, useSlots ,useAttrs} from 'vue';
const slots = useSlots()
const attrs=useAttrs()
onMounted(() => {
  console.log(slots.header && slots.header());  //获取父组件对应header插槽里面的数据，存在就打印数据
  console.log(attrs);  // 不包括prop传递的参数
  
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
