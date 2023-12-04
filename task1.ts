import inquirer from "inquirer";
  let customerWants = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What do you want',
      choices: ['fruits', 'vegetables']
    }
  ]);

  let fruitItems: string[] = ["Apple", "Banana", "Orange"];
  let vegetableItems: string[] = ["Carrot", "Broccoli", "Spinach"];
    //fruite items with prices
  let fruitPrices = {
    "Apple": 15,
    "Banana": 0.75,
    "Orange": 20
  };
    //vegetable items with prices
  let vegetablePrices= {
    "Carrot": 10,
    "Broccoli": 5.75,
    "Spinach": 2.5
  };

  if (customerWants.choice === "fruits") {

    console.log(`Available fruits: ${fruitItems}`);
    // Assuming the customer wants Apple and Banana
    console.log('selected items: Apple, Banana');
                     //Fruit's total bill and discounted bill 
    let totalBill=fruitPrices.Apple+fruitPrices.Banana;
    console.log(`Total bill is:${totalBill}`)
    if(totalBill<=7){
        totalBill=fruitPrices.Apple+fruitPrices.Banana;
        console.log(`Bill without discount is:${totalBill}`)

     }
     //apply 10% discount if the total bill is above 7 dollar
    if(totalBill>7){
        totalBill=0.1*(fruitPrices.Apple+fruitPrices.Banana);
        console.log(`Bill with discounted is:${totalBill}`)
    }
    
    }
  
  else if (customerWants.choice === "vegetables") {
    console.log(`Available vegetables:${vegetableItems}`);
    
    //Assuming the customer wants Carrot and Spinach
    console.log("Selected items: Carrot, Spinach");
                     //displaying bill
    let totalBill=vegetablePrices.Spinach+vegetablePrices.Carrot;
    console.log(`Total bill is:${totalBill}`)
    if(totalBill<=10){
        totalBill=vegetablePrices.Spinach+vegetablePrices.Carrot;
        console.log(`bill without disciunt:${totalBill}`)


    }
    //apply 10% discount if the total bill is above 10 dollar
    if(totalBill>10){
        totalBill=0.1*(vegetablePrices.Spinach+vegetablePrices.Carrot);
        console.log(`bill with disciunt:${totalBill}`)
    }
    
     
   
  }

  else {
    console.log("Invalid choice. Please choose either 'fruits' or 'vegetables'.");
  }
  

  
  import * as readlineSync from 'readline-sync';
  console.log('Choose a payment method:');
  let paymentMethods = ['Credit Card', 'Debit Card', 'Cash'];
  
  for (let i = 0; i < paymentMethods.length; i++) {
    console.log(`${i + 1}. ${paymentMethods[i]}`);
  }
  
  let choice = -1;
  
  while (choice < 1 || choice > paymentMethods.length) {
    choice = readlineSync.questionInt('Enter the number for your choice: ');
  }
  
  let paymentMethod = paymentMethods[choice - 1];
  console.log(`Processing payment with ${paymentMethod}...`);
  
  let paymentConfirmed = false;
  
  for (let i = 0; i < paymentMethods.length; i++) {
    if (paymentMethod === paymentMethods[i]) {
      console.log(`Payment successful with ${paymentMethod}.`);
      paymentConfirmed = true;
      break;
    }
  }
  
  if (!paymentConfirmed) {
    console.log('Invalid payment method.');
  }
            
