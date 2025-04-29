// Reduce menthod in JS -> Arrays

// myArray.reduce( (accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, accumletor_initial_value );

myArray = [1, 2, 3, 4, 5];

const total = myArray.reduce((acc, myArrayElement) => {
    return acc + myArrayElement;
}, 0);

// console.log(total);

let shoppingCart = [
    {courseName: "PY course", price: 899},
    {courseName: "DSA course", price: 1899},
    {courseName: "JS course", price: 1299},
    {courseName: "Mobile Dev course", price: 2399}
];

// const totalPrice = shoppingCart.reduce((acc, course) => acc + course.price, 0);

const totalPrice = shoppingCart.reduce((acc, course) => {
    return acc + course.price;
}, 0)

console.log(totalPrice);

// cl(totalPrice)