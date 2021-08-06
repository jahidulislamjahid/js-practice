// getting factorial value using while loop 

function factorial(number){ //declaring finction with a var 'number' to hold a value.
    let num = 1; //declaring another var for storing values.
    let i = 1; //taking multiplier 'i' .
    while(i<=number){ //limiting the 'i' to the given value. 
        num = num * i; //multiplication and storing the value to the var 'num'
        i++; //increasing the value of var 'i'
    }
    return num; //returning the calculated value to the function.
}
var myNumber = factorial(7); //giving a value by caling the function.
console.log(myNumber);