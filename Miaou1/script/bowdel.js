function getStyleID(idTarget,stylePropriete){
    var get = document.getElementById(idTarget);
    if (get.currentStyle){
        var result = get.currentStyle[stylePropriete];
        console.log(result)
    }
    else if (window.getComputedStyle){
        var result = document.defaultView.getComputedStyle(get,null).getPropertyValue(stylePropriete)
    }
    return result;
}
////////
function getStyleID(idTarget,stylePropriete){
    return document.defaultView.getComputedStyle(document.getElementById(idTarget)).getPropertyValue(stylePropriete);
}

var voir = getStyleID("div1","background-color");
console.log(voir)