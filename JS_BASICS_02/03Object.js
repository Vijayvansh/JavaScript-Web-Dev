// Objects in JS

// Objects Litreals

const mySymbol = Symbol("key1");

const user = {
    name: "vijay",
    "full name": "vijay vansh saini",
    email: "vijay@gmail.com",
    password: "123123123",
    [mySymbol]: "mySymbol-1",           //[] use for symbol as a key
    age: 18,
    isLoggedIn: false,
    lastDayLoggedIn: ["Monday", "Tuesday"]
};

// console.log(user.age);
// console.log(user["email"]);         // Another way to access the values of object , object["key"]
// console.log(user["full name"]);     // if i want to access this type of key, I can't directly access using (.) operator. I have to use this option to access the key
console.log(typeof user[mySymbol]);
console.log(user[mySymbol]);
console.log(typeof mySymbol);



user.email = "vijay@google.com";
// console.log(user.email);

// Object.freeze(user);                // Object.freeze(object) -> freeze to change the values of object keys
user.age = 19;                      // user.age will not change to 19, because of freeze() method

// console.log(user.age);              // output -> 18

user.greeting = function(){
    console.log("Hello JS user");
};

user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};

// user.greeting();
// user.greetingTwo();
// console.log();         // output -> [Function (anonymous)]




