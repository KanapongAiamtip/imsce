import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import * as Page from '@/views'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Page.Home
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
