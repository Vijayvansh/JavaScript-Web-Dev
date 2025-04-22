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

