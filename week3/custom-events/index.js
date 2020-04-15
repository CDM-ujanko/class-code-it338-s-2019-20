Vue.component('my-component', {
  template: `
    <div class="my-4 container">
      <div class="container">
        Hello from my component!
        <br>
        The message PROP is: {{message}}
        </div>
      <input v-model="localMessage" @input="inputEventHandler">
    </div>
  `,
  props: {
    message: String,
  },

  data: function () {
    return {
      localMessage: 'Some other message'
    }
  },

  created() {
    console.log('created');
    // NEVER DO THI!
    // this.message = 'Some other message'
  },

  methods: {
    inputEventHandler(event) {
      console.log(event);
      this.$emit('message-change', this.localMessage);
    }
  }
});

Vue.component('model-example', {
  template: `
    <div class="my-4 container">
      Model example!
      <input v-bind:value="value" @input="inputEventHandler">
    </div>
  `,
  props: {
    value: String,
  },

  data: function () {
    return {}
  },

  methods: {
    inputEventHandler(event) {
      console.log(event);
      this.$emit('input', event.target.value);
    }
  }
});



var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello world!',
    modelValue: 'someText'
  },

  methods: {
    messageChangeHandler(message) {
      console.log('changed!', message);
      this.message = message;
    }
  }
});
