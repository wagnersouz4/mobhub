// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { firebaseApp } from './firebaseApp'
import store from './store'

Vue.config.productionTip = false

let app

router.beforeEach((to, from, next) => {
  const currentUser = firebaseApp.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('login')
  }

  if (!requiresAuth && currentUser) {
    next('homepage')
  }

  next()
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App }
    })
  }
})
