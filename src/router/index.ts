import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { nextTick } from 'vue/types/umd'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'Login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/*webpackChunkName: 'Login'*/ '../views/Login.vue'),
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import(/*webChunkName: 'Travel' */ '../views/Travel.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.token == null) {
        next({
          path: '/Login',
          query: {redirect: to.fullPath}
        })
        return false
      }
      next()
    }
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
