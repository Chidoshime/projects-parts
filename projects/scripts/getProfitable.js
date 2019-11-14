var getPrice = function(projectTime, urgencyProject) {
var rateProject = 1500;
  if (urgencyProject) {
  projectTime /= 2;
  rateProject *= 2.5;
  }
  if (projectTime > 150) {
  rateProject -= 250;
  }
  return projectTime * rateProject;
}

var getProfitableProject = function(projectTime, urgencyProfitProject) {
  var UrgentCost = getPrice(projectTime, true) - urgencyProfitProject;
  var NotUrgentCost = getPrice(projectTime, false);
  var message = '';
  if (UrgentCost < NotUrgentCost) {
    message = 'Выгодней срочный проект. Потратишь на него ' + UrgentCost;
    } else {
      message = 'Выгодней обычный проект. Потратишь на него ' + NotUrgentCost;
      } 
    return message;
}
  


/* Описание задания

Программа getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.

Функция с двумя параметрами:

- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.

Названия параметров projectTime, urgencyProfitProject.

Внутри функции надо сравнить два проекта: срочный и обычный.

Срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.

Функция getProfitableProject должна возвращать строку:

- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.

*/
