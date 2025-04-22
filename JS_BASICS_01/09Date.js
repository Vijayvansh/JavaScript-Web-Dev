// Date ->

let todayDate = new Date();

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
// console.log(todayDate.toLocaleDateString());        // output -> 23/4/2025
// console.log(todayDate.toLocaleString());            // output -> 23/4/2025, 12:01:45 am

// *******************************************************************************************
// *******************************************************************************************

// Create my own date ->
let myCreatedDate = new Date(2222, 11, 22);       // Date('year', 'month {0 to 11}', 'date')
// console.log(myCreatedDate.toLocaleString());        // output -> 22/12/2222, 12:00:00 am

// Time Stamps =>
let myTimeStamp = Date.now();
// console.log(myTimeStamp);               // output -> 1745347777422      // time in miliseconds for 1 jan 1970
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));      // time in seconds insted of miliseconds

let newDate = myCreatedDate.toLocaleString("hi-IN", {
    dateStyle: "full"
    });

console.log(newDate);




// *************************************************************************************************************************

// String Interpolation =>

// console.log(`My created date is ${myCreatedDate.toDateString()} and Original Date is ${todayDate.toDateString()}`);
