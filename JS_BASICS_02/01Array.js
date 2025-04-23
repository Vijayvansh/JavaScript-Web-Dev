// Arrays in JS -> 

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);        // for display complete array
console.log(myArray[2]);


/*
Array in JS are resizable and can store multiple datatype values
Array => datatype -> object
create shallow copy -> When we perform copy operation on array -> copy of object whose share same reference point [change in original Array] 
*/

// Array Methods ->
myArray.push(9);            // push('value') -> insert 'value' in end of the original array 
console.log(myArray);

myArray.pop()               // pop() -> remove last index 'value' from array
console.log(myArray);

myArray.unshift(12);        // inshift('value') -> insert 'value' in the start index and shift right all other values by 1 in array. -> For big size of array unshift('value') operation is very havey
console.log(myArray);

myArray.shift()             // shift() -> remove first index value and shift left all values by 1 in array.
console.log(myArray);

console.log(myArray.includes(4));
console.log(myArray.includes(12));
console.log(myArray.indexOf(12));
console.log(myArray.indexOf(4));


const newArray = myArray.join();        // join() -> to change an array into string
console.log(typeof newArray);           // output -> string

// slice & splice =>
const mainArray = [12, 13, 14, 15, 16, 17];
console.log("Original Array: ", mainArray);

const array1 = mainArray.slice(1, 3);
console.log("slice operation: ", array1);       // output -> [ 13, 14 ]
console.log("mainArray: ", mainArray);          // output -> [ 12, 13, 14, 15, 16, 17 ]

/*
slice('start-index', 'end-index') -> extract an sub array from main array between ['start-index' to 'end-index'] 
'end-index' -> exclusive value, not included in sub array
slice operation din't change original array
*/

const array2 = mainArray.splice(1, 3);
console.log("splice operation: ", array2);      // output -> [ 13, 14, 15 ]
console.log("mainArray:", mainArray);           // output -> [ 12, 16, 17 ]

/*
splice('start-index', 'end-index') -> extract an sub array from main array between ['start-index' to 'end-index'].
'end-index' -> inclusive value, include vlaue in sub array.
** splice operation change the original Array. It remove all the elements of array which are included in splice sub array **.
*/

// Basic Concept of Array in JS