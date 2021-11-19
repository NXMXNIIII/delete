function getStyleID(idTarget,stylePropriete){
    return document.defaultView.getComputedStyle(document.getElementById(idTarget)).getPropertyValue(stylePropriete);
}

document.getElementById("div1").addEventListener("mouseover",function(){
    var initialColor = getStyleID("div1","background-color");
    if (initialColor == "rgb(67, 65, 165)")
        this.style.backgroundColor = "rgb(201, 79, 79)";
    else
        this.style.backgroundColor = "rgb(67, 65, 165)";
})

document.getElementById("div2").addEventListener("mouseover",function(){
    var initialColor = getStyleID("div2","background-color");
    if (initialColor == "rgb(67, 65, 165)")
        this.style.backgroundColor = "rgb(4, 247, 247)";
    else
        this.style.backgroundColor = "rgb(67, 65, 165)";
})

// ** Si j'inverse if et else, le cube a une latence de 1 click **
document.getElementById("div3").addEventListener("mouseover",function(){
    if(this.style.backgroundColor=='yellow'){
        this.style.backgroundColor='brown';
    }
    else{
        this.style.backgroundColor='yellow';
    }

})