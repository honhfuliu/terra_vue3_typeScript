import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/layout',
    name: 'Layout1',
    component: () => import('@/components/layout/AdminLayout.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
