/*Реализуйте функцию которая считает площадь треугольника на основе известной стороны и прилегающих к ней углов. Углы задаются в градусах. Экспортируйте ее по умолчанию.

    Формула: Если известна одна сторона треугольника и два прилежащих к ней угла, то площадь данного треугольника вычисляется, как половина квадрата данной стороны умноженная на дробь, в числителе которой, произведение синусов прилежащих углов, а в знаменателе синус противолежащего угла.

    Противолежащий угол вычисляется по формуле: 180 - сумма двух известных углов.

solution(3, 60, 60); // 3.89711431703
Подсказки:
    Так как тригонометрические функции в Math работают с радианами, вам будет необходимо преобразовывать градусы в радианы. Напишите для этого вспомогательную функцию. Формула для расчета: градусы * пи / 180*/


let squareTriangle = function (sideTriangle, cornerTriangle1, cornerTriangle2) {

    let sinCornerTriangle1 = Math.sin(cornerTriangle1 * (Math.PI / 180));
    let sinCornerTriangle2 = Math.sin(cornerTriangle2 * (Math.PI / 180));
    let sinOppositeCornerTriangle = Math.sin((180 - (cornerTriangle1 + cornerTriangle2)) * (Math.PI / 180)) ;
    return ((sideTriangle * sideTriangle) / 2) * ((sinCornerTriangle1 * sinCornerTriangle2) / sinOppositeCornerTriangle);
};