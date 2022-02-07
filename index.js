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

//Top Up the Booking Modal Window to Book an Appointment//
    
// Modal Window
const modalWindow = document.getElementById("book-modal");

const popUpBtns = [];

// Add "Contact Us" btn to the buttons that popup the modal 
popUpBtns.push(document.getElementById("contact-us"));

bookAppointmentBtns = Array.from(document.getElementsByClassName("book-appointment"));
// Add all "book an appointment" btn to popup the Modal 
bookAppointmentBtns.forEach(btn => popUpBtns.push(btn))

popUpBtns.forEach(btn => btn.addEventListener("click", popUpModal))

function popUpModal() {
    modalWindow.style.display = "block"
}

// close modal window
const closeModalBtns = [];

closeModalBtns.push(document.getElementById("close-modal"), document.getElementById("modal-submit"));

closeModalBtns.forEach(btn => btn.addEventListener("click", closeModal))

function closeModal(e) {
    e.preventDefault()
    modalWindow.style.display = "none"
    
    if (e.target == modalWindow) {
        modalWindow.style.display = "none"
    }
}

// Also close on click outside the modal Window
window.addEventListener("click", closeModalOnWindowClick);
function closeModalOnWindowClick(e) {
    if (e.target == modalWindow) {
        modalWindow.style.display = "none"
    }
}