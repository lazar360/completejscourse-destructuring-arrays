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
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

// AND assigment operator : assigne une varleur à une variable si elle existe (uniquement valeur par défaut)
// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';
// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';
// console.log(rest1);
// console.log(rest2);

////////////////////////////////
// for loop
////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Itérer sur la propriété
for (const item of menu) console.log(item);

// Itérer en montrant l'index
for (const [i, element] of menu.entries()) {
  console.log(`${i + 1} : ${element}`);
}

////////////////////////////////
// optional chaining ?.
////////////////////////////////
// if (restaurant.openingHours.mon.open) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri.open) console.log(restaurant.openingHours.fri.open);
if (restaurant.openingHours.thu.open)
  console.log(restaurant.openingHours.thu.open);

//console.log(restaurant.openingHours.mon); // résultat attendu : undefined

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours.mon?.open); // undefined
// console.log(restaurant.openingHours.mon.open); // retourne une erreur

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderTruc?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Nico', email: 'nico@nico.co' }];
console.log(users[0]?.name);
console.log(users[1]?.name ?? 'User array empty');
// pareil que
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
// console.log(users[1].name); // retourne une erreur

////////////////////////////////
// Looping objects
////////////////////////////////

// Properties name
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days :`;
for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}

console.log(openStr);

// Properties values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
