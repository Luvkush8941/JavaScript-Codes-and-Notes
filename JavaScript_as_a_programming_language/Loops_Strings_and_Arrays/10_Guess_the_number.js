/*

Write a JavaScript program to generate a random number and store it in a variable. The program
then takes an input from the user to tell them whether the guess was correct , greater or lesser than original number.
100 - (number of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1-100.  


*/

console.log("\n----------------------- Welcome to the Guess a number Program -----------------------\n");

let Random_Number = Math.floor(Math.random() * 100) + 1;

let flag = true;
let steps = 0;

while(flag){

    const prompt = require("prompt-sync")({sigint : true});
    let a = parseInt(prompt("Enter the number : "));

    if(a == Random_Number){

          flag = false;

    }else if(a > Random_Number){

        console.log("Kindly enter a smaller number.");
        steps += 1;

    }else{

        console.log("Kindly enter a larger number.");
        steps += 1;
    }
}

let ans = 100 - steps;

console.log("\nCongratulations !!!")
console.log("You had successfully find the number with " , ans , " left steps");

console.log("\n----------------------- Program Ends -----------------------\n");
