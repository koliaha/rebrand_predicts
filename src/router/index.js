import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SmartView from '../views/SmartView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/smart',
    name: 'SmartView',
    component: SmartView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash === '#events') {
      return { el: to.hash }
    }
    return savedPosition || { top: 0 }
  }
})

export default router
