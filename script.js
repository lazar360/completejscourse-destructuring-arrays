'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adress,
  }) {
    console.log(
      `Order received! ${starterIndex} blabla ${mainIndex} blabla ${time} blabla ${adress}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}and ${ing3}`
    );
  },
};

const rest1 = {
  name: 'capri',
  numGuests: 1,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// au lieu de :

rest1.numGuests = rest1.numGuests || 1;
rest2.numGuests = rest2.numGuests || 1;

// on peut écrire
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

// sauf que ça marche pas lorsque une valeur est définie à 0
// nullish assigment operator : crée une propriété et assigne une valeur s'il n'y en a pas (propriété et valeur par défaut)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

// AND assigment operator : assigne une varleur à une variable si elle existe (uniquement valeur par défaut)
// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';
console.log(rest1);
console.log(rest2);
