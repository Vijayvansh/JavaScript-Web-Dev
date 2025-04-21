// Most valuable code => Clean Code / Readable Code

// Comperisions =>

console.log(2 == 2);
console.log(2 >= 2);
console.log(2 <= 2);
console.log(2 < 2);
console.log(2 > 2);
console.log(2 === 2);

/*
same datatype comperision don't give conflicts
*/

console.log("12" == 12);
console.log("02" == 2);

/*
    Different datatype comperision don't give peridicted result
*/

console.log(null == 0);   //false
console.log(null > 0);    //false
console.log(null <= 0);   //false

/*
    In JS equality check '==' and comparision check '<, >, <=, >=' work differently.
    Comparision check treat 'null' as 0
*/


console.log(undefined == 0);   //false
console.log(undefined > 0);    //false
console.log(undefined <= 0);   //false 


//  ====================== Strict Check / Comparision (===)  ======================

console.log("2" === 2);  //false

/*
    Strict check compare the values and also compare the dataType of values
    Strict check '===' doesnot allow to type conversion
*/
