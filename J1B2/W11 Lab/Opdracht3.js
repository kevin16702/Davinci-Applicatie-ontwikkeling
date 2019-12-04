var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];
for(i=0; i<=9; i++){
    document.write(arrayEen[i], " + ", arrayTwee[i], " = ", arrayEen[i] + arrayTwee[i], "<br>")
}
document.write("<br>");
for(i=0; i<=9; i++){
    document.write(arrayTwee[i], " - ", arrayEen[i], " = ", arrayTwee[i] - arrayEen[i], "<br>")
}
document.write("<br>");
for(i=0; i<=9; i++){
    document.write(arrayEen[i], " x ", arrayTwee[i], " = ", arrayEen[i] * arrayTwee[i], "<br>")
}
document.write("<br>");
for(i=0; i<=9; i++){
    document.write(arrayTwee[i], " / ", arrayEen[i], " = ", arrayTwee[i] / arrayEen[i], "<br>")
}