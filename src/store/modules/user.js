import { login, auth, UserInfo } from '@/api/user'
import { Message } from 'element-ui'
import cookie from 'js-cookie'
const state = {
  userName: '',
  userId: '',
  realname: '',
  token: cookie.get('token') || '',
  roles: [],
  avatar: null
}

const mutations = {
  SET_TOKEN: (state, token) => {
    cookie.set('token', token)
    state.token = token
  },
  CLEAR_INFO: (state, token) => {
    cookie.remove('token', token)
    state.token = ''
    state.userName = ''
    state.userId = ''
    state.realName = ''
    state.roles = []
    state.avatar = null
  },
  SET_NAME: (state, userName) => {
    state.userName = userName
  },
  SET_USERID: (state, id) => {
    state.userId = id
  },
  SET_REALNAME: (state, realname) => {
    state.realname = realname
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_AVATAR: (state, url) => {
    state.avatar = url
  }
}

const actions = {
  userLogin: async({ commit }, loginInfo) => {
    try {
      const { userName, password } = loginInfo
      const res = await login({ userName, password })
      commit('SET_TOKEN', res.access_token)
      // const userInfo = await auth()
      // commit('SET_NAME', userInfo.user_name)
      // commit('SET_USERID', userInfo.userId)
      // commit('SET_REALNAME', userInfo.realName)
      // commit('SET_ROLES', userInfo.authorities)
      return Promise.resolve(res)
    } catch (error) {
      // console.log('zzz', error)
      Message.error(error)
    }
  },
  auth: async({ commit }) => {
    try {
      const res = await auth()
      commit('SET_NAME', res.user_name)
      commit('SET_USERID', res.userId)
      commit('SET_REALNAME', res.realName)
      commit('SET_ROLES', res.authorities)
      const info = await UserInfo(state.userId)
      commit('SET_AVATAR', info.iconUrl)
      return Promise.resolve(res)
    } catch (error) {
      console.log(error)
      // Message.error(error.toString())
    }
  },
  resetLogin: async({ commit }) => {
    try {
      await commit('CLEAR_INFO')
      return Promise.resolve()
    } catch (error) {
      Message.error(error.toString())
    }
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  state
}