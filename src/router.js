import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path: '/login',
        name: 'login',
        component: () => import("./login")
      }
    ],
    mode: 'history'
  });

  export default router