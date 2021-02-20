import VueRouter from 'vue-router';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../Pages/Home.vue'),
      name: 'home',
    },
    {
      path: '/login',
      component: () => import('../Pages/Login.vue'),
      name: 'login',
    },
    {
      path: '/user',
      component: () => import('../Pages/User.vue'),
      name: 'user',
    },
    {
      path: '/board/:id',
      component: () => import('../Pages/Board.vue'),
      name: 'board',
    },
    {
      path: '*',
      component: () => import('../Pages/404.vue'),
      name: '404',
    },
  ],
});
