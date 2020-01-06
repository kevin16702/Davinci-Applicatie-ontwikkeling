var container = document.getElementById("container")
var button1 = document.createElement("button");
button1.setAttribute("id", "button1");
container.appendChild(button1);
button1.innerHTML = "button 1";
button1.onclick= changecolor1

var button2 = document.createElement("button");
button2.setAttribute("id", "button2");
container.appendChild(button2);
button2.innerHTML = "button 2";
button2.onclick= changecolor2

var button3 = document.createElement("button");
button3.setAttribute("id", "button3");
container.appendChild(button3);
button3.innerHTML = "button 3";
button3.onclick = changecolor3

function changecolor1(){
    document.body.style.backgroundColor = "green";
}

function changecolor2(){
    document.body.style.backgroundColor = "red";
}

function changecolor3(){
    document.body.style.backgroundColor = "blue";
}

