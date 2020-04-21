<template>
  <div>
    <h3>{{ name }} has {{ votes}} </h3>
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
export default {
  name: 'Character',
  props: {
    name: String
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
