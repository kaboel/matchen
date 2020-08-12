import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./components/Dashboard'),
      meta: {
        title: 'Matchen! A Matching Game'
      }
    }
  ]
})

export default router