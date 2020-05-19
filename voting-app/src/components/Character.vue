<template>
  <div class="box container section">
    <router-link :to="'/character/' + char.id" class="title is-2">{{ char.name }} </router-link>
    <div class="section">
      <figure class="image is-128x128">
        <img :src="char.image">
      </figure>
      <div v-html="char.description"></div>
      <!--<edit-char :id="id" :name="name" :power="power" @update="update"/>-->
      <br/>
      <h3 class="subtitle is-5">Has {{ char.votes }} {{ char.votes === 1 ? 'vote' : 'votes'}}</h3>
      <header>
        <slot name="header"></slot>
      </header>
    </div>
    <div class="buttons">
      <button class="button is-primary" @click="voteUp">Vote Up</button>
      <button class="button is-danger" @click="voteDown">Vote Down</button>
    </div>
  </div>
</template>

<script>
// import EditChar from './EditChar.vue';

export default {
  name: 'Character',
  components: {
    // EditChar
  },
  props: {
    char: Object
  },

  data: function () {
    return {
      votes: 0
    }
  },

  methods: {
    voteUp() {
      this.votes++;
      this.$emit('vote-up');
    },

    voteDown() {
      if (this.votes === 0) {
        return;
      }

      this.votes--;
      this.$emit('vote-down');
    },

    update(char) {
      console.warn('Emitting in Character');
      this.$emit('update', char);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  button {
    padding: 10px;
    color: #000;
  }

  figure.image {
    overflow: hidden;
  }
</style>
