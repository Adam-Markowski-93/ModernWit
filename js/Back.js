export class BackButton {
    constructor() {
        this.setBackButton();
    }

    setBackButton = () => {
        const backButton = document.createElement("div");

        backButton.setAttribute("class", "back-button");
        backButton.innerHTML = `<i class=" back-button__icon fas fa-chevron-up"></i>`;

        document.body.appendChild(backButton);

        backButton.addEventListener("click", this.moveToTop);
    }

    moveToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
};