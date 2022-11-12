/* eslint-disable no-unused-vars */
import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, detailes) {
      //
    },
    async register({ commit }, details) {
      //
    },
    async logout({ commit }) {
      //
    },
  },
});
