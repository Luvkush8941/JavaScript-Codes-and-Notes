let num = [3,54,1,2,4]

/*
for(let i = 0; i < num.length ; i++){

    console.log(num[i])
}

*/

// For each loop
// Calls a function once for each array element.
num.forEach(element => {
    
    console.log(element*element)
});

// Array from --> used to create an array from any other object.
// Ex : Array.from("Luvkush")

let Name = "Luvkush"
let arr = Array.from(Name) // We had created an array from a string.
console.log(arr)


// for of loop : can be used to get the values from an array
for (let item of num){

    console.log(item)
}


// for - in loop : can be used to get the keys from an array
// In case of array key's are the index of the elements.
for (let i in num){

    console.log(i , "--->" , num[i])
}
