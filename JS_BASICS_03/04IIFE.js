// Immediately Invoked Function Expressions [IIFE]

/*
for avoid globle scope polution we use IIFE.
function innediatly invoked.
*/

(function dataBaseConnection(){         // Named IIFE
    // console.log("Database Connected Sucussfully");
})();

/*
for declare IIFE -> ()(); -> wrap / define the function in first perenthesis.
JS don't know where to end the context of the IIFE. So for end the context of IIFE ';' must be added to end of the function.
function immediatly invoked
*/

( () => {
    // console.log("We are in Arrow Function");    
} )();


// IIFE with parameter -> 
( (name) => {           
    console.log(`say hello to ${name}`);    
} )("vijay");