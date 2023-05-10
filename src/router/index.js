import { createRouter, createWebHashHistory } from 'vue-router'
import BrandView from '../views/BrandView.vue'
import ContentView from '../views/ContentView.vue'
import DesignView from '../views/DesignView.vue'

const routes = [
  {
    path: '/',
    name: 'BrandView',
    component: BrandView
  },
  {
    path: '/content',
    name: 'ContentView',
    component: ContentView
  },
  {
    path: '/design',
    name: 'DesignView',
    component: DesignView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
