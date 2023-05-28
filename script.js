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

////////////////////////////////
// Set
////////////////////////////////

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza']);
console.log(orderSet);
console.log(new Set('Nicolas'));
console.log(orderSet.has('Pasta')); // renvoie false si pas dedans
orderSet.add('Pasta'); // ajoute un élémént
orderSet.delete('Pasta'); // supprimer un élémént
// orderSet.clear(); // vide le set

for (const order of orderSet) console.log(order);

// Example
const staff = ['waiter', 'chief', 'waiter', 'manager', 'manager'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// dédoublonnage staffUnique
// !!!!!!!!!!!!!!!!!!!!!!!!
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUnique.size);

console.log(new Set('nicolasgautier').size);

////////////////////////////////////////////////////////////////
// Map

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenz, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('staffUnique', staffUnique)
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.siize);
//rest.clear();
// ne pas faire :
//rest.set([1,2], 'Test')
//console.log(rest.get([1,2])); // retournera undefined car pas le même objet
// il faut créer un objet
const arr = [1, 2];
// et l'intégrer en clé
rest.set([1, 2], Test);
// on peut mettre un query selector dans une map
rest.set(document.querySelector('h1'), 'Heading');

// Autre méthode pour remplir une map
const question = new Map(
  ['questions', 'What is the best language'],
  [1, 'Javascript'],
  [2, 'Java'],
  [3, 'C'],
  [correct, 1],
  [true, 'Correct'],
  [false, 'Try again']
);

// Convertir un objet en map
const hoursMap = new Map(Object.entries(openingHours));

// Itérer sur une map

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(` Answer ${key} : ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Pour convertir a map to array
console.log([...question]);
