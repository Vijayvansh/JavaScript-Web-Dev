// let score = "33"

// console.log(score + "is type of: " + typeof score);

// let scoreInNumber = Number(score)
// console.log(scoreInNumber)
// console.log("Now score is type of: " + typeof scoreInNumber)

// let isLoggedIn
// let loggedIn = Boolean(isLoggedIn)
// console.log(loggedIn);
// console.log(typeof loggedIn);

/*
    Conversion to Boolean ->
        1 => true; 0 => false
        null => false
        undefined => false
        "" => false; "someValue" => true
*/

// let someNumber

// let convertedString = String(someNumber)
// console.log(convertedString);
// console.log(typeof convertedString);

/*
    Conversion to String ->
        anyNumber => string;
        null => null (string)
        undefined => undefined (string)
*/


// *************************  Operations  *************************

let number = 123
let negNumber = -number
// console.log(negNumber);


// basic operations ->
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3);  // ** 2 power 3


let str1 = "My Name"
let str2 = "vijay"

let str3 = str1 + " is " + str2  // add 2 strings with '+' operator
// console.log(str3);

// Some confussing conversion and operations ->
console.log(1 + "2");  // => 12
console.log("1" + 2);  // => 12
console.log("1" + 2 + 3);  // => 123
console.log("1" + "2" + 3);  // => 123
console.log(1 + 2 + "3");   // => 33 (it add (1+2) and convert it into stirng then add two strings ("3" + "3"))

// Not prefer to write this type of low readability code in industry grade projects