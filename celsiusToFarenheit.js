//simple cob=nvertion to Farenheit from Celsius using js function.

function celsiusToFarenheit(temp){ //declaring the function.
    let farenheit = 0; //taking a variable to store the temparature value.
    farenheit = temp * 1.8 + 32; //formula for converting to farenheit 'x * 9/5 + 32'
    return farenheit; //returning the value for the function.
}
var mytempareture = celsiusToFarenheit(32);
console.log(mytempareture, "F");