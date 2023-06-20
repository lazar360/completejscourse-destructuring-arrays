'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // recopier l'objet opening hours et non openingHours = openingHours
  openingHours,

  // on peut retirer le mot clé function et les ':' c'est-à-dire que :
  // - Ce qui est écrit en-dessous :
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // - Est la même chose que ça :
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}and ${ing3}`
    );
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
};

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log('B737'[0]);
console.log(airline.length);

// Methodes avec strings
////////////////////////////////

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

// Extraction :slice
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-2)); // Compte à partir de la fin
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got a middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// ToLowerCase et ToUpperCase
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Eviter les problèmes de case
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Email
const email = 'hello@example.com';
const loginEmail = ' Hello@example.com \n';
const emailToLower = loginEmail.toLowerCase();
// const emailWithNoSpace = loginEmail.replace(' ', '');
const trimmedEmail = emailToLower.trim();
console.log(trimmedEmail);

const loginEmail2 = ' Hello@example.com \n';
const normalizedEmail = loginEmail2.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23.';
const announcement2 = announcement.replace(/door/g, 'gate');
console.log(announcement2);

// booleans
const plane2 = 'A320dzdazd';
console.log(plane2.includes('A320'));
console.log(plane2.startsWith('A'));

// Practice exercise

// const checkBaggage = function (item) {
//   const baggage = item.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')){
//     console.log('You are NOT ALLOWED in board');
//   } else {
//     console.log('Welcome in board');
//   }
// };

// checkBaggage('I have a laptop, Food and a pocket Knife');
// checkBaggage('I have a Socks and camera');
// checkBaggage('I have a Socks and a gun for protection');

// Split and join
console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Nicolas Gautier'.split(' ');

const newName = ['Mr', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

const passenger2 = 'jessica ann smith davis';
capitalizeName(passenger2);
capitalizeName('nicolas gautier');

// padding

const message = 'Got to gate 23';
console.log(message.padStart(23, '+').padEnd(35, '+'));

// real life

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4337846986645461));
console.log(maskCreditCard('5466489546351651'));
