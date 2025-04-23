const marvelHeros = ["IronMan", "Thor", "SpiderMan"];
const dcHeros  = ["BatMan", "Flash", "SuperMan"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);           // output -> [ 'IronMan', 'Thor', 'SpiderMan', [ 'BatMan', 'Flash', 'SuperMan' ] ]

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);                  // output -> [ 'IronMan', 'Thor', 'SpiderMan', 'BatMan', 'Flash', 'SuperMan' ]

const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);               // output -> [ 'IronMan', 'Thor', 'SpiderMan', 'BatMan', 'Flash', 'SuperMan' ]

const complexArray = [1, 2, 3, [4, 3, 5], 3, 6, [1, 7, [78, 12, 45]], 9, 0]     // complex case of array
// console.log(complexArray);

const flatComplexArray = complexArray.flat(2);      // flat('depth') -> use to flat an array in depth  , depth can be infinity for not handle the depthof the array
// console.log(flatComplexArray);

// console.log(Array.from("Vijay"));           // output -> [ 'V', 'i', 'j', 'a', 'y' ]
                                            // from('value') -> convert any type of value into an array.


console.log(Array.from({name: "vijay"}));       // output -> [] -> empty array
                                                // have to tell that which array you need from keys or form values
                                                
let num1 = 12;
let num2 = 15;
let num3 = 17;

console.log(Array.of(num1, num2, num3));        // output -> [ 12, 15, 17 ]

