// ---------------- Length property -----------------
let Name  = "prakash"
console.log(Name.length)

// ---------------- Uppercase and lowercase methods -------------
let Name1 = "UttArPraDEsH"

console.log(Name1.toUpperCase())
console.log(Name1.toLowerCase())

// --------------- slice method ----------------------
console.log(Name1.slice(2,5)) // Last index is not counted i.e it will slice the string from 2 to 4
console.log(Name1.slice(2)) // Prints the full string after 1st index

// --------------  replace method -----------------
let Name2 = "Luvkush Bro"
let new_Name = Name2.replace("Bro","Bhai")

console.log(new_Name)

// ------------- concat method ---------------

let Name3 = "Lucky"
let Name4 = "Rohit"
let Name5 = Name3.concat(Name4 , "Yes")
let Name6 = Name3.concat(Name4)
let Name7 = Name3.concat(Name4,Name5,Name3,"Yes")

console.log(Name5)
console.log(Name6)
console.log(Name7)

// ------------- trim method (trims the starting and ending spaces from the string ) ----------------

let Name8 = "              Virat         "
console.log(Name8)
console.log(Name8.trim())

// -------------- indexOf method --------------

let sentence3 = "Hello we are studying JavaScript."
console.log(sentence3.indexOf("are"))

