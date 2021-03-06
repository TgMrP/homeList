import VueRouter from 'vue-router';

const router = new VueRouter({
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
      path: '/notFound',
      component: () => import('../Pages/404.vue'),
      name: '404',
    },
    {
      path: '*',
      component: () => import('../Pages/404.vue'),
    },
  ],
});

export default router;
