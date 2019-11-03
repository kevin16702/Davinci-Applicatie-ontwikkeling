var name, age;


function leeftijd(){
    age = prompt("leeftijd");
    document.write(age, "</br>");
}

function naam(){
    name = prompt("naam");
    document.write(name, "</br>");
}

while (name != "stop"){
    naam();
    if(name != "stop"){
        leeftijd(); 
    }
}
