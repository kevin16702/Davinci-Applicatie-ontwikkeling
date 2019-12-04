var array = [];
var number;
var amount = 0;
function piramide(){
var number = prompt("vul een getal in van 1 t/m 20");
if(number >=1 && number <=20){
    for(e=0; e<number+1; e++){
        array[e] = e;
    }
    for(i=-2; i<number; i++){
        for(o=0; o < amount; o++){
            document.write(array[o])
        }
    
    amount = amount + 1;
    document.write("<br>");
    }
}
    


else{
piramide();
    }
}

piramide();
console.log(number, numberarray, amount)