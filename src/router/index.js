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
            {
                path: "/cadastro/tiposervico",
                meta: {
                    name: "",
                    requiresAuth: true
                },
                name: "",
                component: () => import("../components/CadastroTipoServicos")
            },
            {
                path: "/cadastro/prestadorservico",
                meta: {
                    name: "",
                    requiresAuth: true
                },
                name: "",
                component: () => import("../components/CadastroPrestadorServico")
            },
            {
                path: "/cadastro/statussolicitacao",
                meta: {
                    name: "",
                    requiresAuth: true
                },
                name: "",
                component: () => import("../components/CadastroStatusSolicitacao")
            },
            {
                path: "/cadastro/cadastroservico",
                meta: {
                    name: "",
                    requiresAuth: true
                },
                name: "",
                component: () => import("../components/CadastroServicos")
            },
            {
                path: "/cadastro/cadastrovinculo",
                meta: {
                    name: "",
                    requiresAuth: true
                },
                name: "",
                component: () => import("../components/CadastroVinculo")
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router