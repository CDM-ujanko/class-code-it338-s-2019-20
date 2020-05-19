import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Contact from '../views/Contact';
import Character from '../views/Character';
import Login from '../views/Login';

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
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

