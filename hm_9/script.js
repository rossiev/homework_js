let sport = {
 dumbbells: 20,
 balls: 20,
 sportsNutrition: {
  protein: 10,
  aminoAcids: 15,
  fatburners: 5
 }
};

sport.vit = 30; //добавляем витамины

console.log(sport.balls); //находим мячи

delete sport.sportsNutrition.fatburners; // удаляем жиросжигатели

console.log(sport.sportsNutrition.fatburners); //проверяем удаление

console.log('protein' in sport.sportsNutrition); //находим протеин в массиве

//высчитываем кол-во единиц товара на складе

let sum = 0; //задаем сумму
for (key in sport){
 sum += sport[key]; //создаем цикл и проходимся по каждой позиции
}

console.log(sum); //выводим результат в консоль