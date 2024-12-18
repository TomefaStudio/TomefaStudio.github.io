//Désactiver le scroll de la page dès le chargement de celle ci !
document.body.style.overflow = "hidden";
//Créer une instance du chargemente et de son conteneur !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaitre le loader une fois la page complètement chargée !
window.addEventListener("load",(e)=>{
    //Faire fondre le chargement et son conteneur !
    loaderContainer.classList.add("fonduOut");
    //Masquer le laoder une fois la page complètement chargée et après son fondu !
    setTimeout((e) => {
        loaderContainer.classList.add("hidden");
    }, 400);
});

//Créer une instance du start !
const start = document.querySelector(".start");
//Créer une variable pour le nombre !
var picker = 0;
//Ecouter le click du start !
start.addEventListener("click",(e)=>{
// Returns a random integer from 1 to 30:
picker = Math.floor(Math.random() * 30) + 1;
    window.location.href = "./TomefaStudio/Html/"+picker+".html";
});