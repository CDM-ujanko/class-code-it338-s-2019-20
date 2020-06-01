<template>
  <div class="container">
    <character :char="character"></character>
  </div>
</template>

<script>
  const axios = require('axios');
  import Character from '../components/Character.vue'

  export default {
    name: "CharacterView",
    components: {
      Character
    },

    data() {
      return {
        character: {}
      }
    },

    mounted() {
      axios.get(this.$apiUrl + '/api/character/' + this.$route.params.id)
          .then((res) => {
            console.log(res.data.length);
            if (res.data && res.data.length > 0) {
              this.character = res.data[0];
            } else  {
              console.error('Character not found',  this.$route.params.id);
            }
          })
    }
  }
</script>

<style scoped>

</style>