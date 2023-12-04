//converting temperature celcius to farenheight
function convertCeiciousToFarenheit(degree) {
    let farenheight = (degree * 9 / 5) + 32;
    console.log(`temperature in farenheight:${farenheight}`);
    return;
}
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        type: 'number',
        name: 'degree',
        message: 'enter temperature in celcious'
    }]);
let degree = answer.degree;
convertCeiciousToFarenheit(degree);
