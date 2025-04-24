// Destructuring of Objects

const usersDetails ={
    usernameName: "viayvansh",
    userAge: 18,
    userEmail: "vijay@googe.com"
}

let {userEmail: email} = usersDetails;       // destruturing of Object usersDetails, it create a new variable and store the value of object-key.
// console.log(usersDetails.hasOwnProperty("email"));
console.log(email);


email = "user@email.com";
// console.log(usersDetails.userEmail);        // state that original data of userEmail not changed
