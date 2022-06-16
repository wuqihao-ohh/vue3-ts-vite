<!--
* @Description:左边导航
-->
<template>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
            <template #icon>
                <MailOutlined />
            </template>
            <template #title>Navigation One</template>
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script setup lang='ts'>
import { ref } from "vue"
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,MailOutlined
} from '@ant-design/icons-vue';
const selectedKeys = ref<string[]>(['1'])

</script>

<style lang='scss' scoped>
</style>