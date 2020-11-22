import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { nextTick } from 'vue/types/umd'
import Home from '../views/Home.vue'
import Travel from '../views/Teste.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/login'
      },
      {
        path: 'Home',
        components:{
          default: Home,
          content: () => import(/*webpackChunkName: "Travel"*/ '@/views/Travel.vue')
        }
      },
      {
        path: 'myTravel',
        components: {
          default: Home,
          content: () => import(/*webpackChunkName: "Travel"*/ '@/views/MyTravel.vue')
        }
      }

      // {
      //   path: 'home',
      //   name: 'home',
      //   components: {
      //     default: Home,
      //     content: Travel
      //   },
      //   beforeEnter: (to, from, next) => {
      //     if (localStorage.token == null) {
      //       next({
      //         path: '/Login',
      //         query: {redirect: to.fullPath}
      //       })
      //       return false
      //     }
      //     next()
      //   }
      // },

    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/*webpackChunkName: 'Login'*/ '../views/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
