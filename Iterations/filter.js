// Filter in JS array ->

const myArray = [12, 13, 14, 15, 16, 17, 18, 19, 20];

let filteredArray;

// filteredArray = myArray.filter( (itme) => itme < 15 );
// console.log(filteredArray);

filteredArray = myArray.filter( (item) => {
    return item >= 17
})
// console.log(filteredArray);

// filtering using forEach in Array ->

let newFilteredArray = [];

myArray.forEach( (arrayElement) => {
    if (arrayElement <= 18) newFilteredArray.push(arrayElement);
})
// console.log(newFilteredArray);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (book) => book.genre === "History" );
// console.log(userBooks);

userBooks = books.filter( (book) => book.publish >= 2000 );
// console.log(userBooks);

