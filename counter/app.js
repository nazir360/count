let count = 0;
let increment = document.getElementById("count");

function increase(){
    increment.innerHTML = ++count;
}
function decrease(){
    increment.innerHTML = --count;
}

let saved = document.getElementById("saved-count");

function save(){
    saved.innerHTML += increment.innerHTML + ", ";
    increment.innerHTML = 0;
     count = 0;
}
function reset(){
    saved.innerHTML= "Saved Count: ";
    increment.innerHTML = 0;
    count = 0;
}
