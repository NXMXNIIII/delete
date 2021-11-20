function getStyleID(idTarget,stylePropriete){
    return document.defaultView.getComputedStyle(document.getElementById(idTarget)).getPropertyValue(stylePropriete);
}

var myIds = document.querySelectorAll('.box')

for(var i = 0; i < myIds.length;i++){
    myIds[i].style.transition= "all 1s";
    myIds[i].addEventListener('mouseover',function(){
        if (this.style.backgroundColor == "rgb(4, 247, 247)"){
            this.style.backgroundColor = "rgb(42, 165, 138)"
        }
        else if(this.style.backgroundColor == "rgb(42, 165, 138)"){
            this.style.backgroundColor = "rgb(4, 247, 247)"
        }
        else{
            this.style.backgroundColor = "rgb(4, 247, 247)"
        }
    })
}