import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

const publicRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: { name: '登录', icon: '' }
  },
  {
    path: '/home',
    component: layout,
    children: [
      {
        path: '',
        component: () => import('@/views/home'),
        meta: { name: '首页', icon: '' },
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// const asyncRoutes = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: publicRoutes
})

export default router
