var array = [];
function piramide(){
var number = prompt("vul een getal in van 1 t/m 20");
number = parseInt(number);
var amount = number;
if(number >=1 && number <=20){
    for(e=0; e<number + 1; e++){
        array[e] = e;
        document.write(e + " ")
    }
    document.write("<br>")
    for(i=0;  i<number + 1; i++){
        for(o=0; o < amount + 1; o++){
            document.write(array[o])
        }
       document.write("<br>");
       amount--
    }
}



else{
piramide();
    }
}

piramide();
console.log(number, numberarray, amount)