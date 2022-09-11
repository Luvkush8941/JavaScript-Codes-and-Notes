console.log("--------------------- Operators in Js -------------------------")
let a = 9
let b = 2

console.log("\n1. *********** Arithmetic Operators ***********\n")
console.log("a + b = ",(a+b))
console.log("a - b = ",(a-b))
console.log("a x b = ",(a*b))
console.log("a / b = ",(a/b)) // Gives the real float division value. In C and C++ we will get the int value here
console.log("a % b = ",(a%b))
console.log("a^b = ",(a**b)) // Exponentiation operator
console.log("a++ = ",a++)
console.log("a-- = ",a--)
console.log("++a = ",++a)
console.log("--a = ",--a)

console.log("\n2. *********** Assignment Operators ***********\n")
console.log(" = : Ex x = y")
console.log(" += : Ex x = x + y")
console.log(" -= : Ex x = x - y")
console.log(" *= : Ex x = x * y")
console.log(" /= : Ex x = x / y")
console.log(" %= : Ex x = x % y")
console.log(" **=  : Ex x = x**y")

console.log("\n1. *********** Comparison Operators ***********\n")
console.log(" == : Equal to")
console.log(" != : Not equal")
console.log(" === : Equal value and type")
console.log(" !== : Not equal value or not equal type")
console.log(" > : Greater than")
console.log(" < : Less than")
console.log(" >= : Greater than or equal to")
console.log(" <= : Less than or equal to")
console.log(" ? : Ternary Operator ")

let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ",comp1 == comp2)
console.log("comp1 != comp2 is ",comp1 != comp2)
console.log("comp1 === comp2 is ",comp1 === comp2)
console.log("comp1 !== comp2 is ",comp1 !== comp2)
console.log("comp1 > comp2 is ",comp1 > comp2)
console.log("comp1 < comp2 is ",comp1 < comp2)
console.log("comp1 >= comp2 is ",comp1 >= comp2)
console.log("comp1 <= comp2 is ",comp1 <= comp2)

let c1 = 6;
let c2 = "6";
console.log("c1 == c2 is ",c1 == c2)
console.log("c1 === c2 is ",c1 === c2)

console.log("\n1. *********** Logical Operators ***********\n")
console.log(" && : Logical and")
console.log(" || : Logical or")
console.log(" ! : Logical not")

let x = 5;
let y = 6;
console.log(x<y && x == 5)
console.log(x < y || x == 6)
console.log(x != y)


console.log("\n-------------- Program Ends ----------------\n")