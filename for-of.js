/* 
creating a new array of number where no repeated number is present or getting a array with no duplicate number/elements using 'for of' loop.
*/


const numbers = [50, 60, 85, 92, 45, 50, 25, 89, 95, 92, 60, 92, 25, 50] //array
const unique = [] //declaring a new array with no element to hold new elements.
function uniqueNumbers(numbers){ //declaring a function.
    for (const number of numbers){ //declaring for of & constant variable 'number'.
        if (unique.indexOf(number) == -1){//condition to check if the element is there
            unique.push(number); //adding an element if it is not already present.
        }
    }
    return unique; //returning the value of the new array.
}
const uniqueNUmber = uniqueNumbers(numbers); //calling the function.
console.log(uniqueNUmber);