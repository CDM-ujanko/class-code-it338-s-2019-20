<template>
  <div>
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
  const axios = require('axios');

  import EditChar from '../components/EditChar';
  import Character from '../components/Character.vue'

  export default {
    name: "Home",
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

      setTimeout(() => {
        console.log('Changing state!');
        // this.$store.state.loggedUser = 'Bla!';
        this.$store.commit('login', 'User 2' , 'Some');
      }, 6000);

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

<style scoped>

</style>