// Note : These functions will not modify the original array.


// --------------------------- map() method -------------------------------

/*

// map() : creates a new array by performing some operation on each array element.

Syntax : 

arr.map((value , index , array)=>{

    Do operation on each element of the array
    return value
})

*/
/*

let arr = [45,23,21]

// When we want to do operations on the existing array elements then we use map else we can use for each loop.
let a = arr.map((value)=>{

    console.log(value)
    return value + 1
})

console.log(a)

// We can take the value from the array , index from the array  and array itself in the map function.
let b = arr.map((value , index , array)=>{

    console.log(value , index , array)
    return value + index
})

console.log(b)

*/


// ------------------------ filter() method -------------------------

/*

// filter() : filters an array with avlues that passes a test. Creates a new array 

let arr2 = [45,23,21,0,3,5]

let ans = arr2.filter((value) =>{

    return value < 10 // So, those values which are less than 10 will be inserted in the array ans.
})

console.log(ans)

let ans2 =  arr2.filter((value) =>{

    return value % 5 == 0 // So, those values which are less than 10 will be inserted in the array ans.
})

console.log(ans2)

*/

// ---------------------- reduce() method ---------------------
// It reduces an array to a single value

// Syntax : array.reduce(function_name)
// Returns a value.

let arr2 = [1, 2, 3, 5, 2, 1]


// yo1 = 1  and yo2 = 2 ---> initially 1 + 2 = 3
// result + 3 i.e 3 + 3 = 6
// 6 + 5 = 11
// 11 + 2 = 13
// 13 + 1 = 14
// Output : 14

// Even we can pass a function name in the reduce method.
let new_arr = arr2.reduce((yo1 , yo2) => {

        return yo1 + yo2
})

console.log(new_arr)
