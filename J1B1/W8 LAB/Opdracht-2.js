function addition(number1, number2){
    var result = number1+number2
    document.write(number1, "+", number2, "=", result, "</br>")
}
function subtraction(number3, number4){
    var result = number3-number4
    document.write(number3, "-", number4, "=", result, "</br>")
}
function multiplication(number5, number6){
    var result = number5*number6
    document.write(number5, "x", number6, "=", result, "</br>")
}
function division(number7, number8){
    var result = number7/number8
    document.write(number7, "/", number8, "=", result)
    document.write("</br>");
}
function increment(number9){
    var result = number9+1
    document.write(number9, "+", "1", "=", result, "</br>")
}
function decrement(number0){
    var result = number0-1
    document.write(number0, "-", "1", "=", result, "</br>")
}
for(i=1; i<=3; i++){
    var number1=parseInt(prompt("number1"));
    var number2=parseInt(prompt("number2"));
    addition(number1, number2);
    var number3=parseInt(prompt("number3"));
    var number4=parseInt(prompt("number4"));
    subtraction(number3, number4);
    var number5=parseInt(prompt("number5"));
    var number6=parseInt(prompt("number6"));
    multiplication(number5, number6);
    var number7=parseInt(prompt("number7"));
    var number8=parseInt(prompt("number8"));
    division(number7, number8);
    var number9=parseInt(prompt("number9"));
    increment(number9);
    var number0=parseInt(prompt("number0"));
    decrement(number0);
    }