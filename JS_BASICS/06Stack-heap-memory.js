// ========== Stack And Heap  ============

/*
    Stack (Primitive), Heap (Non - Primitives)

    Stack ->
    give a copy to another vqriable

    Heap ->
    refers to the original storage
*/

// Stack ->

let aNumber = 123
let anotherNumber = aNumber
anotherNumber = 321         // aNumber will not change because giving a copy to anotherNumber not original number

console.log(aNumber);
console.log(anotherNumber);


// Heap ->

let user1 = {
    name: "vijay vansh",
    eMail: "vijay@gmail.com"
}

let user2 = user1
user2.name = "another name"                 
user2.eMail = "another@gmail.com"

/*
    this will change original data of user1 also
    because user2 also refer to user1 location in heap memory
*/

console.log(user1.name);
console.log(user2.name);
