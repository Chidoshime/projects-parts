var incomeTax = 13;
var contributions = 30;
var SalaryTax, SalaryContributions;

var calculateExpences = function(netSalary) {
  // Грязная зарплата SalaryTax = чистая + ндфл
  SalaryTax = netSalary + (netSalary / 0.87) * (incomeTax / 100);
  // Взносы от грязной = грязная * взносы
  SalaryContributions = SalaryTax * (contributions / 100);
  calculateExpences = Math.round(SalaryTax + SalaryContributions);
  return calculateExpences;
  }

  /*
calculateExpences вычисляет ежемесячные затраты компании на сотрудника из «чистой» зарплаты работника.

Функция принимает параметр netSalary – это «чистая» зарплата после вычета налогов.

В переменную incomeTax записан размер НДФЛ в процентах.

В переменной contributions указан общий размер взносов в процентах.

Функция возвращает общие затраты компании на сотрудника. 

*/