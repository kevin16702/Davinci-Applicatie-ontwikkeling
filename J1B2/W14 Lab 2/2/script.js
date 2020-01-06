var buttonarray = [];
var container = document.getElementById("container");
var colors = ["red", "purple", "blue", "black"]

function createbutton(){
var button = document.createElement("button");
button.setAttribute("id", "button" + [i])
button.innerHTML = i;
container.appendChild(button);
button.onclick = color;
}

for(i = 1; i <= 30; i++){
    createbutton();
}
for(e = 1; e <= 31; e++){
    buttonarray.push(0)
}
console.log(buttonarray)
function color(){
    if(buttonarray[this.innerHTML] < colors.length){
    this.style.backgroundColor = colors[buttonarray[this.innerHTML]];
    this.onclick = color;
    buttonarray[this.innerHTML]++ 
    }
    else if(buttonarray[this.innerHTML] >= colors.length){
    container.removeChild(this);
    e=0;
    }
}