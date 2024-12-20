const prompt = require("prompt-sync")()

function getNumber(numberString){
    while (true){
        number = parseFloat(prompt("Enter Number " + numberString +": "))
        if (isNaN(number)){
            console.log("Invalid Input")
        }else{
            return number
        }
    }
}

const number1 = getNumber("One")
const number2 = getNumber("Two")
const operator = prompt("Enter a sign: ")

switch (operator){
    case "+":
        console.log("Result is : ", number1 + number2)
        break;
    case "-":
        console.log("Result is : ", number1 - number2)
        break;
    case "*":
        console.log("Result is : ", number1 * number2)
        break;
    case "/":
        if (number2 != 0) {
            console.log("Result is : ", number1 / number2)
            } else {
                console.log("Error : Division by zero is not allowed")
            }
            break;
    default:
        console.log("Invalid Operator")
        break;
}

                    
