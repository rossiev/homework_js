let a = prompt('Введите число для вычисления факториала', 0);

function factorial(){
 let result = 1;
 for(a; a >= 2;a--){
  result *= a;
 }
 alert(result)
};

factorial();