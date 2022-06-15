<!-- 子组件 -->
<script setup lang="ts">
import { ref } from 'vue';
const num = ref(0)
const msg = ref("hello")
const hindMsg = () => {
  console.log(877878);

}

defineExpose({
  num, msg, hindMsg
})
</script>

<template>
  <!-- 暴露子组件里面的属性及方法 -->
  <div>{{ msg }}</div>
</template>

<style scoped>
</style>
