//Désactiver le scroll de la page dès le début de son chargement !
document.body.style.overflow = "hidden";
//Créer une instance du loaderContainer ( Le chargement et son conteneur ) !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaître le loader et son conteneur une fois la page complètement chargée !
window.addEventListener("load",(e)=>{
    //Faire fondre le loader et son conteneur en lui ajoutant la classe fonduOut !
    loaderContainer.classList.add("fonduOut");
    //Masquer ou cacher le loader et son conteneur en lui ajoutant la classe hidden après la durée du fondu de ce dernier soi 400 ms !
    setTimeout((e) => {
        loaderContainer.classList.add("hidden");
        //Reactiver facultativement le scroll de la page en fonction des besoins !
        // document.body.style.overflow = "hidden";
        //Changer facultativement son zIndex !
        // loaderContainer.style.ZIndex = "-1";
    }, 400);
});

//Créer une instance du getter !
const getter = document.querySelector(".getter");
//Ecouter le click du getter !
getter.addEventListener("click",(e)=>{
    window.location.href = "../Gifts/gift.zip";
});

//Créer une instance du changer !
const changer = document.querySelector(".changer");
//Ecouter le click du changer !
changer.addEventListener("click",(e)=>{
    window.location.href = "../../index.html";
});