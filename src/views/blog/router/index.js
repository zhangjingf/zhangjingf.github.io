import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/photo',
    name: 'photo',
    component: () => import(/* webpackChunkName: "about" */ '../pages/photo.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../pages/about.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
