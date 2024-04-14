"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt("enter your first num: "));
var n2 = parseInt(prompt("enter your second num: "));
var operator = (prompt("enter tour operator(+,-,*,/): "));
if (operator == "+") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
else if (operator == "-") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 - n2));
}
else if (operator == "*") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 * n2));
}
else if (operator == "/") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 / n2));
}
else {
    console.log("please enter correct operator");
}
;
