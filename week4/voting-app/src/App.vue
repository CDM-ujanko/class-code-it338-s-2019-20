<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <character name="bob" />
    <button> Outside button!</button>
  </div>
</template>

<script>
import Character from './components/Character.vue'

export default {
  name: 'App',
  components: {
    Character
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
