"use strict";
var greet = function () {
    console.log("hello");
};
var anotherGreet;
anotherGreet = function () {
    console.log("hi there");
};
var add = function (a, b) {
    console.log(a + b);
};
add(5, 10);
var subtract = function (a, b, c) {
    console.log(a - b);
    console.log("The optional argument is: " + c);
};
subtract(5, 10, "Simon");
subtract(4, 9);
var plus = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log("The optional argument is: " + c);
};
plus(5, 10, "Simon");
plus(4, 9);
var plusCalculation = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log("The optional argument is: " + c);
};
plusCalculation(5, 10, "Simon");
plusCalculation(4, 9);
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
var minusCalculation = function (a, b) {
    return a - b;
};
var output = minusCalculation(6, 2);
