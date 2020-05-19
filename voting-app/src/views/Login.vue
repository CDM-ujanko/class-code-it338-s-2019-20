<template>
  <div>
    <h1 class="title is-1 has-text-centered">Login</h1>

    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input class="input" type="text" v-model="name" placeholder="Your Name">
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" v-model="password">
      </div>
    </div>

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

      }
    }
  }
</script>

<style scoped>

</style>