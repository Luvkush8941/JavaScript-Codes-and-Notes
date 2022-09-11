// Arrays are variables which can hold more than one variable.
// Arrays are object and they are immutables

let a = [undefined,2,false,4,5,6,null,8,"Not present"]

console.log(a , " " , typeof a)
console.log(a[100]) // this index is not present in the array 'a' so, we will get undefined here but in case of C we will get an error.

// ------- Changing the existing value of the array --------
a[5] = "India and uttarpradesh"

a[10] = "yo"
console.log(a[10])

// ------------- Traversing through array -----------------

for(let i = 0; i < a.length ; i++){

    console.log(a[i])
}