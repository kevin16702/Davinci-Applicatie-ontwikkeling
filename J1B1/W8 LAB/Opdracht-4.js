function tafel(){
    for(e=1; e<=number; e++){
    for(i=1; i<=10; i++){
        document.write(i,"x", e, "=", (i*e), "<br>");
        }
        document.write("<br>")
    }
}
var number = prompt("welke tafels");

if(number <=10 && number >0){
    tafel(number);
}

else if(number> 10){
    alert("mag niet");
}

else{
    alert("mag gewoon niet");
}

