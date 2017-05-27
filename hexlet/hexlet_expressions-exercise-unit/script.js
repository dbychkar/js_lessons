// Реализуйте функцию square, которая возвращает квадрат числа.
// Реализуйте функцию sumOfSquares, которая возвращает сумму квадратов двух чисел.
// Реализуйте функцию squareSumOfSquares, которая возвращает квадрат суммы квадратов двух чисел.

'use strict';

let square = function (num) {
  return num * num;
};
console.log(square(4));

let sumOfSquares = function(num1, num2) {
  return square(num1) + square(num2);
};

console.log(sumOfSquares(10, -9));

let squareSumOfSquares = function (someNum1, someNum2) {
    return sumOfSquares(someNum1, someNum2) * sumOfSquares(someNum2, someNum1);
};

console.log(squareSumOfSquares(4, 4));
