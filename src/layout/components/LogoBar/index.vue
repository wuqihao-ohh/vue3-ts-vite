<!--
* @Description:左边导航头部 logo
-->
<template>
    <div class="logobar flex flex-col items-center justify-center">
        <img class="w-30" src="@/assets/images/logo.png" alt="" />
        <h2 v-if="!collapsed">vue3-ts-vite</h2>
    </div>
</template>

<script setup lang='ts'>
defineProps<{
    collapsed: Boolean,
}>()
</script>

<style lang='scss' scoped>
.logobar {
    height: 50px;

    h2 {
        color: pink;
    }
}
</style>