import { createRouter, createWebHistory } from 'vue-router'
import App from "../App.vue"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //route wahana
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/wahana',
      name: 'wahanaIndex',
      component: () => import('../views/wahana/wahanaIndex.vue')
    },
    {
      path: '/wahana/create',
      name: 'wahanaCreate',
      component: () => import('../views/wahana/wahanaCreate.vue')
    },
    {
      path: '/wahana/create/detail/:id',
      name: 'wahanaDetail',
      component: () => import('../views/wahana/GambarWahanaUpload.vue'),
      props:true
    },

    {
      path: '/wahana/:id/Update',
      name: 'wahanaUpdate',
      component: () => import('../views/wahana/wahanaUpdate.vue'),
      props: true,
    },

    //route tiket

    {
      path: '/tiket',
      name: 'tiketIndex',
      component:  () => import('../views/tiket/tiketIndex.vue')
    },
    {
      path: '/tiket/create',
      name: 'tiketCreate',
      component: () => import('../views/tiket/tiketCreate.vue')
    },
    {
      path: '/tiket/:id/Update',
      name: 'tiketUpdate',
      component: () => import('../views/tiket/tiketUpdate.vue'),
      props: true,
    },
    {
      path: '/tiket/create/detail/:id',
      name: 'tiketDetail',
      component: () => import('../views/tiket/GambarTiketUpload.vue'),
      props:true
    },

    {
      path: '/About',
      name: 'AboutPages',
      component: () => import('../views/components/Pages/About.vue'),
      props:true
    },
    {
      path: '/Contact',
      name: 'ContactPages',
      component: () => import('../views/components/Pages/Kontak.vue'),
      props:true
    },
    {
      path: '/WahanaPages',
      name: 'WahanaPages',
      component: () => import('../views/components/Pages/Wahanaku.vue'),
      props:true
    },
    {
      path: '/PromoPages',
      name: 'PromoPages',
      component: () => import('../views/components/Pages/Promoku.vue'),
      props:true
    },

  ]
})

export default router
