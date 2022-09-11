// Before ES6 we use var keyword to declare a variable
// We use const keyword to declare those values which we donot want to change throughout the program.
// let is used to declare the block scoped variables.

// In early 90's we have to use the var keyword to declare the variable 

// var is a globally scoped(i.e we can change that varible from anywhere) while let and const are block script.


console.log("Difference between var , let and const in JavaScript")
var a = 45;
var b = "hemendra";
var c = null;
var d = undefined;

/*

console.log(b)

// Making a block
{
    var b = "luvkush";
    console.log(b)
}

console.log(b)

// So, we can see that variable b has changed to luvkush

// Creating a let variable
// Making a block scoped variable using the let  keyword
let x = 67
console.log(x)

// Creating a block
{   
    // x variable will not be changed globally.
    let x = 123
    console.log(x)
}

console.log(x)

*/



/*

// var can create bug in our code
// Creating two varibles of same name in JavaScript
var a = 56
var a = "luvkush"

console.log(a)

// let throughs an error in case we are using the same variable
// let z = 56
// let z = "hello"

// Note : We cannnot redeclare the let variable.
// But we can do the below thing.
let y = "yo"
y = 89
console.log(y)

*/

/*

// const can neither be updated nor be re-declare.

const author = "luvkush"
// let author = 5 // Throughs an error as author is already being assigned
// author = 89 // updating the const varible again gives an error.

*/

// var variable are initialized with undefined whereas let and const variables are not initialized
var yo
console.log(yo)

let k
console.log(k)

// const must be initialized during declaration unlike let and var
// const baadMain // Thoughs an error
