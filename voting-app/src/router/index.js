import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Contact from '../views/Contact';
import Character from '../views/Character';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }, {
    path: '/character/:id',
    name: 'Character',
    component: Character
  }, {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
