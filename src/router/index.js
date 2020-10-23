import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/life',
    name: 'life',
    component: () => import(/* webpackChunkName: "about" */ '../views/life.vue'),
  },
  {
    path: '/tech',
    name: 'tech',
    component: () => import(/* webpackChunkName: "about" */ '../views/tech.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
