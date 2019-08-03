const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    auth: null,
    employees: []
  }
}
export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  },
  setEmployees(state, employees) {
    state.employees = employees
  }
}
export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  }
}
