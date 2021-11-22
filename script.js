function getStyleID(idTarget,stylePropriete){
    return document.defaultView.getComputedStyle(document.getElementById(idTarget)).getPropertyValue(stylePropriete);
}

var myIds = document.querySelectorAll('.box')

for(var i = 0; i < myIds.length;i++){
    myIds[i].style.transition= "all 1s";
    myIds[i].addEventListener('mouseover',function(){
        if (this.style.backgroundColor == "rgb(218, 247, 166)"){
            this.style.backgroundColor = "rgb(255, 195, 0)"
        }
        else if(this.style.backgroundColor == "rgb(255, 195, 0)"){
            this.style.backgroundColor = "rgb(255, 87, 51)"
        }
        else if(this.style.backgroundColor == "rgb(255, 87, 51)"){
            this.style.backgroundColor = "rgb(199, 0, 57)"
        }
        else if(this.style.backgroundColor == "rgb(199, 0, 57)"){
            this.style.backgroundColor = "rgb(144, 12, 63)"
        }
        else if(this.style.backgroundColor == "rgb(144, 12, 63)"){
            this.style.backgroundColor = "rgb(88, 24, 69)"
        }
        else if(this.style.backgroundColor == "rgb(88, 24, 69)"){
            this.style.backgroundColor = "rgb(218, 247, 166)"
        }
        else{
            this.style.backgroundColor = "rgb(218, 247, 166)"
        }
    })
}

// #div1 : width : non défini // .box : 200px 
var classe = document.getElementsByClassName("box")
console.log(classe.offsetWidth) // undefined
var idee = document.getElementById("div1")
console.log(idee.offsetWidth) // 200
var idee2= getStyleID("div1","width")
console.log(idee2) // 200px


// ////////////////// classes
var episode = {
    titre: "MiaouLand",
    duree: 20,
    vues:1,
}
console.log(episode.titre) // MiaouLand

// La notation bracket
var deux = "titre";
console.log(episode[deux]) // MiaouLand
// La notation bracket

document.querySelector('.TITLE').innerText = `Episode: ${episode["titre"]}
Durée: ${episode["duree"]} min
${episode["vues"] ? 'VU' : 'Pas vu'}`

class film {
    constructor(titre, duree, vu){
        this.titre = titre;
        this.duree = duree;
        this.vu = vu;
    }
}

var filmee = new film("La planète des singes",20,false)
document.querySelector("#menu").innerText = `Titre : ${filmee["titre"]}
Durée : ${filmee["duree"]} min
${episode["vu"] ? 'VU' : 'Pas vu'} `

console.log(filmee["vu"])

console.log("-- LISTE --")
var lista = [];
lista.push("Ye  ","miaou")
lista.unshift("YA",[20,"LELE"])
lista.push(["Dernier",[1,2,3]])
console.log(lista)
lista[4][1].pop()
console.log(lista)
