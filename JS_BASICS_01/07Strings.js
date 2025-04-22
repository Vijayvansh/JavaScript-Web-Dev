// Strings in JS

let aString = "This is a string"

let newString = new String('this is new string')
console.log(newString);

console.log(newString.toUpperCase());
console.log(newString.indexOf('n'));
console.log(newString.charAt(8));
console.log(newString.length);

let gameName = newString.substring(0, 4)
console.log(gameName);

let anotherString = newString.slice(4, 8)    // we can use negative values also for string from end
console.log(anotherString);

const str1 = "    withSpace       "
console.log(str1);
console.log(str1.trim());

const url = "https://vijay.com"
