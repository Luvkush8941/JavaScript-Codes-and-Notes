// Using prompt function we can take the input from the user 
// Note : By default it converts the input from the user into string
// So, we have to typecast it according to our necessity

const prompt = require("prompt-sync")({sigint : true});
let a = prompt("Hey what's your age ? : ")
console.log(a , " " , typeof a)

a = Number.parseInt(a) // Converting a string to a number
console.log(typeof a)

if(a > 0){

    confirm("This is a valid age")
}else{

    alert("This is a invalid age")
}


