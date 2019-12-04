var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var count1 = 2;
var count2 = 2;
var count3 = 2;

button1.onclick = disable1;
button2.onclick = disable2;
button3.onclick = disable3;

function disable1(){
    button1.disabled = true;
    button1.innerHTML= count1
    count1++
    button2.disabled = false;
    button3.disabled = false;
}
function disable2(){
    button2.disabled = true;
    button2.innerHTML= count2
    count2++
    button1.disabled = false;
    button3.disabled = false;
}
function disable3(){
    button3.disabled = true;
    button3.innerHTML= count3
    count3++
    button1.disabled = false;
    button2.disabled = false;
}