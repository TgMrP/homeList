import Vue from 'vue';
import VueRouter from 'vue-router';

import axios from './Plugins/axios';

import router from './Router';
import store from './Store';
import App from './App.vue';

require('./bootstrap');

Vue.use(VueRouter);

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
