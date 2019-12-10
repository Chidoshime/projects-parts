

/* Техническое задание

Программа, которая будет анализировать суточный рацион.

Функция getDiet. Принимает два параметра: массив с калорийностью блюд и лимит калорий на день. 

Программа должна возвращать количество блюд из массива, которые я можно съесть и не превысить допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.

*/

var getDiet = function (calorieIntake, limitDay) {
var quantity = 0;
var limit = 0; for (i = 0; i < calorieIntake.length; i++) {

limit += calorieIntake[i];
console.log(limit);

if (limit <= limitDay) {
quantity += 1;
} else {
    break;
  }
}

return quantity;

}