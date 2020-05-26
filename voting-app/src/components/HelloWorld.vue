<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Count: {{ count }}
    <p>outside!</p>
    <div class="my-div">
      <p>My text</p>
      <span>My span!</span>
      <button @click="add">Add one</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      count: 0
    };
  },

  methods: {
    add() {
      this.count++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  body {
    background: red !important;
  }

  $text-color: red;

  .my-div {
    p {
      color: $text-color;
    }

    span {
      color: $text-color;
    }
  }

  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
