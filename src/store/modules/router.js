import { publicRoutes, asyncRoutes } from '@/router'
const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = publicRoutes.concat(routes)
  }
}

const actions = {
  getRoutes: ({ commit }, routerInfo) => {
    return new Promise((resolve) => {
      // const { roles, names } = routerInfo
      const { roles } = routerInfo
      let finalRoutes = []
      if (roles.includes('ROLE_Admin')) {
        finalRoutes = asyncRoutes
      }
      commit('SET_ROUTES', finalRoutes)
      resolve(finalRoutes)
    })
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  state
}