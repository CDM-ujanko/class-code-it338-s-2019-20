import Vue from 'vue'
import App from './App.vue'

import './../node_modules/bulma/css/bulma.css';

import router from './router/index';
import store from './store/store';

Vue.config.productionTip = false;

// Change the api URL based on dev or production mode:
Vue.prototype.$apiUrl = process.env.NODE_ENV === 'production' ?
    'http://161.35.114.114:3000' : 'http://localhost:3000';

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
