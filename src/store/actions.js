import * as types from './mutation-types'

import { activateUser } from '@/api'
import firebase from 'firebase'
import router from '@/router'

export default {

  createUser ({commit}, info) {
    commit(types.CREATING_USER)
    const {id, email, password} = info
    return activateUser(id)
      .then(data => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(
            user => {
              router.replace('homepage')
            },
            error => {
              this.error = error
            }
          )
      })
      .catch(error => console.err(error))
  },

  signIn ({commit}, userPayload) {
    commit(types.SING_IN, userPayload)
  }
}
