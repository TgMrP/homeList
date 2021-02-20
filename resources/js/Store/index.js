import Vue from "vue";
import Vuex from "vuex";

import Auth from "./auth";
import Boards from "./boards";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        Auth,
        Boards
    }
});
