var bier = 2;
var bieraantal;
var biereindprijs;
var biertotaal = 0;
var wijn = 2.5;
var wijnaantal;
var wijneindprijs;
var wijntotaal = 0;
var fris = 1.5;
var frisaantal;
var friseindprijs;
var fristotaal = 0;
var bitterballengroot = 6;
var bitterballenklein = 3;
var bitterballengrootaantal;
var bitterballenkleinaantal;
var bitterballengroottotaal = 0;
var bitterballenkleintotaal = 0;
var bitterballengrooteindprijs
var bitterballenkleineindprijs;
var bitterballenorder;
function bestellen(order) {
    if(order === "fris"){
        frisaantal = parseInt(prompt("hoeveel?"));
        fristotaal = frisaantal + fristotaal;
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
    else if(order === "bier"){
        bieraantal = parseInt(prompt("hoeveel?"));
        biertotaal = bieraantal + biertotaal;
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
    else if(order === "wijn"){
        wijnaantal = parseInt(prompt("hoeveel?"));
        wijntotaal = wijnaantal + wijntotaal;
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
    else if(order === "bitterballen"){
        bitterballenorder = prompt("groot of klein");
        if(bitterballenorder === "groot"){
            bitterballengrootaantal = parseInt(prompt("hoeveel?"));
            bitterballengroottotaal = bitterballengroottotaal + bitterballengrootaantal; 
            bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
        }
        else if(bitterballenorder === "klein"){
            bitterballenkleinaantal = parseInt(prompt("hoeveel?"));
            bitterballenkleintotaal = bitterballenkleintotaal + bitterballenkleinaantal;
            bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
        }
        else{
            bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
        }
    }
    else if(order === "stop"){
        document.write("<br>");
        uitrekenen();
    }
    else{
        alert("dit kunt u niet invoeren");
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
}
function uitrekenen() {
    friseindprijs = fristotaal * fris;
    biereindprijs = biertotaal * bier;
    wijneindprijs = wijntotaal * wijn;
    bitterballengrooteindprijs = bitterballengroottotaal * bitterballengroot;
    bitterballenkleineindprijs = bitterballenkleintotaal * bitterballenklein;
    
    if (frisaantal > 0){
        document.write("fris x ",fristotaal, " = € ", friseindprijs, "<br>");
    }
    else{}   
    if (bieraantal > 0){
        document.write("bier x ", biertotaal, " = € ", biereindprijs, "<br>")
    }
    else{}
    if (wijnaantal > 0){
        document.write("wijn x ", wijntotaal, " = € ", wijneindprijs, "<br>")
    } 
    else{}
    if (bitterballenkleinaantal > 0){
        document.write(bitterballenkleintotaal, "x kleine schaal = € ", bitterballenkleineindprijs, "<br>")
    }
    else{}
    if (bitterballengrootaantal > 0){
        document.write(bitterballengroottotaal, "x grote schaal = € ", bitterballengrooteindprijs, "<br>")
    }
    else{}
    document.write("<br> totaal = € ",wijneindprijs+friseindprijs+biereindprijs+bitterballenkleineindprijs+bitterballengrooteindprijs)
}
bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
