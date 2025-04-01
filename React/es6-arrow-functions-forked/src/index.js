import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// var newNumbers = numbers.map((x) => x * 2);

// console.log(newNumbers);

// //////Filter - Create a new array by keeping the items that return true.
// var newNumbers = numbers.filter((num) => num < 10);

// console.log(newNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

// console.log(newNumber);
// ////Find - find the first item that matches from an array.
// var newNumber = numbers.find((num) => num > 10);
// console.log(newNumber);

// ////FindIndex - find the index of the first item that matches.
// var newNumber = numbers.findIndex((num) => num > 10);
// console.log(newNumber);
