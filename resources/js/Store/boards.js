import axios from '../Plugins/axios';

export default {
  namespaced: true,
  state: () => ({
    boards: [],
  }),

  getters: {
    boards: state => state.boards,
  },

  mutations: {
    SET_BOARDS(state, boards) {
      state.boards = boards;
    },
    ADD_BOARD(state, board) {
      state.boards.push(board);
    },
  },

  actions: {
    async fetchBoards({ commit }) {
      const { data } = await axios.get('/api/boards');
      commit('SET_BOARDS', data);
    },
    async addBoard({ commit }, title) {
      const { data } = await axios.post('/api/board/add', {
        title,
      });
      commit('ADD_BOARD', data);
    },
  },
};
