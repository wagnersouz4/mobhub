<template>
  <section class="hero is-fullheight has-text-centered">
    <Logo/>

    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-2">
          <form>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="text" placeholder="CPF" v-model="id">
                <span class="icon is-small is-left">
                  <i class="fa fa-id-card"></i>
                </span>
              </div>
            </div>
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
                <a class="button is-link is-outlined is-medium" @click="register">Cadastrar</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="hero-foot has-padding-bottom-10">
      <router-link to="/login" class="has-text-primary">Voltar</router-link>
    </div>

  </section>
</template>

<script>

import Logo from './Logo.vue'

import { mapActions } from 'vuex'

export default {
  name: 'signUp',

  data () {
    return {
      email: '',
      password: '',
      id: '',
      error: {
        message: ''
      }
    }
  },

  methods: {
    ...mapActions([
      'createUser'
    ]),
    register () {
      const {id, email, password} = this
      if (id && email && password) {
        const info = { id, email, password }
        this.createUser(info)
      }
    }

  },

  components: {
    Logo
  }
}
</script>