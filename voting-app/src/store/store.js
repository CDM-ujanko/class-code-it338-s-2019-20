import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const axios = require('axios');

export default new Vuex.Store({
  state: {
    loggedUser: '',
    characters: []
  },

  mutations: {
    login (state, username) {
      state.loggedUser = username;
    },

    logout (state) {
      state.loggedUser = '';
    },

    addCharacter (state, character) {
      console.log('the store got!', character);
      state.characters.push(character);
    }
  },

  getters: {
    orderedCharacters: state => {
      return state.characters.sort((a, b) => b.votes  - a.votes);
    },

    // passParams: state => id => {
    //   return state.characters.sort((a, b) => b.votes  - a.votes);
    // }
  },

  actions: {
    fetchCharacters (context) {
      axios.get('http://localhost:3000/api/characters')
          .then((res) => {
            console.log('response from api!', res);
            // this.characters = res.data;
            res.data.forEach((char) => {
              context.commit('addCharacter', char);
            });
          })
          .catch(function (error) {
            // handle error
            console.error(error);
          })
    }
  }
});