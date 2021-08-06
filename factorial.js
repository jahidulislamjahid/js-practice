// simple factorial operation 

var factorial = 1; //declaring the variable for factorial 
for (var i = 1; i <=7; i++){
    factorial = factorial * i;
}
console.log(factorial);

// factorial using function 

function getFactorial(num){ //declaring a function.
    let number = 1; //taking a variable to store the multiplied number.
    for (let i = 1; i <= num; i++){ //taking multiplier 'i' increasing value of i.
        number = number * i; //multiplying increased 'i' & storimg it in 'number'
    }
    return number;  //returning the value of number for function.
}
var fact = getFactorial(7); //giving a number to the function by calling it.
console.log(fact);