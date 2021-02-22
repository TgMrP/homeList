import axios from '../Plugins/axios';
import router from '../Router';

export default {
  namespaced: true,
  state: () => ({
    board: {},
    showAll: false,
  }),

  getters: {
    board: state => {
      const { board } = state;
      if (!state.showAll) {
        if (board.items && board.items.length > 0) {
          board.items.forEach(i => {
            i.items = i.items.filter(x => x.done === 0);
          });
        }
      }
      return board;
    },
    items: state => state.board.items,
    showAll: state => state.showAll,
  },

  mutations: {
    SHOW_ALL(state) {
      state.showAll = !state.showAll;
    },
    SET_BOARD(state, board) {
      state.board = board;
    },
    ADD_ITEM(state, item) {
      if (item.item_id) {
        state.board.items = state.board.items.map(i => {
          if (i.id === parseInt(item.item_id, 10)) {
            i.items = [...i.items, item];
          }

          return i;
        });
      } else {
        state.board.items.push(item);
      }
    },
    MARK_DONE(state, { itemId, id }) {
      state.board.items = state.board.items.map(i => {
        if (i.id === parseInt(itemId, 10)) {
          i.items = i.items.map(x => {
            if (x.id === parseInt(id, 10)) {
              x.done = !x.done;
            }

            return x;
          });
        }

        return i;
      });
    },
  },

  actions: {
    showAll({ commit, dispatch }) {
      commit('SHOW_ALL');
      dispatch('fetchBoard');
    },
    async fetchBoard({ commit }) {
      const { id } = router.currentRoute.params;
      const { data } = await axios.get(`/api/board/${id}`);
      commit('SET_BOARD', data);
    },
    async clearBoard({ commit }) {
      commit('SET_BOARD', []);
    },
    async addItem({ state, dispatch, commit }, vars) {
      if (!vars.title) return;

      const { data } = await axios.post(
        `/api/board/${state.board.id}/items/add`,
        {
          title: vars.title,
          item_id: vars.item_id ? vars.item_id : null,
        }
      );
      data.items = [];
      commit('ADD_ITEM', data);
      dispatch('Boards/update', data.board, { root: true });
    },
    async markDone({ commit, dispatch }, { itemId, id }) {
      const { data } = await axios.post(`/api/items/${id}/mark`);
      commit('MARK_DONE', { itemId, id });
      dispatch('Boards/update', data.board, { root: true });
    },
  },
};
