document.body.style.overflow = "hidden";
//Créer une instance du loader et de son conteneur !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaitre le loader et son conteneur !
window.addEventListener("load",(e)=>{
    loaderContainer.classList.add("fonduOut");
    setTimeout((e) => {
        loaderContainer.classList.add("hidden");
    },400);
});