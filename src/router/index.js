import { createRouter, createWebHashHistory } from 'vue-router'
import VistaPrincipal from '../views/VistaPrincipal'
const routes = [
  { 
    path:'/',
    name: 'vista',
    component: VistaPrincipal
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
