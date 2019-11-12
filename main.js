const util = require("./myUtils.js");
const reader = require("readline-sync");
let number1 = reader.question("Please enter the start of the range = ");
let number2 = reader.question("Please enter last number of the range = ");


while(number1 > number2) {
    console.log("Your inputed numbers are invalid")
    number1 = reader.question("Please enter the start of the range = ");
    number2 = reader.question("Please enter last number of the range = ");
}

util.print(util.primeDetector(number1,number2)); 