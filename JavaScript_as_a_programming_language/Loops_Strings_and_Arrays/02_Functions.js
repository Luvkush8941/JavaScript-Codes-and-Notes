// function for finding factorial of a number

function facto(num){

        if(num == 0 || num == 1){

            return 1;
        }

        return num * facto(num-1);
}

let number = 4
let factorial = facto(number)

console.log("factorial of " + number + "! is : " + factorial)


// --------------- Arrow functions in JavaScript -----------------

const sum = (p , q)=>{

    return (p+q)
}

console.log(sum(9,10))

const hello = ()=> {

    console.log("How are you , I am toh fine.")
}

hello();

