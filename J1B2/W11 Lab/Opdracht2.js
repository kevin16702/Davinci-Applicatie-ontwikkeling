var namenarray = [];
function namen(){
    var aantal = prompt("hoeveel namen wil je invullen, minimaal 3");
    if(aantal >= 3){
        for(i=1; i<=aantal; i++){
            namenarray.push(prompt("vul een naam in"))
        }
    }
    else if(aantal < 3){
        namen();
    }
    document.write("de ingevoerde namen zijn ", namenarray, "<br><br>")
    namenarray.reverse();
    document.write("de ingevoerde namen in omgekeerde volgorde zijn ", namenarray)
}
namen();