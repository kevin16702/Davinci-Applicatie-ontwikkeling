var container = document.getElementById("game-container");
var titel = document.getElementById("title");
var textbubble = document.getElementById("description")
var knop1 = document.getElementById("button1");
var knop2 = document.getElementById("button2");
var knop3 = document.getElementById("button3");
var inventoryItem = document.getElementById("inventoryItem");
var audio = document.createElement("AUDIO");
var phone = false;
knop1.onclick = slide0;
knop2.style.visibility = "hidden";

textbubble.innerHTML = "Dit is een verhaal gebaseerd op de film koe no katachi.";
titel.innerHTML = "Start Scherm";
knop1.innerHTML = "Start Game";

inventoryItem.src = "./Images/mobil.png"
inventoryItem.style.visibility = "hidden"
audio.src = "LIT.mp3";
audio.type = "audio/mpeg";
container.appendChild(audio);
function slide0(){
    container.style.backgroundImage = 'url("./images/ruzie.png")'
    textbubble.innerHTML = "Je naam is shoya, je zat op school met een doof meisje genaamd shoko. Nadat je haar zo erg hebt gepest werd je zelf gepest. Dit verhaal gaat om vergiffenis. Wil je vergiffenis zoeken bij shouko"
    knop2.style.visibility = "visible";
    knop1.innerHTML = "ja";
    knop2.innerHTML = "nee";
    knop1.onclick = slide1;
    knop2.onclick = suicislide;
    knop1.style.left = "300px";
    titel.innerHTML = "Ruzie op school";
    audio.play();
}
function slide1(){
    container.style.backgroundImage = 'url("./images/Apology.png")';
    textbubble.innerHTML = "Je bent naar shoko gegaan om je excuses aan te bieden. Ze vraagt of je meegaat naar het feest";
    knop1.innerHTML = "ja";
    knop2.innerHTML = "nee";
    knop1.onclick = slide2;
    knop2.onclick = suicislide;
    titel.innerHTML = "Vergiffenis op het instituut"
}
function slide2(){
    textbubble.innerHTML = "Shoko is unrustig en gaat plotseling naar huis. Yuzuru, het zusje van shoko, vraagt of je naar hun huis kan gaan om de camera op te laden"
    container.style.backgroundImage = 'url("./images/feest.png")';
    knop1.onclick = slide4;
    knop2.onclick = slide3;
    titel.innerHTML = "Het feest"
}
function slide3(){
    container.style.backgroundImage = 'url("./images/ending.jpg")';
    textbubble.innerHTML = "Je hoort op het nieuws dat shoko na het feest van het balkon is afgesprongen. Ze is overleden. Je besluit hetzelfde lot te kiezen en haar achterna te gaan."
    knop1.style.visibility = "hidden";
    knop2.style.visibility = "hidden";
    titel.innerHTML = "De hemel";
}
function slide4(){
    container.style.backgroundImage = 'url("./images/balkon.jpg")';
    textbubble.innerHTML = "Je ziet shoko staan op het balkon, ze gaat springen. Je schreeuwt naar haar, maar aangezien ze doof kan je ze niet horen. Je sprint naar haar om haar te redden, maar je stuikelt over de stoel."
    knop1.innerHTML = "redden";
    knop2.innerHTML = "laten springen"
    knop1.onclick = slide5;
    knop2.onclick = deathshoko;
    titel.innerHTML = "appartement"
}
function slide5(){
    container.style.backgroundImage = 'url("./images/savor.png")';
    textbubble.innerHTML = "Je bent net op tijd naar het balkon gerend om haar nog te kunnen redden. Je staat nu op een belangrijke keuze. Jezelf redden of haar redden.";
    titel.innerHTML = "Balkon";
    knop1.onclick = hallway;
    knop2.onclick = deathshoko;
    knop1.innerHTML = "omhoogtrekken"
    knop2.innerHTML = "laten vallen"
}
function hallway(){
    titel.innerHTML = "Hal"
    container.style.backgroundImage = 'url("./images/school.jpg")';
    textbubble.innerHTML = "Je bent nu op school. Shoko is blij dat je haar hebt gered. Maar je bent je telefoon vergeten mee te nemen dus je weet niet waar ze is."
    knop3.style.visibility = "visible";
    knop1.innerHTML = "Check de lokalen";
    knop2.innerHTML = "Ga naar huis";
    knop1.onclick = lokalen;
    knop3.innerHTML = "Bel shoko op";
    knop2.onclick = house;
    knop3.onclick = phoneclick;
}
function phoneclick(){
    if (phone === true){
        alert("je belt haar op");
        pretpark();
    }
    else if(phone === false){
        alert("je hebt geen telefoon")
    }
}
function house(){
    titel.innerHTML = "Je bent nu thuis";
    textbubble.innerHTML = "Je bent nu thuis aangekomen om je telefoon te zoeken"
    inventoryItem.onclick = phoneoppakken;
    container.style.backgroundImage = 'url("./images/interior.jpg")';
    inventoryItem.style.visibility = "visible";
    inventoryItem.style.margin = "500px 0px 0px 500px"
    knop1.onclick = hallway;
    knop1.innerHTML = "Terug naar school"
    knop2.innerHTML = "Shoko opbellen"
    knop2.onclick = phoneclick;
    knop3.style.visibility = "hidden";
}
function phoneoppakken(){
    phone = true
    inventoryItem.style.visibility = "hidden"
}
function pretpark(){
    container.style.background = 'url("./images/Theme_park.png")'
    container.style.backgroundRepeat = "no-repeat"
    container.style.backgroundSize = "cover";
    titel.innerHTML = "Pretpark";
    textbubble.innerHTML = "Shoko is met haar vrienden naar het pretpark gegaan. Je gaat met haar mee"
    knop1.innerHTML = "speel einde";
    knop2.style.visibility = "hidden";
    knop3.style.visibility = "hidden";
    knop1.onclick = goodending;
}
function goodending(){
    container.style.backgroundImage = 'url("./images/good_ending.png")';
    titel.innerHTML = "Ending";
    textbubble.innerHTML = "Je hebt het spel uitgespeeld, Je hebt veel nieuwe vrienden gemaakt";
    knop1.style.visibility = "hidden";
}
function lokalen(){
    container.style.backgroundImage = 'url("./images/Classroom.jpg")'
    knop3.style.visibility = "hidden";
    knop1.innerHTML = "Terug naar de hal";
    knop2.innerHTML = "Bel Shoko op";
    knop1.onclick = hallway;
    knop2.onclick = phoneclick;
}
function deathshoko(){
    container.style.backgroundImage = 'url("./images/shoko_death.png")';
    textbubble.innerHTML = "Ben je nu trots op jezelf. Je had haar kunnen redden. Maar nee je koos voor nee. Teleurstellend zeg."
    knop1.style.visibility = "hidden";
    knop2.style.visibility = "hidden";
}
function suicislide(){
    container.style.backgroundImage = 'url("./images/Suicide.png")'
    textbubble.innerHTML = "Je raakt eenzaam en denkt te veel na. Je gaat naar de brug om een einde te maken maar je bedenkt je. Je staat nu voor een ultimatum";
    knop1.innerHTML = "Je Springt";
    knop2.innerHTML = "Je Springt niet";
    knop1.onclick = death;
    knop2.onclick = slide1;
    titel.innerHTML = "De brug";
}
function death(){
    textbubble.innerHTML = "Je hebt gesprongen, je leven is geeindigd. Maar je word gereincarneerd in een game wereld.";
    container.style.backgroundImage = 'url("./images/death.png")';
    knop2.style.visibility = "hidden";
    knop1.style.left = "650px";
    knop1.innerHTML = "Opnieuw beginnen";
    titel.innerHTML = "Je eindbestemming";
    knop1.onclick = slide0;
}
function ending(){
    knop1.style.visibility = "hidden";
    textbubble.style.visibility = "visible";
    textbubble.innerHTML = "gefeliciteert je hebt het spel uitgespeeld. Dit is de koe no katachi ending."
    container.style.backgroundImage = 'url("./images/ending2.jpg")';
    titel.innerHTML = "Ending";
}