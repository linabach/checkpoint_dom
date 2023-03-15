const favs = Array.from(document.querySelectorAll(".fa-heart"))
const plusbtns=Array.from(document.querySelectorAll(".fa-plus-circle"))
const minusbtns=Array.from(document.querySelectorAll(".fa-minus-circle"))
const cards= Array.from(document.querySelectorAll(".card"))
const deletbtns=Array.from(document.querySelectorAll(".fa-trash-alt"))

for (let fav of favs){
    fav.addEventListener("click",function(){
        if (fav.style.color == "black"){
            fav.style.color = "red"
        }
        else{
            fav.style.color="black"
        }
    })
}

for (let i in  deletbtns){
    deletbtns[i].addEventListener("click",function(){
        cards[i].remove()
        total()

    })
    
}

for (let plusbtn of plusbtns){
    plusbtn.addEventListener("click",function(){
        plusbtn.nextElementSibling.innerHTML ++
        total()
    })
    
}

for (let minusbtn of minusbtns){
    minusbtn.addEventListener("click",function(){
        minusbtn.previousElementSibling.innerHTML > 0 ?
        minusbtn.previousElementSibling.innerHTML --:
        0
        total()
    })
    
}

function total(){
    let qunts= Array.from(document.querySelectorAll(".qute"))
    let prices= Array.from(document.querySelectorAll(".unitt-price"))
    let s=0;
    for (let i=0 ; i < prices.length ; i++){
        s=s+qunts[i].innerHTML*prices[i].innerHTML
    }
    document.getElementById("total-price").innerHTML=s
}

console.log("bonjour")