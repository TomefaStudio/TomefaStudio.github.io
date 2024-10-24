//Désactiver le scrol de la page dès le début du chargement !
document.body.style.overflow = "hidden";
//Créer une instance du loader et de son conteneur !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaitre le loader une fois la page complètement chargée !
loaderContainer.classList.add("fonduOut");
setTimeout((e) => {
    loaderContainer.classList.add("hidden");
}, 400);