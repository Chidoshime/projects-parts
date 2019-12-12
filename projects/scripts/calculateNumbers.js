var calculate = function(firstNumber,secondNumber,operator) {
switch (operator) {
case "*":
return parseInt(firstNumber,10)*parseInt(secondNumber,10);
case "/":
return parseInt(firstNumber,10)/parseInt(secondNumber,10);
case "+":
return parseInt(firstNumber,10)+parseInt(secondNumber,10);
case "-":
return parseInt(firstNumber,10)-parseInt(secondNumber,10);
  }
}