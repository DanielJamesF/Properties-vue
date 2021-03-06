import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Properties from '../views/Properties.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/properties',
    name: 'properties',
    component: Properties
  },
  {
    path: '/properties/:id',
    name: 'property',
    component: () => import('../views/Property.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
