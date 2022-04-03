import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'

import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import Vendeurs from '../views/dashboard/Vendeurs.vue'

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
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Auth Guard
router.beforeEach(async (to) => {
  if (!store.getters.isAuthenticated && to.name !== 'Auth') {
    return { name: 'Auth' }
  }
})

export default router
