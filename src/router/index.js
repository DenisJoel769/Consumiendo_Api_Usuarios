import { createRouter, createWebHashHistory } from 'vue-router'
import ContenidoVue from '../views/Contenido.vue'
import ProductosPage from '../views/ProductosPage.vue'
import CategoriasPage from '@/views/Categorias/CategoriasPage.vue'
//import ProductosPorCategoriaVue from '../views/Productos/ProductosPorCategoria.vue'

const routes = [
  {
    path: '/',
    name: 'Contenido',
    component: ContenidoVue,
    children: [
      {
        path: '/productos',
        name: 'productos',
        component: ProductosPage
      },  
      {
        path: '/categoria',
        component: CategoriasPage,
        children: [
          // {
            
          //   path: '/:category',
          //   name: 'categorias',
          //   component: ProductosPorCategoriaVue
          // }
        ]
      }  
      // {
      //   path: '/categorias',
   
      //   component: CategoriasPage,
      //   children: [
      //     {
      //       path: '/:category',
      //       name: 'Categorias',
      //       component: ProductosPorCategoriaVue
      //     }
      //   ]
      // }
    ]
  },


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
