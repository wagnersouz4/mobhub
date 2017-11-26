import * as types from './mutation-types'

export const mutations = {
  [types.SING_IN] (state, userPayload) {
    state.user = userPayload
  },
  [types.CREATING_USER] (state, userPayload) {
    state.creatingUser = true
  }
}
