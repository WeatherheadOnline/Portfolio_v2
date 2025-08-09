const menu = document.getElementById("menu");
const menuWrapper = document.getElementById("menu-wrapper");
const closeButton = document.getElementById("closeMenu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", turnOn);
closeButton.addEventListener("click", menuOff);

function menuOff() {
    menu.style.display = "none";
}

function turnOn() {
    menu.style.display = "block";
}

document.onclick = function(event) {
    if(!menuWrapper.contains(event.target)) {
        menuOff();
    };
}