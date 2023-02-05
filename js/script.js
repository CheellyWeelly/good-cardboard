let btn = document.querySelector(".header__title-contacts-button");
let close = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");

function openPopup () {       
    popup.style.display = "flex";
}

function closePopup () {
    popup.style.display = "none";
}

btn.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);

