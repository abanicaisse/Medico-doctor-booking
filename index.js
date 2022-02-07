// Toggle the Navigation Menu on Mobile devices
const hamburger = document.getElementsByClassName("hamburger")[0];

hamburger.addEventListener("click", toggleNavMenu);

function toggleNavMenu() {
    const navMenu = document.getElementsByClassName("links--container")[0];

    navMenu.style.visibility = navMenu.style.visibility === "visible" ? "hidden" : "visible";

    if(navMenu.style.visibility === "visible") {
        navMenu.style.animation = "menu-slide-in 1s ease-out";
        Array.from(navMenu.children).forEach(link => link.style.animation = "text-appear 1s ease-out");
    } else {
        Array.from(navMenu.children).forEach(link => link.style.animation = "text-disappear 1s ease-out");
        navMenu.style.animation = "menu-slide-out 1s ease-out";
    }
}