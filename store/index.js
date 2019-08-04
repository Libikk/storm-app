const cookieparser = process.server ? require('cookieparser') : undefined
import { getCookie, authUser } from '../utils/auth';

export const state = () => {
  return {
    auth: null,
    employees: [],
    departments: []
  }
}
export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  },
  setEmployees(state, employees) {
    state.employees = employees
  },
  setDepartments(state, departments) {
    state.departments = departments
  },
}
export const actions = {
  nuxtServerInit ({ dispatch }, { req }) {
    const cookie = req.headers.cookie;
    if (cookie) dispatch('personData',  req.headers.cookie);
  },
  personData({ commit }, cookie) {
    const parsed = cookieparser.parse(cookie).auth
    const personData = authUser(parsed);
    commit('setAuth', personData)
  },
  employee({ commit }, employee) {
    commit('setEmployees', employee)
  },
  departments({ commit }, departments) {
    commit('setDepartments', departments)
  },
}
