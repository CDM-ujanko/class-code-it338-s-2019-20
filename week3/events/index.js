// document.body.onclick = function () {
//   console.log('You clicked the body!');
// };
//
// document.body.onclick = function () {
//   console.log('Second, event!');
// };
//
document.body.addEventListener('click', function (e) {
  console.log('lvl 2 click!', e);

  e.preventDefault();
});

// document.body.addEventListener('click', function () {
//   console.log('second lvl 2 click!');
// });

var app = new Vue({
  el: '#container',
  data: {
    message: 'Hello world!',
  },

  methods: {
    buttonClickEventHandler(event) {
      console.log(event);
      console.log('i got clicked on!');
    },


    handlerWithData(data, event) {
      console.log(event, data);
    },

    inputChangeHandler(event) {
      console.log(event);
    },

    clickHandler(event) {
      // Old way!
      // event.preventDefault();
      console.log(event);
    },

    childClickEvent(event) {
      event.stopPropagation();
      console.log(event, 'Child got clicked on!')
    },

    parentClickEvent(event) {
      console.log(event, 'Parent got clicked on!')
    }
  }
});
