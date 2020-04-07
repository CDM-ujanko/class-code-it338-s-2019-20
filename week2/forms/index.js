var app = new Vue({
  el: '#container',
  data: {
    message: 'Hello world!',
    isChecked: false,
    multipleChecked: [],
    selected: 'School',
    options: ['Cow', 'House', 'Car', 'School']
  },

  methods: {
    checkIndex: function (item) {
      return this.multipleChecked.indexOf(item) !== -1;
    }
  }
});
