Vue.component('character', {
  template: `
    <div class="my-4 container">
      <h3>{{ name }} has {{ votes}} </h3>
      <header>
        <slot name="header"></slot>
      </header>
      <button 
          class="btn btn-primary"
          @click="voteUp">
        Vote Up
      </button>
      <button
          class="btn btn-danger"
          @click="voteDown">
        Vote Down
      </button>

      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `,
  props: {
    name: String,
    // power: String,
  },

  data: function () {
    return {
      votes: 0
    }
  },


  methods: {
    voteUp(evet) {
      this.votes++;
      this.$emit('vote-up');
    },

    voteDown(event) {
      if (this.votes === 0) {
        return;
      }

      this.votes--;
      this.$emit('vote-down');
    },

    //
    // vote(vote) {
    //   this.votes += vote;
    // }
  }
});


var app = new Vue({
  el: '#app',
  data: {
    totalVotes: 0,
    characters: [
      {
        name: 'Frodo Baggins',
        power: 'Has the ring',
      }, {
        name: 'Percy Jackson',
        power: 'Has a sword and can control water or whatever.',
      }, {
        name: 'Harry Potter',
        power: 'Has a want and a scar!',
      }, {
        name: 'Luke Skywalker',
        power: 'Has a lightsaber and things!',
      }, {
        name: 'Superman',
        power: 'Can do what ever!',
      }
    ],
  },

  methods: {
    addTotal() {
      this.totalVotes++;
    },

    removeTotal() {
      this.totalVotes--;
    },
  }
});
