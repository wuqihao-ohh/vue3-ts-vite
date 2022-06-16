<!--
* @Description:首页框架布局
-->
<template>
    <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <LoginBar :collapsed="collapsed" />
            <MenuBar />
        </a-layout-sider>
        <a-layout>
            <a-layout-header class="flex justify-between items-center" style="background: #fff">
                <HeaderBar @fatherEmit="collEmit" />
            </a-layout-header>
            <a-layout-content :style="{ margin: '16px', padding: '10px', background: '#fff', minHeight: '280px' }">
                <router-view/>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                <FooterBar/>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script setup lang='ts'>
// 组件
import LoginBar from "./components/LogoBar/index.vue"
import MenuBar from "./components/MenuBar/index.vue"
import HeaderBar from "./components/Header/index.vue"
import FooterBar from "./components/Footer/index.vue"
import { ref } from "vue"
const collapsed = ref<boolean>(false)

const collEmit = (res: boolean) => {
    console.log(res);
    collapsed.value = res
}
</script>
<style lang='scss' scoped>
</style>

<style  lang='scss'>
.ant-layout-header {
    padding: 0 16px;
}
.ant-layout-content{
    overflow-y: scroll;
}
.ant-layout-footer{
    padding: 0 0 16px 0;
    color: #333;
    font-size: 12px;
}
.ant-layout {
    height: 100%;
}
</style>