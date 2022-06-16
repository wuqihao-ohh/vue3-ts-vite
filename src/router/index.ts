import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        component: () => import("@/layout/index.vue"),
        children: [
            // 页面主页
            {
                path: "/home",
                name: "home",
                meta: {
                    title: "页面主页",
                },
                component: () => import("@/views/Home.vue"),
            },
            // tailwind测试
            {
                path: "/tailwind",
                name: "tailwind",
                meta: {
                    title: "tailwind测试",
                },
                component: () => import("@/views/TailWind.vue"),
            },
             // echarts测试
             {
                path: "/echarts",
                name: "echarts",
                meta: {
                    title: "echarts测试",
                },
                component: () => import("@/views/Echarts.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        meta: {
            title: "登录",
        },
        component: () => import("@/views/Login.vue"),
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


export default router