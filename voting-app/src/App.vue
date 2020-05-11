<template>
  <div id="app">
    <h1 class="title is-1 has-text-centered">Best Fictional Character</h1>
    <template v-if="characters.length">
      <character v-for="char in characters" :char="char" @update="update" :key="char.id"/>
    </template>
    <p v-else>It seems we don't have any characters, you might want to nominate some!</p>
    <div class="container box">
      <h2 class="subtitle is-2">Nominate a character</h2>
      <edit-char :char="emptyChar"></edit-char>
    </div>
  </div>
</template>

<script>
import EditChar from "./components/EditChar";
const axios = require('axios');

import Character from './components/Character.vue'

export default {
  name: 'App',
  components: {
    EditChar,
    Character
  },

  data: function () {
    return {
      characters: [],
      emptyChar: {
        name: '',
        description : '',
        image: ''
      }
    }
  },

  created() {
    console.log('Created!');
    console.log(this);
    //  Note the problems with JS scope and this
    // axios.get('http://localhost:3000/api/characters')
    //     .then(function (response) {
    //       console.log(this);
    //       // handle success
    //       console.log(response);
    //       this.characters = response.data.characters;
    //     }.bind(this));

    axios.get('http://localhost:3000/api/characters')
        .then((res) => {
          console.log(this);
          // handle success
          console.log(res);
          this.characters = res.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          console.log('I am always here!')
        });
  },

  methods: {
    update(char) {
      console.warn('Parent got the char!', char);
      this.characters[char.id].name = char.name;
      this.characters[char.id].power = char.power;

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
