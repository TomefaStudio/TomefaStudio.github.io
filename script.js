//Désactiver le scroll de la page dès le début du chargement de cette dernière !
document.body.style.overflow = "hidden";
//Créer une instance du loader et de son conteneur !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaitre le loader une fois la page complètement chargée !
window.addEventListener("load",(e)=>{
    //Faire fondre le loader et son conteneur !
    loaderContainer.classList.add("fonduOut");
    //Masquer ou cacher le chargement après la durée exact de son fondu soit 400ms !
    setTimeout((e) => {
        loaderContainer.classList.add("hidden");
    }, 400);
});