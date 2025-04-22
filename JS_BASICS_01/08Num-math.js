// Number and Math objects

const num = 42;
// console.log(num);

const anotherNumber = new Number(213);              // new way to define number through new keyword and Number constructor
// console.log(anotherNumber.toString().length);

const newNumber = 123.89;
// console.log(newNumber.toFixed(1));                  // toFixed(value) -> to display 'value' numbers only after point

const aNumber = 123.76;                             // toPrecision(value) -> roundoff the number
// console.log(aNumber.toPrecision(4));

const hundreads = new Number(1000000);
// console.log(hundreads.toLocaleString());

/*
Default toLocaleString() function work on US standards.
Indian Standrad => toLocaleString('en-IN')
*/

// console.log(hundreads.toLocaleString('en-IN'));


// ===================++++++++++   Math - Library   +++++++++++**************===================
// console.log(Math);

const randomNumber = Math.floor(Math.random() * 10) + 1;        //   Math.random() -> generate random numbers between 0 to 1.
// console.log(randomNumber);

// for generate between a range ->
const max = 50;    // for maximum range of random number
const min = 50;     // for minimum range of random number

const newRandomNumber = Math.floor(Math.random() * (max - min)) + min;      // This will give output a random number between 'min' to 'max'
console.log(newRandomNumber);

/*
In this code Math.random() -> generate random number between 0 to 1.
Muntipling by (max - min) -> increase the range form (0 to 1), to [0 to (max - min)].
Math.floor -> minimum roundoff the number.
(+ min)-> increase the range from [0 to (max - min)], to 'min' to 'max'.

[Note -> we can add 1 to avoid 0 random number case]
*/


// let's create 3 Dice roll program ->

const dice1 = Math.floor(Math.random() * 6) + 1;
const dice2 = Math.floor(Math.random() * 6) + 1;
const dice3 = Math.floor(Math.random() * 6) + 1;

// console.log(dice1);
// console.log(dice2);
// console.log(dice3);