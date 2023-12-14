let text = document.getElementById('text');
let blink = document.getElementById('blink');

let curLine = "";
document.addEventListener('keydown', function(event){
    if(event.key.length == 1){
        text.innerHTML += event.key;
        curLine += event.key;
    }
    else if(event.code == "Enter"){
        text.innerHTML += '<br><strong style="color: red;">Invalid Pasword</strong><br>Enter Password:&nbsp;';

    }
} );
setInterval(function () { 
    blink.style.opacity =  
    (blink.style.opacity == 0 ? 1 : 0); 
}, 450);  

function isOverflowX(element) {
    return element.scrollWidth != Math.max(element.offsetHWidth, element.clientWidth)
  }