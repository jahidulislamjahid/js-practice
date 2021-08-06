/* 
1! = 1
2! = 2 x 1
3! = 3 x 2 x 1
4! = 4 x 3 x 2 x 1
5! = 5 x 4 x 3 x 2 x 1
6! = 6 x 5 x 4 x 3 x 2 x 1
7! = 7 x 6 x 5 x 4 x 3 x 2 x 1
8! = 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1
9! = 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1
*/

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