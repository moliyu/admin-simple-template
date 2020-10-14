import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

export const publicRoutes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true,
    meta: { name: '登录', icon: '' }
  },
  {
    path: '/home',
    component: layout,
    children: [
      {
        path: '',
        component: () => import('@/views/home'),
        meta: { name: '首页', icon: 'home' },
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: layout,
    meta: { name: '关于测试', icon: 'test'},
    children: [
      {
        path: '',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { name: '关于', icon: '' }
      },
      {
        path: 'test',
        name: 'test',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { name: '测试', icon: 'test' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: publicRoutes
})

export default router
