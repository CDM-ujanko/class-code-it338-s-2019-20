import Vue from 'vue'
import App from './App.vue'

import './../node_modules/bulma/css/bulma.css';

import router from './router/index';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
