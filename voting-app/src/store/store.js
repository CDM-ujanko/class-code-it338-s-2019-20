import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: 'Uros'
  },
  mutations: {
    login (state, user) {
      state.loggedUser = user.name + user.last;
    }
  }
});