import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './auth';
import Boards from './boards';
import Board from './board';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchData({ dispatch, getters }) {
      await dispatch('Auth/fetchUser');
      if (getters['Auth/authenticated']) {
        await dispatch('Boards/fetchBoards');
      }
    },
  },
  modules: {
    Auth,
    Boards,
    Board,
  },
});
