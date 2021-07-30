import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Visualize from '../views/Visualize.vue'
import Agregar from '../views/Agregar.vue'
import Editar from '../views/Editar.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/visualize',
    name: 'Visualize',
    component: Visualize
  },
  {
    path: '/add',
    name: 'Add',
    component: Agregar
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Editar
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
