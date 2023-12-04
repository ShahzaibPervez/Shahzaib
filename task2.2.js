//check even or odd
function checkEvenOrOdd(num1) {
    if (num1 % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
import inquirer from "inquirer";
let num1 = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'enrter the first number'
    }
]);
let result = checkEvenOrOdd(num1);
console.log(result);
