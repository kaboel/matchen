import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./views/Dashboard'),
      meta: {
        title: 'Matchen! A Matching Game'
      },
      beforeEnter: async (to, from, next) => {
        try {
          let player = await store.getters.getPlayerName
          if (!player) await next()
          else await next('/main')
        } catch (e) {
          await next('/main')
        }
      }
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('./views/Main'),
      beforeEnter: async (to, from, next) => {
        try {
          let player = await store.getters.getPlayerName
          if (player) await next()
          else await next('/')
        } catch (e) {
          await next('/')
        }
      }
    }
  ]
})

export default router