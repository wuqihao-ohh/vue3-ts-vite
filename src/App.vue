<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import DefineProps from '@/components/DefineProps.vue'
import DefineEmits from '@/components/DefineEmits.vue'
import SlotsAttrs from '@/components/SlotsAttrs.vue'
import DefineExpose from '@/components/DefineExpose.vue'
import {onMounted, ref} from "vue" 
const fatherEmit = (res: string) => {
  console.log(res);
}


// 获取子组件的方法及属性
const son = ref(null)
onMounted(()=>{
  console.log(son.value);
  
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <DefineProps msg="组件相互传值" />
  <br>
  <DefineEmits @fatherEmit="fatherEmit" />
  <br>
  <SlotsAttrs msg="hello" age="898" class="chuang">
    <template #header>
      <h1>sgdj </h1>
    </template>
  </SlotsAttrs>
  <br>
  <DefineExpose ref="son" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
