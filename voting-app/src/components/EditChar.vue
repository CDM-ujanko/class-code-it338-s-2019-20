<template>
  <form  v-on:submit.prevent="send">
    <div class="field">
      <label class="label" for="name">Name</label>
      <div class="control">
        <input class="input" type="text" id="name" v-model="char.name"/>
      </div>
    </div>

    <div class="field">
      <label class="label" for="power">Power</label>
      <div class="control">
        <input class="input" type="text" id="power" v-model="char.power"/>
      </div>
    </div>
    <button type="submit">Update</button>
  </form>
</template>

<script>
  const axios = require('axios');

  export default {
    name: "EditChar",
    props: {
      id: Number,
      name: String,
      power: String
    },

    data: () => {
      return {
        char: {
          id: 0,
          name: '',
          power: ''
        }
      }
    },

  mounted() {
    console.log(this);
    this.char.id = this.id;
    this.char.name = this.name;
    this.char.power = this.power;
  },

    methods: {
      send() {
        axios.put(`http://localhost:3000/api/character/${this.id}`, this.char)
            .then((res) => {
              console.warn('We got a response!', res);
              this.$emit('update', this.char)
            })
            .catch((error) => {
              console.error(error);
            })
      }
    }
  }

</script>

<style scoped>

</style>