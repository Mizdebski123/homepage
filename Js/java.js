console.log ("Siema! Jestem MArcin ")
let changeBackgroundButton = document.querySelector(".section__button--background");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".nextColorName")

changeBackgroundButton.addEventListener("click", ()=> {
    body.classList.toggle("greyBackground");
    nextColorName.innerText = body.classList.contains("greyBackground") ? "białe" : "szare";

});