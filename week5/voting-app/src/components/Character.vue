<template>
  <div>
    <h3>{{ name }} with the power to: {{ power }} has {{ votes}} </h3>
    <edit-char :id="id" :name="name" :power="power" @update="update"/>
    <header>
      <slot name="header"></slot>
    </header>
    <button
        class="btn btn-primary"
        @click="voteUp">
      Vote Up
    </button>
    <button
        class="btn btn-danger"
        @click="voteDown">
      Vote Down
    </button>
  </div>
</template>

<script>
import EditChar from './EditChar.vue';

export default {
  name: 'Character',
  components: {
    EditChar
  },
  props: {
    id: Number,
    name: String,
    power: String
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
</style>
