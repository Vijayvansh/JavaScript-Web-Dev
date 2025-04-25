// Arrow Function in JS 

const user = {
    username: "vijay",
    email: "vijay@email.com",
    wellcomeMsg: function(){
        console.log(`${this.username}, wellcome to website`);
        console.log(this);
        
    }
}

// user.wellcomeMsg();
// user.username = "vansh";
// user.wellcomeMsg();

// console.log(this);      // output -> {} -> empty object

function sayHello(){
    const username = "vijay";
    console.log(this.username);       // output -> undefined  
    
    // In function we can access only globle object of the function using of 'this' keyword (node)
    // in browser only window object
}
// sayHello();

const addNumbers = (num1, num2) => {                 // explicit return
    console.log(this);
    return num1 + num2;
}

const multiplyNumber = (num1, num2) => num1 * num2;     // implicit return

const divideNumber = (num1, num2) => (num1 / num2);     // implicit return
// console.log(addNumbers(5, 5));

const objectParameter = () => ({username: "vijay", email: "vijay@email.com"});      // for object parameter we have to give prenthisis


console.log(objectParameter().username);
