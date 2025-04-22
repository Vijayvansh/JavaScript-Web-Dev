const accountID = 445579  // Now can't change the value because of const
let accountName = "vijayvnash"
let accountEmail = "Vijayvansh@gmail.com"
var accountPassword = "Anytthing@08"

accountCity = "Jaipur" // don't use this way to declare variables 

/* 
    prefer not to use 'var'
    because of issue in block scope and functional scope.
*/

console.log(accountID);
console.table([accountName, accountEmail, accountPassword, accountCity])  //table function can use for multiple output in table form
 

accountEmail = "Vijay@gmail.com"
accountName = "vansh"
accountPassword = "Any08"
accountCity = "Delhi"

// accountID = 123456   // can't assign or update const variables values

console.log("After Changing the Values  of Variables");
console.table([accountName, accountEmail, accountPassword, accountCity]) 
