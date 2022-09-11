// Their are 7 primitive datatypes in JavaScript 
// Primitive data types are the fundamental data types i.e built-in data types 
// Objects (or non-primitive data types) stores key value pairs

/*

// ---------- 7 primitive data types are ------------- :

// 1. N :- Null
// 2. N :- Number
// 3. S :- Symbol
// 4. S :- String
// 5. B :- Boolean
// 6. B :- Bigint
// 7. U :- Undefined

let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("347") + BigInt("253");
let e = "luvkush";
let f = Symbol("I am a nice symbol");
let g = undefined
let h // by default it is initialized by undefined.

console.log(a,b,c,d,e,f,g,h)

// using type :-

console.log("\n----------- Using type to get the data type of the variable -----------\n")
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)

*/

// Non - Primitive Datatypes :  Objects in JavaScript

const item = {

    "Hemendra" : true,
    "Luvkush"  : false,
    "Vaibhav"  : Symbol("yo"), 
    "Dheeraj"  : "hello",
    "Mohit"    : 78,
    78      : undefined
}

console.log(item["Luvkush"])
console.log(item[78])
console.log(item["Dheeraj"])
console.log(item["Section_A"]) // Not belongs to the item objects


