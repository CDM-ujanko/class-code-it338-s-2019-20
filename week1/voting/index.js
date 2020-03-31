var app = new Vue({
  el: '#container',
  data: {
    characters: [
      {
        name: 'Frodo Baggins',
        power: 'Has the ring',
        votes: 0,
      }, {
        name: 'Percy Jackson',
        power: 'Has a sword and can control water or whatever.',
        votes: 0,
      }, {
        name: 'Harry Potter',
        power: 'Has a want and a scar!',
        votes: 0,
      }, {
        name: 'Luke Skywalker',
        power: 'Has a lightsaber and things!',
        votes: 0,
      }, {
        name: 'Superman',
        power: 'Can do what ever!',
        votes: 0,
      }
    ],
    canUpdate: true
  },

  updated() {
    console.log('data updated!');
    // if (this.canUpdate) {
    //   this.characters.sort((a, b) => {
    //     // console.log('A is : ', a.name);
    //     // console.log('B is : ', b.name);
    //     // console.log('b.votes - a.votes', b.votes - a.votes);
    //     return b.votes - a.votes
    //   });
    //   this.canUpdate = false;
    // }
  },

  watch: {
    canUpdate: function (newVal, oldVal) {
      // console.log('the canUpdate changed!', oldVal, newVal);
    },

    characters: function () {
      console.log('characters changed!');
      let winners = this.characters.filter((item) => item.votes >= 10);

      console.log(winners);
      if (winners.length) {
        alert(winners[0].name + ' WON!');
      }
    }
  },

  computed: {
    totalVotes: function () {
      return this.characters.reduce((acc, item) => acc + item.votes, 0);
    },

    sortedCharacters: function () {
      return this.characters.sort((a, b) => b.votes - a.votes);
    }

  },

  methods: {
    upVote: function (char) {
      console.log('up!', char);
      char.votes ++;
      // this.canUpdate = true;
    },

    downVote(char) {
      console.log('Down!', char);
      char.votes --;
      // this.canUpdate = true;
    }
  }
});