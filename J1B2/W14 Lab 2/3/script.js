var container = document.getElementById("container");

function createbutton(){
var button = document.createElement("button");
button.setAttribute("id", "button")
button.innerHTML = i;
container.appendChild(button);
button.onclick = color;
}

for(i = 1; i <= 30; i++){
    createbutton();
}
function color(){
    this.style.backgroundColor = "red"
}