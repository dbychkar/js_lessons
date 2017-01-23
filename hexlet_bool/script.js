/**
 * Created by dima on 23.01.2017.
 *Реализуйте и экспортируйте функцию isBigOdd, которая:

 Возвращает true в том случае, если переданный параметр это нечетное число, которое больше или равно 1001.
 Возвращает false в остальных случаях.
 */



export function isBigOdd (num) {
    if (num >= 1001 && num % 2 === 1){
        return true;
    } else{
        return false;
    }
}

