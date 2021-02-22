import axios from '../Plugins/axios';

export default {
  namespaced: true,
  state: () => ({
    user: null,
  }),

  getters: {
    user: state => state.user,
    authenticated: state => state.user !== null,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },

  actions: {
    async Login({ dispatch, commit }, user) {
      await axios.get('/sanctum/csrf-cookie');

      const { data } = await axios.post('/api/login', user);
      commit('SET_USER', data);
      await dispatch('fetchData', null, { root: true });
    },
    async fetchUser({ commit }) {
      const { data } = await axios.get('/api/user');
      commit('SET_USER', data);
    },
  },
};
