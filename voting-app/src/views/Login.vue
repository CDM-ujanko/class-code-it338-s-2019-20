<template>
  <div>
    <h1 class="title is-1 has-text-centered">Login</h1>

    <form @submit.prevent="login">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" v-model="username" placeholder="Your Username">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" v-model="password">
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="login">Login</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    name: "Login",

    data: function () {
      return {
        username: '',
        password: ''
      }
    },

    created() {
    },

    methods: {
      login() {
        if(this.username && this.password) {
          this.$store.commit('login', this.username);
        }
      }
    }
  }
</script>

<style scoped>

</style>