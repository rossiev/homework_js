let a = prompt('Введите число', 0);

let b = prompt(`В какую степень возвести число ${a}?`);

function pow(){
 let result = a;
 for (let i = 1; i < b; i++){
  result *= a;
 }
 alert (result);
}

pow();