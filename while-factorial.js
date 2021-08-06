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

/*
    getting factorial value of a number by taking the value of the given number directly in the variable 'i' and decreasing the value of 'i' up to 1 
*/

function fact(myNum){
    let digit = 1;
    let i = myNum;
    while(i>=1){
        digit = digit * i;
        i--;
    }
    return digit
}
let getnumber = fact(7);
console.log(getnumber);