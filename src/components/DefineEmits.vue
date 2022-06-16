<!-- 子组件 -->

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router=useRouter()
const sonClick=()=>{
    router.push('/login')
}

</script>

<template>
  <button @click="sonClick">跳转</button>
  <div>
    跳转页面测试
  </div>
</template>

<style scoped>
</style>
