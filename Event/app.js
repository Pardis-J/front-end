var counter = document.getElementById("count");
counter.innerText = 0;
var maxAmount = 5;
function decrease(){
    if(counter.innerText > 0) counter.innerText--;
}
function add(){
    if(counter.innerText < maxAmount) counter.innerText++;
}