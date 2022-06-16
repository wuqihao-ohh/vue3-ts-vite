import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import("@/components/DefineEmits.vue")
    },
    {
        path: '/login',
        component: () => import("@/components/SlotsAttrs.vue")
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


export default router