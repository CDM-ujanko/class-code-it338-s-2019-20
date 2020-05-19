<template>
  <div id="app" class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <span v-if="loggedUser">Hi {{ loggedUser }}</span>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState} from 'vuex';

export default {
  name: 'App',
  computed: mapState({
    loggedUser: state => state.loggedUser
  }),

  mounted() {
    setTimeout(() => {
      console.log('Changing state!');
      // this.$store.state.loggedUser = 'Bla!';
      this.$store.commit('login', {name : 'User 2' , last: 'bla'});
    }, 3000);
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

  .router-link-exact-active {
    color: #3273dc;
    cursor: default;
  }
}
</style>
