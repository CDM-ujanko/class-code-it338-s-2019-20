<template>
  <div class="container box">
    <h1 class="title is-1 has-text-centered">Tell us what you Think!</h1>

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" v-model="name" :class="{'is-danger': !isNameValid}"
            placeholder="Your Name">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input v-model="email" class="input" :class="{'is-danger': !isEmailValid}" type="email"
            placeholder="first.last@domain.com"
            value="hello@">
        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
      </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
      </span>
      </div>
      <p v-if="!isEmailValid" class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <div class="select">
          <select v-model="subject">
            <option value="">Select dropdown</option>
            <option v-for="sbj in subjects" :key="sbj" :value="sbj">{{sbj}}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea v-model="message" class="textarea" :class="{'is-danger': !isMessageValid}"
            placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" :class="{'is-disabled': !canSubmit}" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  const axios = require('axios');

  export default {
    name: "Contact",
    data() {
      return {
        name: '',
        email: '',
        subject: 'General Info',
        message: '',
        subjects: ['General Info', 'I want to help', 'Other']
      }
    },

    computed: {
      isNameValid: function () {
        return this.name.length > 0;

      },

      isEmailValid: function () {
        return this.email.length > 0;
      },

      isMessageValid: function () {
        return this.message.length > 0;
      },

      canSubmit: function () {
        return this.isNameValid && this.isEmailValid && this.isMessageValid;
      }
    },

    methods: {
      submit: function () {
        if (!this.canSubmit) {
          return;
        }

        let data = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        };

        console.log('I am sending ', data);

        axios.post(`http://localhost:3000/api/submit-form/`, data)
            .then((res) => {
              console.log('All is well!', res);
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