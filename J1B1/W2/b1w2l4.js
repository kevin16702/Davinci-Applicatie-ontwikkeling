//Kevin Bouwmeester
//applicatie ontwikkeling
const small = 5;
const medium = 7;
const large = 9;
var aantalkl = prompt('Hoeveel kleine pizzas wil je');
var totkl = aantalkl * small;
document.write('<br>' + aantalkl + ' kleine pizzas : ' + totkl + ' euro' );
var aantalmed = prompt('Hoeveel medium pizzas wil je');
var totmed = aantalmed * medium;
document.write('<br>' + aantalmed + ' medium pizzas : ' + totmed + ' euro');
var aantalgrt = prompt('Hoeveel grote pizzas wil je');
var totgrt = aantalgrt * large;
document.write('<br>' + aantalgrt + ' large pizzas : ' + totgrt + ' euro');
var Totaalprijs = totkl + totmed + totgrt;
document.write('<br> totaal : ' + Totaalprijs + ' euro');