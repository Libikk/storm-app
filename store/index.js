const cookieparser = process.server ? require('cookieparser') : undefined
import { getCookie, authUser } from '../utils/auth';

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
    const cookie = req.headers.cookie;
    if (cookie) {
      const parsed = cookieparser.parse(cookie).auth
      const personData = authUser(parsed);
      commit('setAuth', personData)
    }
  }
}
