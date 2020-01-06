var buttonarray = [];
var container = document.getElementById("container");
var colors = []

function createbutton(){
var button = document.createElement("button");
button.setAttribute("id", "button" + [i])
button.innerHTML = i;
container.appendChild(button);
button.onclick = color;
}

for(i = 1; i <= 30; i++){
    createbutton();
    buttonarray.push(0)
}
console.log(buttonarray)
function color(){
    if(buttonarray[this.innerHTML] <= colors.length){
    this.style.backgroundColor = colors[buttonarray[this.innerHTML]];
    this.onclick = color;
    buttonarray[this.innerHTML]++ 
    }
    else if(buttonarray[this.innerHTML] > colors.length){
    container.removeChild(this);
    e=0;
    }
}
function colorpush(){
     colorquestion == prompt("welke kleur wil je")
        while(colorquestion != "stop"){
            colors.push(colorquestion)
            colorpush();
        }   
    colors();
    }
var colorquestion;
colorpush();
console.log(colors)