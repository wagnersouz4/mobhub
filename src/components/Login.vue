<template>
  <section id="login" class="hero is-fullheight has-text-centered">

    <Logo/>
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-2">
          <form>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="email" placeholder="Email" v-model="email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="password" placeholder="Passwrod" v-model="password">
                <span class="icon is-small is-left">
                  <i class="fa fa-key"></i>
                </span>
              </div>
            </div>
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <a class="button is-primary is-outlined is-medium" @click="signIn">Sign In</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="hero-foot has-padding-bottom-10">
      <p class="has-text-grey"> Ainda não tem uma conta? </p>
      <p>
        <router-link to="/singUp" class="has-text-info">Criar</router-link>
      </p>
    </div>

  </section>
</template>

<script>

import { firebaseApp } from '../firebaseApp'
import Logo from './Logo.vue'

export default {

  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn () {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          console.log(error)
          this.error = error
        })
        .then(user => {
          this.user = user
        })
    }
  },
  components: {
    Logo
  }
}
</script>