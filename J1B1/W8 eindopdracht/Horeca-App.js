var bier = 2;
var bieraantal;
var biertotaal = 0;
var wijn = 2.5;
var wijnaantal;
var wijntotaal = 0;
var fris = 1.5;
var frisaantal;
var fristotaal = 0;
var bitterballen = 0.5;
var bitterballenaantal
var bitterballentotaal = 0;
var aantal;
function bestellen(order) {
    if(order === "fris"){
        frisaantal = parseInt(prompt("hoeveel?"));
        fristotaal = frisaantal + fristotaal;
        document.write("fris", " x ", frisaantal, " = € ", fris*frisaantal, "<br>");
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
    else if(order === "bier"){
        bieraantal = parseInt(prompt("hoeveel?"));
        biertotaal = bieraantal + biertotaal;
        document.write("bier", " x ", bieraantal, " = € ", bier*bieraantal, "<br>");
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
    else if(order === "wijn"){
        wijnaantal = parseInt(prompt("hoeveel?"));
        wijntotaal = wijnaantal + wijntotaal;
        document.write("wijn", " x ", wijnaantal, "= € ", wijn*wijnaantal, "<br>")
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
    else if(order === "bitterballen"){
        bitterballenaantal = parseInt(prompt("hoeveel?", "6 of 12"));
        if(bitterballenaantal = "6"){
            bitterballentotaal = 12 + bitterballentotaal;
            document.write("1 kleine portie bitterballen = €6 <br>");
            bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
        }
        else if(bitterballenaantal = "12"){
            bitterballentotaal = 6 + bitterballentotaal;
            document.write("1 grote portie bitterballen = €3");
            bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
        }
    }
    else if(order === "stop"){
        document.write("<br>")
        uitrekenen();
    }
    else{
        alert("dit kunt u niet invoeren");
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
}
function uitrekenen() {
    fristotaal = fristotaal * fris;
    biertotaal = biertotaal * bier;
    wijntotaal = wijntotaal * wijn;
    bitterballentotaal = bitterballentotaal * bitterballen;
    if (frisaantal > 0){
        document.write("fris x ",frisaantal, " = € ", fristotaal, "<br>");
    }
    else{}   
    if (bieraantal > 0){
        document.write("bier x ", bieraantal, " = € ", biertotaal, "<br>")
    }
    else{}
    if (wijnaantal > 0){
        document.write("wijn x ", wijnaantal, " = € ", wijntotaal, "<br>")
    } 
    else{}
    if (bitterballenaantal > 0){
        document.write("bitterballen = € ", bitterballentotaal, "<br>")
    }
    document.write("totaal = € ",wijntotaal+fristotaal+biertotaal+bitterballentotaal)
}
bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
