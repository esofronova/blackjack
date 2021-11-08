const values = [...Array(10)].map((k = 1, i) => k + i);
// remove "5"
values.splice(4, 1);

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
          name: value === 1 ? 'ace' : value === 2 ? 'jack' : value === 3 ? 'queen' : value === 4 ? 'king' : value,
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