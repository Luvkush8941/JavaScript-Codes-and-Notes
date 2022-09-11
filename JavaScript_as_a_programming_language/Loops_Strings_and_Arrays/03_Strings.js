let Name  = "luvkush"
console.log(Name , " and it is of " , typeof Name , " type.")

// ----------- Length of the name -------------
console.log("Length of the name is :",Name.length)

// We can also take the string in the single quotes in JavaScript which we are unable to do so in C++.
let friend = 'Hemendra'
console.log(friend , " " , friend.length)

// ------------------ String indexing -------------------
console.log(friend[0])
console.log(friend[1])


// Note : strings are immutable i.e they cannot change 

let s = "hello"
s[0] = 'H'
s[s.length - 1] = 'R'
console.log(s) // s remains same


// ---------------------- Template literals ----------------------

// Template literals use backtics instead of quotes to define a string

let another_friend = `Vaibhav`
console.log(another_friend , " ",another_friend.length)

// With template literals it is possible to use both single as well as double quotes inside a string.

let sentence = `Welcome to Agra's "TajMahal".`
console.log(sentence , " " ,sentence.length)


// We can insert variable directly in template literal. This is called string interpolation.
let boy1 = "Shane Watson";
let boy2 = "Dwayne Bravo";

let sentence2 = `${boy2} is a friend of ${boy1}`
console.log(sentence2)


// --------------- Escape sequence characters ---------------

let fruit = 'Bana\'na'
console.log(fruit , " ",fruit.length)

console.log("Hello my name is \r one")

