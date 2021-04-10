var content = document.getElementsByClassName("background")[0];
var title = document.querySelector("h1");

title.onclick = function(){
    if(content.className == "background") {
        content.className = "background2";
    } else {
        content.className = "background";
        
    }
}


