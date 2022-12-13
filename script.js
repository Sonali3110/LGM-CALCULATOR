var buttons = document.querySelector(".buttons");
var btn = document.querySelectorAll("span");
var display = document.querySelector("#val");


for(var i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        if(this.innerHTML == "="){
            display.innerHTML = eval(display.innerHTML);
        }
        else if(this.innerHTML == "Clear"){
            display.innerHTML = "";
        }
        else{
            display.innerHTML += this.innerHTML;
        }
    })
}