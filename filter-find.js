/* 
filter will give an array of output of all matching elements.
while filter cant find any matchinfg elemnts it will give an empty array.
find will give only the first matched element directly.
*/


const numbers = [20, 50, 56, 89, 45, 10, 250, 60, 100, 500];
const biggerNumber = numbers.filter(number => number > 50);
const bigNUmber = numbers.find(numb => numb > 50);
console.log(biggerNumber);
console.log(bigNUmber);