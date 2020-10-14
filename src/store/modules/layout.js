import cookie from 'js-cookie'
const state = {
  active: cookie.get('toggle-active') || '0'
}

const mutations = {
  TOGGLE: (state, active) => {
    cookie.set('toggle-active', active)
    state.active = active
  }
}

export default {
  namespaced: true,
  state,
  mutations
}