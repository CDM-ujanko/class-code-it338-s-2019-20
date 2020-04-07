Vue.component('my-component', {
  template:  `
    <div class="my-4" :class="computedClasses" >
      <h2>{{ reversedTitle }}</h2>
      {{ message }}
      The count: {{ count }}
      <button @click="addOne">Add one</button>

    </div>
  `,

  // props: ['title'],
  props: {
    title: {
      type: String,
      default: 'No tits Value was provided!'
    }
  },
  data: function () {
    return {
      message: 'hello from the COMPONENT!!',
      count: 0,
      // Props and data live under the same (this) scope
      // title: '',
      computedClassesWatched: '',
    }
  },

  created: function () {
    console.log(this);
    // Never mutate props!
    // this.title = 'bla bla!';
  },

  watch: {
    count: function (newVal, oldVal) {
      console.log('The old value is ', oldVal, 'new value ', newVal);

      if (newVal === 4) {
        console.log('I am at 4');
      }

      // Better to do it as computed property!
      // if (this.count >= 5) {
      //   this.computedClassesWatched = 'winner';
      // } else {
      //   this.computedClassesWatched = '';
      // }
    }
  },

  computed: {
    computedClasses: function () {
      if (this.count >= 5) {
        return 'winner';
      }

      return '';
    },

    reversedTitle: function () {
      return this.title.split('').reverse().join('');
    }
  },

  methods: {
    addOne: function () {
      this.count ++;
    }
  }
});

var app = new Vue({
  el: '#container',
  data: {
    message: 'Hello world!',
    componentOneTile: 'Component 1',
    componentTwoTile: 'Component 2',
  },

  methods: {}
});
