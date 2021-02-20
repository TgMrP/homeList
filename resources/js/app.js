import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './Router';
import store from './Store';
import App from './App.vue';

require('./bootstrap');

Vue.use(VueRouter);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
});
