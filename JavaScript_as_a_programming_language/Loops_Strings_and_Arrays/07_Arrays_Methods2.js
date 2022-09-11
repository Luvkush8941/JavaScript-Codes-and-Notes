let num = [1,2,3,4,4,56,8,9]

// ----------- Delete operator --------------
// It deletes element from the array without affecting it's original length.

delete num[0]
console.log(num , " " , num.length)

//  ------------- Concat method -----------

let num1 = [34,56,78,90]
let num2 = [1234,5567,78654,7765,2356]

let num3 = num.concat(num1,num2)
console.log(num3)

// ------------- Sort method ---------------

let num4 = [56,23,1,2,67,12,21,5]

// sort method is sorting the num4 alphabetically
num4.sort()
console.log(num4)

// Now, to sort the numbers actually we have to below

let compare = (a,b)=>{

    return a-b
}

num4.sort(compare)
console.log(num4)


// ------------- reverse method -------------

num4.reverse()
console.log(num4)

// ---------- Splice method ------------

let num5 = [1,2,3,4,5,566,7,89]

// Syntax : array.splice(starting index , number of elements to be added , numbers)
// And it returns the deleted values

let deletedValues = num5.splice(2 , 3 , 22,22,22) // deletes 3,4 and 5
console.log(deletedValues)

// ---------- Slice method ------------

num5.slice(3)
console.log(num5) // It donot modifies the original array 

let num6 = num5.slice(3) // slice the array from index 3 to the end
console.log(num6)

let num7 = num5.slice(3,5)
console.log(num7)




