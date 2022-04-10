import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'

import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import Vendeurs from '../views/dashboard/Vendeurs.vue'
import RecetteMois from '../views/dashboard/RecetteMois.vue'
import RecetteJours from '../views/dashboard/RecetteJours.vue'
import RecetteVendeurs from '../views/dashboard/RecetteVendeurs.vue'

const routes = [
  {
    path:'/',
    name: 'Auth',
    component: Auth
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path:'',
        component: Vendeurs
      },
      {
        path:'vendeurs',
        name: 'Vendeurs',
        component: Vendeurs
      },
      {
        path: 'recetteVendeurs',
        name: 'RecetteVendeurs',
        component: RecetteVendeurs
      },
      {
        path: 'recetteJours',
        name: 'RecetteJours',
        component: RecetteJours
      },
      {
        path: 'recetteMois',
        name: 'RecetteMois',
        component: RecetteMois
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass : "active"
})

// Auth Guard
router.beforeEach(async (to) => {
  if (!store.getters.isAuthenticated && to.name !== 'Auth') {
    return { name: 'Auth' }
  }
})

export default router
