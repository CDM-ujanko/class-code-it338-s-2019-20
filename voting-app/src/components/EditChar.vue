<template>
  <form  v-on:submit.prevent="send">
    <div class="field">
      <label class="label" for="name">Name</label>
      <div class="control">
        <input class="input" type="text" id="name" v-model="fields.name"/>
      </div>
      <p class="help">The name of the character.</p>
    </div>

    <div class="field">
      <label class="label" for="image">Image</label>
      <div class="control">
        <input class="input" type="text" id="image" v-model="fields.image"/>
      </div>
      <p class="help">Link for the char profile picture.</p>
    </div>

    <div class="field">
      <label class="label" for="power">Description</label>
      <div class="control">
        <textarea class="textarea" id="power" v-model="fields.description"></textarea>
      </div>
      <p>A little something about him/her</p>
    </div>
    <button type="submit" class="button is-primary">{{ isNew ? 'Create' : 'Update'}}</button>
  </form>
</template>

<script>
  const axios = require('axios');

  export default {
    name: "EditChar",
    props: {
      char: Object
    },

    data: function () {
      console.log(this.char);
      return {
        fields: Object.assign({}, this.char)
      }
    },

    computed: {
      isNew: function () {
        return !!this.char.id
      }
    },

    methods: {
      send() {
        if (this.isNew) {
          axios.put(`${this.$apiUrl}/api/character/${this.this.fields.id}`, this.fields)
              .then((res) => {
                console.warn('We got a response!', this.fields);
                this.$emit('update', res)

              })
              .catch((error) => {
                console.error(error);
              })
        } else {
          axios.post(`http://192.241.185.37:3000/api/characters/`, this.fields)
              .then((res) => {
                console.warn('We got a response!', res);
                this.fields.id = res.insertId;
                this.$store.commit('addCharacter', this.fields)
              })
              .catch((error) => {
                console.error(error);
              })
        }
      }
    }
  }

</script>

<style scoped>

</style>