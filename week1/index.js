console.log('hello world!');

// $('#container');
// document.querySelector('#container').innerHTML = 'adpwakd';

var app = new Vue({
  el: '#container',
  data: {
    message: 'hello world!',
    isUppercase: false,
    students: [
      {
        name: 'Bob',
        dob: '02-04-1982',
        eyeColor: 'brown'
      }, {
        name: 'Sam',
        dob: '22-11-1967',
        eyeColor: 'blue'
      }
    ],
    placeholder: {
      name: '',
      dob: '',
      eyeColor: ''
    }
  },

  // beforeCreate: function () {
  //   console.log('beforeCreate');
  // },
  //
  // mounted: function () {
  //   console.log('mounted');
  // },
  //
  // beforeUpdate: function () {
  //   console.log('beforeUpdate');
  // },
  //
  // updated: function() {
  //   console.log('updated');
  // },

  methods: {
    uppercaseMessage: function () {
      if (this.isUppercase) {
        this.message = this.message.toLowerCase();
      } else {
        this.message = this.message.toUpperCase();
      }

      this.isUppercase = !this.isUppercase;
    },

    addStudent: function () {
      console.log('adding student!');
      let obj = {
        name: this.placeholder.name,
        dob: this.placeholder.dob,
        eyeColor: this.placeholder.eyeColor
      };
      this.students.push(obj);
    }
  }
});

// setTimeout(() => {
//   console.log('bb vue!');
//   app.$destroy();
// }, 3000);