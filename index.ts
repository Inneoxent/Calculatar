import inquirer from "inquirer";
import chalk from "chalk";

const answers :{
    
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
   
    { type: "number",
    name: "numberOne",
    message: "Enter your firsr number"
 },
 
 { type: "number",
    name: "numberTwo",
    message: "Enter your second number"
 },
 
 {type: "list",
  name: "operator",
  message: " Enter your operator",
  choices: ["+","-","*","/"]
      
  },
])

const {numberOne, numberTwo, operator} = answers;

let result
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
        
        case "-":
        result = numberOne - numberTwo;
        break;
         
        case "*":
            result = numberOne * numberTwo;
            break;

            case "/":
            result = numberOne / numberTwo;
            break;

    default:
        break;
        console.log("Invalid operator");
}
 console.log(`${numberOne}  ${operator}  ${numberTwo} = ${result}`) ;
