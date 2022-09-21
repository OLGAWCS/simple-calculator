let firstValue = 1;
let Operator = "+";
let secondValue = 2;

firstValue = parseInt(prompt("What's your first value?"));
secondValue = parseInt(prompt("What's your second value?"));
Operator = prompt("What's your operator?");

switch (Operator) {
    case "+": console.log(firstValue + secondValue);
        break;
    case "-": console.log(firstValue - secondValue);
        break;
    case "*": console.log(firstValue * secondValue);
        break;
    case "/": console.log(firstValue / secondValue);
        break;
    default: console.log("Invalide operator");
}
const random = Math.floor(Math.random() * 100) + 1;
userName = prompt("What's your Name?");
let userValue = 0;
while ((userValue < random) || (userValue > random)) {
    userValue = parseInt(prompt(userName + ", what's your new number?"));
    if (userValue > random) {

        console.log("It is less");

    } else {
        console.log("It is more");
    }

}; console.log(userName + "wins!!!!!")

