var keuze = {
    "bier" : 2,
    "wijn" : 2.5,
    "fris" : 1.5,
}
var aantal = {
    "bieraantal" : 0,
    "wijnaantal" : 0,
    "frisaantal" : 0
}
var totaal = {
    "biertotaal" : 0,
    "wijntotaal" : 0,
    "fristotaal" : 0
}
var eindprijs = {
    "biereindprijs" : 0,
    "wijneindprijs" : 0,
    "friseindprijs" : 0
}

var bitterballen = {
    "groot" : 6,
    "klein" : 3
}
var bitterballenaantal = {
    "grootaantal" : 0,
    "kleinaantal" : 0
}
var bitterballentotaal = {
    "bitterballengroottotaal" : 0,
    "bitterballenkleintotaal" : 0
}
var bitterballeneindprijs = {
    "bitterballengrooteindprijs" : 0,
    "bitterballenkleineindprijs" : 0
}

function bestellen(order) {
    if(order === "fris"){
        aantal["frisaantal"] = parseInt(prompt("hoeveel?"));
        totaal["fristotaal"] = aantal["frisaantal"] + totaal["fristotaal"];
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
    else if(order === "bier"){
        aantal["bieraantal"] = parseInt(prompt("hoeveel?"));
        totaal["biertotaal"] = aantal["bieraantal"] + totaal["biertotaal"];
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
    else if(order === "wijn"){
        aantal["wijnaantal"] = parseInt(prompt("hoeveel?"));
        totaal["wijntotaal"] = aantal["wijnaantal"] + totaal["wijntotaal"];
        bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
    }
    else if(order === "bitterballen"){
        bitterballenorder = prompt("groot of klein");
        if(bitterballenorder === "groot"){
            bitterballenaantal["grootaantal"] = parseInt(prompt("hoeveel?"));
            bitterballentotaal["bitterballengroottotaal"] = bitterballentotaal["bitterballengroottotaal"] + bitterballenaantal["grootaantal"]; 
            bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));
        }
        else if(bitterballenorder === "klein"){
            bitterballenaantal["kleinaantal"] = parseInt(prompt("hoeveel?"));
            bitterballentotaal["bitterballenkleintotaal"] = bitterballentotaal["bitterballenkleintotaal"] + bitterballenaantal["kleinaantal"];
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
    eindprijs["friseindprijs"]= totaal["fristotaal"] * keuze["fris"]
    eindprijs["biereindprijs"]= totaal["biertotaal"] * keuze["bier"]
    eindprijs["wijneindprijs"]= totaal["wijntotaal"] * keuze["wijn"]
    bitterballeneindprijs["bitterballengrooteindprijs"]= bitterballentotaal["bitterballengroottotaal"] * bitterballen["groot"]
    bitterballeneindprijs["bitterballenkleineindprijs"]= bitterballentotaal["bitterballenkleintotaal"] * bitterballen["klein"]
    if (aantal["frisaantal"] > 0){
        document.write("fris x ",totaal["fristotaal"], " = € ", eindprijs["friseindprijs"], "<br>");
    }
    else{}   
    if (aantal["bieraantal"] > 0){
        document.write("bier x ", totaal["biertotaal"], " = € ", eindprijs["biereindprijs"], "<br>")
    }
    else{}
    if (aantal["wijnaantal"] > 0){
        document.write("wijn x ", totaal["wijntotaal"], " = € ", eindprijs["wijneindprijs"], "<br>")
    } 
    else{}
    if (bitterballenaantal["kleinaantal"] > 0){
        document.write(bitterballentotaal["bitterballenkleintotaal"], "x kleine schaal = € ", bitterballeneindprijs["bitterballenkleineindprijs"], "<br>")
    }
    else{}
    if (bitterballenaantal["grootaantal"] > 0){
        document.write(bitterballentotaal["bitterballengroottotaal"], "x grote schaal = € ", bitterballeneindprijs["bitterballengrooteindprijs"], "<br>")
    }
    else{}
    document.write("<br> totaal = € ",eindprijs["wijneindprijs"]+eindprijs["friseindprijs"]+eindprijs["biereindprijs"]+bitterballeneindprijs["bitterballenkleineindprijs"]+bitterballeneindprijs["bitterballengrooteindprijs"])
}
bestellen(prompt("Wilt u bier, fris, wijn of bitterballen bestellen"));

