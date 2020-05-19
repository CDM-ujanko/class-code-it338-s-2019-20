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
  import {mapGetters} from 'vuex';

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
        // characters: [],
        emptyChar: {
          name: '',
          description : '',
          image: ''
        }
      }
    },

    computed: mapGetters({
      characters: 'orderedCharacters'
    }),

    created() {
      this.$store.dispatch('fetchCharacters');
    },

    methods: {
      update(char) {
        this.characters[char.id].name = char.name;
        this.characters[char.id].power = char.power;
      }
    }
  }
</script>

<style scoped>

</style>