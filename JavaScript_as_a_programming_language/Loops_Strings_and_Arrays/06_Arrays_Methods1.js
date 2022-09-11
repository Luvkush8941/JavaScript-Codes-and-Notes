let num = [1,2,3,3,4,5,45,67]

// ---------------- toString method -------------------
let s = num.toString() // s is now a string
console.log(s , " " , typeof s)

// ------------ Join method ------------
let c = num.join("_")
console.log(c , " ", typeof c)

let d = ['h','e','l','l','o']
let e = d.join("")
console.log(e)

// ------------- pop method (changes the original array) ---------------
num.pop()
console.log(num)

let r = num.pop()
console.log(r) // return the popped number

// ----------- push method -------------------

num.push(12334)
console.log(num)

// ----------- shift method (removes an element from the beginning of the array) ---------------

let k = num.shift() // 1 will be removed from the array
console.log(num)
console.log(k)

// ----------- unshift method (add an element in the beginning of the array) -------------
// unshift returns the new array length

let j = num.unshift(789)
console.log(num)
console.log(j)
