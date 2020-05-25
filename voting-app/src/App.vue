<template>
  <div id="app" class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <span v-if="loggedUser">Hi {{ fullName }}, <span @click="logout">logout</span></span>
          <router-link to="/login" v-else class="navbar-item">Login</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    myLocalComputed: function () {
      return 'Some string!'
    },
    ...mapGetters({
      fullName: 'fullName'
    }),
    ...mapState({
      loggedUser: state => state.loggedUser,
    })
  },

  methods: {
    logout() {
      this.$store.commit('logout');
    }
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
