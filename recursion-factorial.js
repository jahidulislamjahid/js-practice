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

function factorial(n){ //declaring the function.
    if(n==1){ //condition.
        return 1; //returning the value.
    }
    return n* factorial(n-1); //law of factorial 'n! = n * (n-1)!'
}

let myNumber = factorial(7); //providing the number for factorial.
console.log(myNumber);