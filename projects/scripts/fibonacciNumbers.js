var fibonacciNumbers = [1, 1];
var numbersQuantity = 7;

for ( var i = 1; i <= numbersQuantity ; i++)
{
fibonacciNumbers.push(fibonacciNumbers[i-1]+fibonacciNumbers[i])
}