<!-- 子组件 -->
<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore()
const add = () => {
  store.commit("COUNTADD")
}
</script>

<template>
  <div>store 值{{ store.state.content }}</div>
  <a-button @click="add" type="primary" ghost>Primary</a-button>

</template>

<style scoped>
</style>
