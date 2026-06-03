const cards =
document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let top =
card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.classList.add("show");
}

});

});

document
.getElementById("exploreBtn")
.addEventListener("click",()=>{

window.scrollTo({

top:700,

behavior:"smooth"

});

});