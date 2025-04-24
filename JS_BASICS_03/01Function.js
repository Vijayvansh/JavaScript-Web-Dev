// Functions in JS

function sayHello() {
    console.log("Hello Wrold");
}

// sayHello();

function addTwoNumber(firstNumber, secondNumber) {
    if (typeof firstNumber != "number" || typeof secondNumber != "number" || typeof firstNumber == "undefined" || typeof secondNumber == "undefined") {
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

// userLoggedIn("vansh");

function addCartPrice(...product1Price) {           // (...) operatorr is known rest operator also known spread operator
    return product1Price;                           // use different name in different conditions
}                                                   // perform different tasks at different uses
                                                    // in function -> use for resive n number of arguments

// const price = addCartPrice(100, 500, 250);
// console.log(price);

const usersDetails = {
    username: "vijayvansh",
    email: "vijay@email.com",
    age: 18
}

function userDetailShow(getAnObject) {
    return `username: ${getAnObject.username}, email: ${getAnObject.email}, user-age: ${getAnObject.age}`;
}

// console.log(userDetailShow(usersDetails));

function functionArray(getAnArray){
    return getAnArray[1];
}

const anArray = [12, 13, 14, 15];
// console.log(functionArray(anArray));

const secondNumber = functionArray([13, 14, 15,16]);        // we can directly pass a object or array as argument in function
// console.log(secondNumber);

