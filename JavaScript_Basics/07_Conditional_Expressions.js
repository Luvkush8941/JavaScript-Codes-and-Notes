const prompt = require("prompt-sync")({sigint : true});

// If else statements

let age = parseInt(prompt("Enter your age : "));

console.log("\n--------------- Using if-else and else-if statements ---------------\n")

if(age < 18){

    console.log("Invalid age for voting");

}else if(age >= 18){

    console.log("You can vote now.");

}else{
    
    console.log("Kindly write the Valid age.");
}

// switch statements 

console.log("\n--------------- Using switch statements ---------------\n")

let permission = prompt("You want to play or not : ")

switch(permission){

    case "play":
        console.log("You can play now.")
        break
    
    case "not play":
        console.log("You cannot play.")
        break // it means go out of the block no need to read the below code of this switch block.
    
    default:
        console.log("Not sure.")
        break // it means go out of the block.
}

// Ternary operators

console.log("\n--------------- Using ternary operators ---------------\n")

console.log("You can :", age<18 ? "cannot drive" : "drive");

