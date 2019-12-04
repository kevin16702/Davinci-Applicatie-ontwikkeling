var weekdagen = [" maandag", " dinsdag", " woensdag", " donderdag", " vrijdag", " zaterdag", " zondag"];
document.write("alle dagen van de week zijn <br>", weekdagen, "<br> <br>");
document.write("de werkdagen zijn <br>", weekdagen.slice(0, 5), "<br> <br>");
document.write("de weekenddagen zijn <br>", weekdagen.slice(5, 7), "<br> <br>");
document.write("alle dagen van de week in omgekeerde volgorde zijn <br>", weekdagen.reverse(0, 7), "<br> <br>");
document.write("alle werkdagen van de week in omgekeerde volgorde zijn <br>", weekdagen.slice(2, 7), "<br> <br>");
document.write("alle weekenddagen van de week in omgekeerde volgorde zijn <br>", weekdagen.slice(0, 2), "<br> <br>")