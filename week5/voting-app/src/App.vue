<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <character v-for="(char, i) in characters" :id="i" :name="char.name" :power="char.power" @update="update" :key="i"/>
    <button> Outside button!</button>
  </div>
</template>

<script>
const axios = require('axios');

import Character from './components/Character.vue'

export default {
  name: 'App',
  components: {
    Character
  },

  data: function () {
    return {
      characters: [],
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
          this.characters = res.data.characters;
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
