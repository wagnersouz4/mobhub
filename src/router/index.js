import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'
import SingUp from '@/components/SingUp'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/singUp',
    name: 'SingUp',
    component: SingUp
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage,
    meta: {
      requiresAuth: true
    }
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
