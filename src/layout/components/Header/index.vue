<!--
* @Description:顶部组件
-->
<template>
    <div>
        <menu-unfold-outlined v-if="collapsed" @click="changeCollapsed" />
        <menu-fold-outlined v-else @click="changeCollapsed" />
    </div>
    <div>
        <img class="h-40" src="@/assets/images/user.png" alt="">
    </div>
</template>

<script setup lang='ts'>
import { ref } from "vue"
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
const collapsed = ref<boolean>(false)
// 变化收缩框架(折叠状态)
const emit = defineEmits<{
    (e: 'fatherEmit', data: boolean): void
}>()
const changeCollapsed = () => {
    collapsed.value = !collapsed.value
    emit("fatherEmit", collapsed.value)
}

</script>

<style lang='scss' scoped>
</style>