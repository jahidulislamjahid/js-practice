// fibonacci formula 'nth = (n-1)th + (n-2)th'

const fibo = [0,1]
for(let i = 2; i<=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);


/* 
fibonacci using function.
*/

function fibonacci(number){
    if(typeof number != 'number'){
        return 'please input a number'
    }
    else if(number<2){
        return 'please innput a positive number greater than 2'
    }
    const fibo = [0,1]
    for(let i = 2; i<number; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
let myNumber = fibonacci(3);
console.log(myNumber);