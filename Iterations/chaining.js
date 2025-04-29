// Chaining in JS ->

let anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = anArray
                .map((item) => item + 10)
                .map((item) => item * 2)
                .filter((item) => item < 37);

console.log(newArray);
