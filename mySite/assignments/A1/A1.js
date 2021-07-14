function myDonut() {
    var birthMonth = prompt("What month were you born? Type the first 3 letters in all caps below.");

    var favNum = prompt("Great! Now pick a number from 1 to 10");

    var donutFlavour
    var donutTopping

    switch(birthMonth) {
        case "JAN":
            donutFlavour = "triple chocolate";
            break;
        case "FEB":
            donutFlavour = "lemon filled";
            break;
        case "MAR":
            donutFlavour = "honey flavoured";
            break;
        case "APR":
            donutFlavour = "jelly filled";
            break;
        case "MAY":
            donutFlavour = "blueberry";
            break;
        case "JUN":
            donutFlavour = "glazed cruller";
            break;
        case "JUL":
            donutFlavour = "Canadian maple";
            break;
        case "AUG":
            donutFlavour = "Boston Cream";
            break;
        case "SEP":
            donutFlavour = "apple fritter";
            break;
        case "OCT":
            donutFlavour = "cinnamon roll";
            break;
        case "NOV":
            donutFlavour = "strawberry";
            break;
        case "DEC":
            donutFlavour = "birthday cake";
            break;
    }


    switch(favNum) {
        case "1":
            donutTopping = "nothing on top";
            break;
        case "2":
            donutTopping = "a powdered sugar coating";
            break;
        case "3":
            donutTopping = "a classic vanilla glaze";
            break;
        case "4":
            donutTopping = "a white chocolate drizzle";
            break;
        case "5":
            donutTopping = "a cinnamon sugar coating";
            break;
        case "6":
            donutTopping = "a dollop of whipped cream";
            break;
        case "7":
            donutTopping = "strawberry glaze";
            break;
        case "8":
            donutTopping = "chopped candied nuts on top";
            break;
        case "9":
            donutTopping = "a mountain of rainbow sprinkles";
            break;
        case "10":
            donutTopping = "chocolate glaze";
            break;
    }

var message = "You are a " + donutFlavour + " donut with " + donutTopping + "! Mmm, my favourite!";
console.log(message);
    
}