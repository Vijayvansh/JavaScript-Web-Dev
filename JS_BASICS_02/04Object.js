// const anObject = {};     // non singolton object
const object1 = new Object()    // singolton object
object1['email'] = "vijayvansh@google.com";
object1['username'] = "vijayvansh";
object1.isLoogedIn = false;

// console.log(object1);

const platform = {
    email: "vijay@gogle.com",
    username: {
        "full name": {
            firstName: "vijay",
            middleNmae: "vansh",
            lastName: "saini"
        }
    }
}

// console.log(platform.username["full name"].firstName);

/*
We can define objects at multilevel [object1 -> object2 -> object3 -> ....]
for access values ob object3-> object1.object2.object3.object3-key
*/

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = {...obj1, ...obj2};        // spread the obj1 & obj2, and return a new object

// console.log(obj3);

// Object.assign(target, source) ->
// const obj4 = Object.assign(obj1, obj2);
// console.log(obj4);
// console.log(obj4 === obj1);

/*
Here target -> obj1, source -> obj2
if we use obj1 as target then original obj1 also changed.
And obj4 == obj1

to solve this thing we can give an optional prenthesis '{}'. [Operator.assign({}, source)]
now '{}' (empty object) treat as target and obj1 will not change.
we can give multiple objects as source.
*/

// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);
// console.log(obj1);


// If values fatching from database ->

let users = [
    {
        email: "user1@email.com",
        id: 1
    },
    {
        email: "user2@email.com",
        id: 2
    },
    {
        email: "user3@email.com",
        id: 3
    }
]

// console.log(users[0].email);

//----------------------------------------------------------------------------

// console.log(object1);
// console.log(Object.keys(object1));
// console.log(Object.values(object1));
// console.log(Object.entries(object1));       // it give array of entries in a array

console.log(object1.hasOwnProperty("email"));       // for chaeck the peoperty is exist or not