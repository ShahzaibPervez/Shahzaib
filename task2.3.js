//calculate area of rectangle
function calculateArea(width, height) {
    const area = width * height;
    return area;
}
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'width',
        message: 'enter the width of the number'
    },
    {
        type: 'number',
        name: 'height',
        message: 'enter the height of the number'
    }
]);
let { width, height } = answer;
let x = calculateArea(width, height);
console.log(x);
