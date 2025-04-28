//Truthy and Falsy Values 

// let usreEmail = "0"
// if (usreEmail) {
//     console.log("Got an Email");
// } else{
//     console.log("Didn't Get an Email");
// }

// Falsy Values -> false, 0, -0, Bigint, "", null, undefined, NaN
// Truthy Values -> "0", [], "false", {}, "-", function(){}

// If i want to check empty array
// const anArr = []
// if(anArr.length === 0){
//     console.log("Array is Empty");
// }


// If i want to check empty object
// const emptyObject = {}
// if(Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }


// Intersting things ->
// false == 0;           // output -> true
// false == '';         // output -> true
// 0 == '';            // output -> true


//  Nullish Coalescing Operator (??) : null, undefine
let val = 5 ?? 10;              // val -> 5
let val2 = null ?? 12           // val2 -> 12
let val3 = undefined ?? 14       // val3 -> 14
let val4 = null ?? 13 ?? 54     // val4 -> 13


// console.log(val4);


// Terniary Operator (?):       [small sentex of if-else statement]
// condition ? true-statement : false-statement;

let number = 34;
(number === 34) ? console.log("Number is 34") : console.log("Number is not 34");


