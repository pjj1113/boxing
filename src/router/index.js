import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    hidden: true,
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/layout/index.vue'),
    children: [
      {
        path: '/person_room',
        name: 'person_room',
        meta: { title: '人房数据' },
        component: () => import(/* webpackChunkName: "about" */ '@/views/person_room/index.vue'),
      },
      {
        path: '/trip',
        name: 'trip',
        meta: { title: '出行数据' },
        component: () => import(/* webpackChunkName: "about" */ '@/views/trip/index.vue'),
      },
      {
        path: '/notOtherwise',
        name: 'notOtherwise',
        meta: { title: '未述先办' },
        component: () => import(/* webpackChunkName: "about" */ '@/views/notOtherwise/index.vue'),
      },
      {
        path: '/epidemic',
        name: 'epidemic',
        meta: { title: '疫情防控' },
        component: () => import(/* webpackChunkName: "about" */ '@/views/epidemic/index.vue'),
      },
      {
        path: '/community',
        name: 'community',
        meta: { title: '社区服务' },
        component: () => import(/* webpackChunkName: "about" */ '@/views/community/index.vue'),
      },
      {
        path: '/work',
        name: 'work',
        meta: { title: '工作动态' },
        component: () => import(/* webpackChunkName: "about" */ '@/views/work/index.vue'),
      },
      {
        path: '/epidemic',
        name: 'epidemic',
        meta: { title: '建党引领' },
        component: () => import(/* webpackChunkName: "about" */ '@/views/epidemic/index.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
