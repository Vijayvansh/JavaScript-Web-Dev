// Date ->

const todayDate = new Date();

// console.log(typeof todayDate);              // output -> object


// console.log(todayDate);                 // output -> 2025-04-22T18:03:03.645Z
// console.log(todayDate.toString());      // output -> Tue Apr 22 2025 23:33:03 GMT+0530 (India Standard Time)
// console.log(todayDate.getFullYear());   // output -> 2025
// console.log(todayDate.getMonth());      // output -> 3

/*
    In Date object getMonth() consider => 
    January -> 0, Faburary -> 1    ............    December -> 11
*/

// console.log(todayDate.getDay());        // output -> 2

/*
    getDay() consider =>
    Monday -> 1, Tuesday -> 2, ............    Sunday -> 7
*/

// console.log(todayDate.getTime());                // output -> 1745346085532
// console.log(todayDate.toISOString());            // output -> 2025-04-22T18:22:40.025Z               
// console.log(todayDate.toUTCString());               // output -> Tue, 22 Apr 2025 18:24:22 GMT   // give universal standard time 
// console.log(todayDate.getHours());
// console.log(todayDate.getUTCDate());

