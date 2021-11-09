const values = [...Array(11)].map((k = 1, i) => k + i);
// remove "1 and 5"
values.splice(4, 1);
values.splice(0, 1);

const suits = [
  {
    name: 'spades',
    icon: '♠'
  },
  {
    name: 'hearts',
    icon: '♥'
  },
  {
    name: 'diamonds',
    icon: '♦'
  },
  {
    name: 'clubs',
    icon: '♣'
  }
];

const colors = ['black', 'red'];

export const cards = [];
colors.forEach((color) => {
  suits.forEach((suit) => {
    values.forEach((value) => {
      cards.push(
        {
          name: value === 11 ? 'ace' : value === 2 ? 'jack' : value === 3 ? 'queen' : value === 4 ? 'king' : value,
          value: value,
          suit: suit.name,
          icon: suit.icon,
          color: color
        }
      );
    });
  });
});

// console.log(cards);

// function groupBy(data, val) {
//   let group = [];
//   data.forEach((item) => {
//     if (!group[item[val]]) {
//       group[item[val]] = [];
//     }
//     group[item[val]].push(item);
//   });
//   console.log(group);
// };

// groupBy(cards, ['suit']);

export const buttons = ['deal', 'hit', 'stand'];
export const chips = [5, 25, 50, 100];

export const rules = [
  "Cards 6-9 are worth face value. Jacks are worth 2, Queens - 3, Kings - 4, and Aces are worth 11.",
  "The Player is dealt 2 cards.",
  "The Dealer is dealt 2 cards, one face down.",
  "Player may 'hit' to receive another card.",
  "Player may keep hitting until they decide to stop, or 'stay'.",
  "If player reaches a value of 21 they win automatically, if they go over 21 they lose.",
  "Once players have gone the dealer will reveal cards and take its turn. The dealer will continue to hit until reaching a minimum value of 17."
];