// Loops / Iteration on Arrays, object, Maps using forof and forin loops ->

// for of ->
// for (const element of object) {          // here object -> on which you want to iterate / not an JS-object
    
// }

const myArray = [12, 13, 14, 15];
for (const arrayElement of myArray) {
    // console.log(arrayElement);
}

const myMap = new Map();
myMap.set('IN', "India"); 
myMap.set('USA', "United State America"); 
myMap.set('UK', "United Kingdoom"); 
myMap.set('IN', "India"); 


// console.log(typeof myMap);       // output -> object
// console.log(myMap);              // don't allow to store same values again and again, Store only Unique Values

for (const myMapElement of myMap) {
    // console.log(myMapElement);          // it will give every 'key' and 'key-value' in a array -> ['Key', 'Key-value'] 
}

for (const [key, value] of myMap) {                 // if don;t want to array of key and values, we can you this sentex in which [key, value] defined and 
    // console.log(`Value of ${key} is: ${value}`);     // output -> Value of IN is: India
                                                        //           Value of USA is: United State America
                                                        //           Value of UK is: United Kingdoom
}


let myObject = {
    username: "vijay@vansh",
    fullName: "Vijay Vansh Saini",
    email: "vijayvansh@email.com"
}

// object are not iteratable using forof loop ->

// for (const [myObjectKey, myObjectKeyValue] of myObject) {           // TypeError: myObject is not iterable
//     console.log(myObjectKey, " :- ", myObjectKeyValue);             
// }

