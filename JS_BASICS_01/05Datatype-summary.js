// DataTypes in JS

/*
    Primitives (call by value)
    String, Number, Boolean, null, undefined, Symbol, BigInt
*/

// String ->
let aString = "This is a String Datatype variable"

// Number ->
let aNumber = 123
let anotherNumber = 1.234    // JS don't have double or float concept

// Boolean ->
let isLoggedIn = false

// null ->
let nullValue = null

// undefined ->
let undefinedVariable;

// Symbol ->
let id = Symbol('1234')
let anotherId = Symbol('1234')

/*
    Symbol identify a variable uniquely
 -> Here id not equal to anotherId because of Symbol
*/

// BigInt ->
// let bigNumber = 123456782345678n      // bigint use only for very big numbers



/*
    Non - Primitive Datatypes (Call by refrence)
    Array, Object, Function
*/

// Array ->
let itsArray = [12, 321, 43, 432];
// console.log(itsArray[0]);

// Object ->
let myObject = {
    name: "Vijay Vansh Saini",
    age: 18
}

// Function ->
let myFunction = function(){
    console.log("We are in Function now");
}


// "typeof" -> check datatype

console.log(typeof aString);            // string
console.log(typeof aNumber);            // number
console.log(typeof isLoggedIn);         // boolean
console.log(typeof nullValue);          // object
console.log(typeof undefinedVariable);  // undefined
console.log(typeof id);                 // symbol
// console.log(typeof bigNumber);       // bigint

console.log(typeof itsArray);           // object
console.log(typeof myObject);           // object
console.log(typeof myFunction);         // function
