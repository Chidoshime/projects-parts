  var firstPlayer = {
  name: 'Ronaldo',
  goals: 30,
  passes: 20
  }

  var secondPlayer = { 
  name: 'Rashford',
  goals: 25,
  passes: 15
}


var totalGoals = 0;

var players = [firstPlayer, secondPlayer];

var getStatistics = function (players) {
for(var j = 0; j < players.length; j++){
totalGoals += players[j].goals;
}

for(var i = 0; i < players.length; i++){
players[i].coefficient = players[i].goals*2+players[i].passes;
players[i].percent = Math.round(players[i].goals*100/totalGoals);
}
return players;

};



/* 

Программа, которая подсчитывает полезность и результативность игроков на основе их статистики. Код в виде функции getStatistics с одним параметром — массивом игроков.

Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).

Функция возвращает этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности (свойство coefficient) и результативность (свойство percent).

Коэффициент полезности: умножить голы игрока на 2 и прибавить к этому значению все голевые пасы футболиста.

Результативность (процент забитых мячей футболиста от результата всей команды): сумма голов всех игроков и то, сколько процентов от этого числа забил каждый футболист. 

*/
