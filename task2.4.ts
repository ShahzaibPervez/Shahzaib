//reversing the string
function reverseString(str:string){
const reverseString=str.split('').reverse().join()
return reverseString
}
import inquirer from "inquirer";
const result=await inquirer.prompt([{
    type:'string',
    name:'str',
    message:'enter a string'
}])
const reversedString = reverseString(result.str);
    console.log( `orignalstring:${result.str}`);
    console.log(`reverse string:${reversedString}`);
