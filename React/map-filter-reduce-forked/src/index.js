// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// var newNumbers = numbers.map(function (num) {
//   return num * 3;
// });

// console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.

// var newNumber = numbers.filter(function (num) {
//   return num < 10;
// });

// console.log(newNumber);

// //Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (Accumulator, currentNumber) {
//   return Accumulator + currentNumber;
// });
// console.log(newNumber);

// //Find - find the first item that matches from an array.

// var newNumber = numbers.find(function (num) {
//   return num > 15;
// });

// console.log(newNumber);

// //FindIndex - find the index of the first item that matches.

// var newNumber = numbers.findIndex(function (num) {
//   return num > 15;
// });

// console.log(newNumber);

//Challenge

import emojipedia from "./emojipedia";

const newStrings = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});
console.log(newStrings);
