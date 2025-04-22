// Date ->

const todayDate = new Date();
console.log(todayDate);                 // output -> 2025-04-22T18:03:03.645Z
console.log(todayDate.toString());      // output -> Tue Apr 22 2025 23:33:03 GMT+0530 (India Standard Time)
console.log(todayDate.getFullYear());   // output -> 2025
console.log(todayDate.getMonth());      // output -> 3

/*
    In Date object getMonth() consider => 
    January -> 0, Faburary -> 1    ............    December -> 11
*/

console.log(todayDate.getDay());        // output -> 2

/*
    getDay() consider =>
    Monday -> 1, Tuesday -> 2, ............    Sunday -> 7
*/

