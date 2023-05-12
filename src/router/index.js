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
  routes
})

export default router
