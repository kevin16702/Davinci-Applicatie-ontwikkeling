//Kevin Bouwmeester
//applicatie ontwikkeling
const small = 5;
const medium = 7;
const large = 9;
var aantalkl = prompt('Hoeveel small pizzas wil je');
var aantalmed = prompt('Hoeveel medium pizzas wil je');
var aantalgrt = prompt('Hoeveel grote pizzas wil je');
var Totaalprijs = (small * parseInt(aantalkl)) + (medium * parseInt(aantalmed)) + (large * parseInt(aantalgrt));
alert(parseInt(Totaalprijs + 'dit is het te betalen bedrag'))