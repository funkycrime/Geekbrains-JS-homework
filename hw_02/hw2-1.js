//ДЗ ПО МЕТОДИЧКЕ
//Задание 1. Почему данный код дает такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - потому что сначала прибавляем 1 к а, а потом записываем итоговое значение в с
d = b++; alert(d); // 1 - потому что сначала присваиваем значение b, а потом плюсуем, но тут операция не проходит, потому что значение уже присвоено, соответственно, оно не меняется
c = (2+ ++a); alert(c); // 5 - из первого выражения а=2, следовательно 2+(1+2)=5
d = (2+ b++); alert(d); // 4 - мы увеличили b на 1 во втором выражении, соответственно, тут 2+2=4
alert(a); // 3 - а увеличили последний раз в строке 6 и запомнили ее значение
alert(b); // 3 - b увеличили последний раз в строке 7 и запомнили ее значение


//Задание 2. Чему будет равен пример ниже?

var a = 2;
var x = 1 + (a *= 2); //5


/* Задание 3. Объявить две целочисленные переменные a и b и задать им произвольные значения. Написать скрипт, который работает по следующему принципу: 1) если a и b положительные - вывести их разность, 2) если a и b отрицательные - вывести их произведение, 3) если a и b разных знаков - вывести сумму. Ноль можно считать положительным числом. */

var a = 6;
var b = 8;

if ((a>=0) && (b>=0)) {
  console.log(a-b);
} else if ((a<=0) && (b<=0)) {
  console.log(a*b);
} else if (((a<=0) || (a>=0)) && ((b<=0) || (b>=0))) {
  console.log(a+b);
}


/* Задание 4. Присвоить var a значение в промежутке [0...15]. С помощью оператора switch организовать вывод чисел от a до 15. */

var a = 0;

switch(a) {
  case 0:
    console.log(a++);
  case 1:
    console.log(a++);
  case 2:
    console.log(a++);
  case 3:
    console.log(a++);
  case 4:
    console.log(a++);
  case 5:
    console.log(a++);
  case 6:
    console.log(a++);
  case 7:
    console.log(a++);
  case 8:
    console.log(a++);
  case 9:
    console.log(a++);
  case 10:
    console.log(a++);
  case 11:
    console.log(a++);
  case 12:
    console.log(a++);
  case 13:
    console.log(a++);
  case 14:
    console.log(a++);
  case 15:
    console.log(a);
    break;
 }


/* Задание 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */

function sumFunc(x,y) {
  return(x+y);
}
sumRes = sumFunc(3,4);
console.log(sumRes);

function substractionFunc(x,y) {
  return(x-y);
}
substractionRes = substractionFunc(98, 76);
console.log(substractionRes);

function multiFunc(x,y) {
  return(x*y);
}
multiRes = multiFunc(7,3);
console.log(multiRes);

function divisionFunc(x,y) {
  return(x/y);
}
divisionRes = divisionFunc(6,2);
console.log(divisionRes);

/* Задание 6. Реализовать функцию с 3 параметрами: function mathOperation(arg1, arg2, operation), где arg1 и arg2 - значения аргументов, а operation - строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (см. задание 3) и вернуть полученное значение (использовать switch). */
// Не придумала, как это сделать.


/* Задание 7. Сравните null и 0. Попробуйте объяснить результат. */
/* Результат - false, т.к. null значит пустое значение, т.е. в переменной ничего не записано, она оставлена пустой, а 0 - определенное значение, по умолчанию - false. При сравнении false с пустотой получается false, потому что это значения, которые нельзя сравнить. */


/* Задание 8. С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val - заданное число, а pow - степень. */

