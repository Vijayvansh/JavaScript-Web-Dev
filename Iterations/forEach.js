// forEach Loop in JS ->  (Specific loop for Arrays)

// array.forEach(element => {
    // body
// });

const anArray = ["Ford", "Tesla", "Tata", "Mahindra", "Skodaa"];

anArray.forEach((item) => {
    // console.log(item);
})

anArray.forEach( (element, index, arr) => {
    // console.log(element, " ", index, " ", arr);    
})


let anArrayObject = [
    {username: "vijayvansh", fullName: "Vijay Vansh Saini"},
    {username: "pulkit", fullName: "Pulkit Joshi"},
    {username: "khushal", fullName: "Khushal Namdev"}
]

anArrayObject.forEach( (anArrayObjectElement) => {      // here 'anArrayObjectElement' refering to every objects in array
    // console.log(anArrayObjectElement); 
    // console.log(anArrayObjectElement.fullName);       // fullName of every object
})


