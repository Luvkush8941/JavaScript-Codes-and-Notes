/*

------------------------- Question ------------------------

Q-1 : Create a variable of type string and try to add a number to it.

Q-2 : Use typeof operator to find the dataType of the string in last question.

Q-3 : Create a const object in JavaScript. Can you change it to hold a number later ?

Q-4 : Try to add a new key to the const object in Position 3 were you able do it ?

Q-5 : Write a Js Program to create a word-meaning dictionary of 3 words.


*/

// Q-1
let a = "practice"
let b = 6
let c
let d = true

// Q-2
// string concatenation occurs here
console.log(a + b)
console.log(a + b + c)
console.log(a + b + c + d)

console.log(a)
let x = a + b + c + d
console.log(typeof x)

// Object creation

const p = {

    name : "luvkush",
    section : 1,

}

// Q-3
// p = "yo" // ---------> Gives an error
console.log(p)


// Q-4
p['friend'] = "Vaibhav"
p['Course'] = "Btech"
p['name'] = "Nikhil" // updating the name 

console.log(p)

// p = {} // Gives an error

// Q-5
const dict = {

     appreciate : "recognize the full worth of.",
     ataraxia : "a state of freedom from emotional disturbance and anxiety.",
     yakka : "work, especially hard work."

}

console.log(dict)
console.log(dict.yakka)
console.log(dict['yakka'])


