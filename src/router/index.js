import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        meta: {
            name: "",
            requiresAuth: true
        },
        name: "Layout",
        component: () => import("../components/Layout"),
        children: [
            {
                path: "/",
                meta: {
                    name: "",
                    requiresAuth: true
                },
                name: "",
                component: () => import("../components/HomePageIndex")
            },
            {
                path: "/login",
                meta: {
                    name: "",
                    requiresAuth: true
                },
                name: "",
                component: () => import("../components/Login")
            },
            {
                path: "/recuperar",
                meta: {
                    name: "",
                    requiresAuth: true
                },
                name: "",
                component: () => import("../components/RecuperarSenha")
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router