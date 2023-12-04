// //sum of two numbers

function add(a:number,b:number):number
{
    return a+b 
}

 import inquirer from "inquirer";
 let answer=await inquirer.prompt([
    {
        type:'number',
        name:'num1',
        message:'enrter the first number'
    },
     {
         type:'number',
         name:'num2',
         message:'enrter the second number'
     },
 ])
   let {num1,num2} =answer;
 const result=add(num1,num2);
 console.log(result)
 
 
                 

    




