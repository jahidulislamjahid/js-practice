/*

formula 

    (P*R*T)/100 for yearly interests.

    (P*R*T)/(100*12) for monthly interests.

*/

//calculating yearly interests from fixed deposite.

function interests(capital, duration){
    let profit = 0;
    profit = (capital*5*duration)/100;
    return profit;
}
var myInterest = interests(50000, 1);
console.log(myInterest);

//calculating monthly interests from fixed deposite.

function interests(capital, duration){
    let profit = 0;
    profit = (capital*5*duration)/(100*12);
    return profit;
}
var myInterest = interests(50000, 1);
console.log(myInterest);