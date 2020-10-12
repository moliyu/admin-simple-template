import { login, auth } from '@/api/user'
import { Message } from 'element-ui'
import cookie from 'js-cookie'
const state = {
  username: '',
  token: cookie.get('token') || ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    cookie.set('token', token)
    state.token = token
  }
}

const actions = {
  userLogin: async({ commit }, loginInfo) => {
    try {
      const { userName, password } = loginInfo
      const res = await login({ userName, password })
      commit('SET_TOKEN', res.access_token)
      return Promise.resolve(res)
    } catch (error) {
      // console.log('zzz', error)
      Message.error(error)
    }
  },
  auth: async({ commit }) => {
    try {
      const res = await auth()
      return Promise.resolve(res)
    } catch (error) {
      console.log('zzz', error)
    }
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  state
}