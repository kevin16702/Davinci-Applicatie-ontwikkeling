var knop1 = document.getElementById("button1");
var knop2 = document.getElementById("button2");
var knop3 = document.getElementById("button3");
var image1 = document.getElementById("image");
var box = document.getElementById("container");
knop1.onclick = backgroundchange1;
knop2.onclick = backgroundchange2;
knop3.onclick = backgroundchange3;
function backgroundchange1(){
    box.style.backgroundImage= "url('./images/bg1.jpg')";
    image1.src = "./images/1.jpg"
}
function backgroundchange2(){
    box.style.backgroundImage="url('./images/bg2.jpg')";
    image1.src = "./images/2.jpg"
}
function backgroundchange3(){
    box.style.backgroundImage="url('./images/bg3.jpg')";
    image1.src = "./images/3.jpg"
}