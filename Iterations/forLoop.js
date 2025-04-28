// For Loop in JS ->

// for (let i = 0; i <= 10; i++) {
//     console.log(i);    
// }

let anArray = [12, 13, 24, 43, 56, 76];
// for (let i = 0; i < anArray.length; i++) {
//     if(i == 3){
//         console.log("endex 3 detected");
//         break;
//     }
//     console.log(anArray[i]);    
// }

for (let i = 0; i < anArray.length; i++) {
    if(i == 3){
        console.log("endex 3 detected");
        continue;
    }
    console.log(anArray[i]);    
}