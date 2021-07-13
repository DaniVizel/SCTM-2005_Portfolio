console.log("Daniella's budget");

var rent = 0;
var food = 200;
var transit = 100;
var entertainment = 50;
var clothing = 100;
var creditCard = 500;
var savings = 400;

var expenses = rent + food + transit + entertainment + clothing + creditCard + savings;
// console.log("total expenses", expenses);

var salary = 1600;
// console.log("salary", salary);

var leftOver = salary - expenses;
// console.log("left over cash", leftOver);

var message = "After paying all expenses, you have $" + leftOver.toFixed(2) + " spare cash"; //toFixed will limit number of decimal places
console.log(message);