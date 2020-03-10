const moveButtons = [...document.querySelectorAll(".header__link")];

function moveToSection() {
    const attr = this.getAttribute("data-name");

    const moveSection = document.getElementById(attr);

    window.scrollTo({
        top: moveSection.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}

moveButtons.forEach((el) => {
    el.addEventListener("click", moveToSection);
})