console.log("Welcome to the Magic Future Age Teller!");

var birthYear = prompt("What year were you born?"); // prompt will return a string!!
// console.log(birthYear);
// console.log(typeof(birthYear));

var futureYear = prompt("What year into the future would you like to look?");
//console.log(birthYear, futureYear);

var age1 = Number(futureYear) - Number(birthYear);
var age2 = age1 - 1;

var message = "Hmmm.... In your future I sense that you will be either " + age2 + " or " + age1 + " years old in the year " + futureYear + ".";
console.log(message);