// declaring a arrow function 

const add = (num1, num2) => num1 + num2;

const add1 = add(20, 30);
console.log(add1);

// multiline arrow function 

const mathOperation = (x, y) => {
    const add3 = x + y;
    const diff = x - y;
    const multiplication = x * y;
    const division = x / y;
    const result = add3 + diff + multiplication + division;
    return result;
}
const input = mathOperation(20, 10);
console.log(input);