// Functions in JS

function sayHello(){
    console.log("Hello Wrold");
}

// sayHello();

function addTwoNumber(firstNumber, secondNumber) {
    if(typeof firstNumber != "number" || typeof secondNumber != "number" || typeof firstNumber == "undefined" || typeof secondNumber == "undefined") {
        return "Plaese Recheck your arguments";
    }

    return firstNumber + secondNumber;
}

// const result = addTwoNumber(12,12);
// console.log(result);


function userLoggedIn(username = "vijay") {            // can pass default value -> userLoggedIn(username = "default-username") -> to avoid bellow if block

    // if (typeof username != "string"|| username === undefined || username === null || username === "") {
    //     console.log("Please give a username");
    //     return;
    // }

    if (!username) {                            // undefined, null, emply-string -> treat as 'false' values in JS
        console.log("Please give a username");
        return;
    }
    console.log(`${username} is just LoggedIn`);
    return;
}

userLoggedIn("vansh");