/* 
map puuls out the elements by loop through an array and then does according to the command.
*/

const numbers = [20, 50, 56, 89, 45, 10];
/* const result = [];
const doubleit = number => number * 2;
for (const number of numbers) {
    const output = doubleit(number);
    result.push(output);
    // console.log(result);
}
console.log(result); */

const output = numbers.map(number => number * 2);
console.log(output);