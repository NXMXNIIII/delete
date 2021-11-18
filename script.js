var miaou = document.getElementById("div1");
console.log(miaou)

document.getElementById("div1").addEventListener("mouseover",function(){
    this.style.backgroundColor = "red";
})

document.getElementById("div2").addEventListener("mouseover",function(event){
    this.style.backgroundColor = "red";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
},false);

document.getElementById("div3").addEventListener("click",function(){
    if(this.style.backgroundColor=='yellow'){
        this.style.backgroundColor='brown';
    }
    else{
        this.style.backgroundColor='yellow';
    }
})