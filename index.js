let startCalculator = true;
let checkOperator = true;
let operator;
let result = 0;

function ValidateOperator() {
  while (checkOperator) {
    operator = window.prompt(
      "Which mathematical operation would you want to perform?\n [+] for Addition: [-] for Substraction: [*] for Multiplication: [/] for division\n Choose One!"
    );
    if (operator === "+") {
      checkOperator = false;
    } else if (operator === "-") {
      checkOperator = false;
    } else if (operator === "*") {
      checkOperator = false;
    } else if (operator === "/") {
      checkOperator = false;
    } else {
      alert("Incorrect operator. Please choose an operator as enlisted above");
      continue;
    }
  }
  return operator;
}

function PerformMathOperation(operator, i, j) {
  if (operator === "+") {
    result = i + j;
    return result;
  } else if (operator === "-") {
    result = i - j;
    return result;
  } else if (operator === "*") {
    result = i * j;
    return result;
  } else if (operator === "/") {
    result = i / j;
    return result;
  }
}

let num1 = parseFloat(window.prompt("Write first number"));
let num2 = parseFloat(window.prompt("Enter second number"));
ValidateOperator();
PerformMathOperation(operator, num1, num2);
alert(result);
