// Scope in JS

if (true) {
    let a = 12;
    const b = 15;
    var c = 20;
    d = 25;

    // console.log("Inner: ", d);
    
}

// console.log("Outer: ", d);

/*
here var c and d -> can access out from the scope of if block
*/


function outer(){
    const username = "vijay";

    function inner(){
        const website = "youtube.com";
        // console.log("username: ", username);
    }
    inner();
    // console.log("website: ", website);
}

outer();

// ============================== Interesting  ==============================

function addOne(num) {
    return num + 1;
}

// console.log(addOne(2));

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(2));
