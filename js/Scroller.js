export class Scroller {
    constructor() {
        this.moveButtons = [...document.querySelectorAll(".header__link")];
    }

    moveToSection() {
        const attr = this.getAttribute("data-name");
        const moveSection = document.getElementById(attr);

        window.scrollTo({
            top: moveSection.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }
};