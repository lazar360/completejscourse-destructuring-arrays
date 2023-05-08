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
  }
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

// 1- Récupérer les éléments d'un tableau
// soit un tableau simple
const arr = [1, 2, 3];

// méthode classique
const a = arr[0];
const b = arr[1];
const c = arr[2];

// méthode rapide : déstructuration
const [x, y, z] = arr;
console.log(x, y, z);

// 2- Récupérer des éléments d'un tableau dans un objet
// les deux premiers
const [first, second] = restaurant.categories;
// le premier et le troisième
const [premier, , troisieme] = restaurant.categories;

// 3- Changer la place des éléments
let [main, , secondary] = restaurant.categories;

// méthode classique
// const temp = main;
// main = secondary;
// secondary = temp;

// destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); 

// 4- avec inclusion d'une fonction
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
