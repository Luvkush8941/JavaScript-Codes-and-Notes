/*
// ------------- For loop ------------

for(let i = 1; i <= 10 ; i++){

     console.log(i)
}

*/


/*

// ------------- For in loop ---------------

// For in loop is used to get the keys from the object
// Object creation where  keys are name and values are denoting the marks
let obj = {

      luvkush : 09,
      hemendra : 56,
      vaibhav : 78,
      shiva : 67,
      mohit : 34,
      dheeraj : 12
} 

// Here we will get the keys from obj
for (let key in obj){

    console.log("Marks of " + key + " are : " + obj[a])
}

// For in loop also works with arrays.

*/



// ------------- For of loop ---------------

// It is used to get the values from the object.
// Note object should be iterable.

let obj = {

    luvkush : 09,
    hemendra : 56,
    vaibhav : 78,
    shiva : 67,
    mohit : 34,
    dheeraj : 12
} 

// It gives an error as obj is not iterable.
// for (let value of obj1){

//     console.log(value)
// }

for (let k of "india"){

    console.log(k)
}


