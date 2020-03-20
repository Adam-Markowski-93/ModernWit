export class Gallery {
    constructor() {
        this.index = null;
        this.number = null;
        this.realizationArrayLenghts = [3, 5, 6, 6, 8, 4, 6, 7, 3, 5, 4, 4, 7, 6, 8];

        this.sectionsGallery = document.querySelectorAll(".section > .section__realization");

        this.sectionsGallery.forEach((el) => el.addEventListener("click", this.openGallery.bind(this, el)));
    }


    lightbox = document.createElement("div");
    rightArrow = document.createElement("div");
    leftArrow = document.createElement("div");
    exitBtn = document.createElement("div");
    img = document.createElement("div");

    openGallery(el) {
        this.createLightbox();
        this.createRightArrow();
        this.createLeftArrow();
        this.createExitButton();

        this.index = el.dataset.key;

        this.lightbox.classList.add("active");

        this.img.classList.add("lightbox__container");
        this.img.style.backgroundImage = `url(/img/gallery-image/r${this.index}/1.jpg)`;

        while (this.lightbox.firstChild) {
            this.lightbox.removeChild(this.lightbox.firstChild);
        }

        this.lightbox.appendChild(this.img);
        this.img.appendChild(this.leftArrow);
        this.img.appendChild(this.rightArrow);
        this.img.appendChild(this.exitBtn);

        this.number = 1;
    }

    moveToNextImg(num, direction) {
        if (direction) {
            if (this.number === this.realizationArrayLenghts[num - 1]) {
                this.number = 0;
            }

            this.number += 1;

        } else if (!direction) {
            if (this.number === 1) {
                this.number = this.realizationArrayLenghts[num - 1] + 1;
            }

            this.number -= 1;
        }

        this.img.style.backgroundImage = `url(/img/gallery-image/r${num}/${this.number}.jpg)`
    }

    createLightbox = () => {
        this.lightbox.id = "lightbox";
        document.body.appendChild(this.lightbox);
    }

    createLeftArrow = () => {
        this.leftArrow.classList.add("lightbox__left-arrow");
        this.leftArrow.textContent = "<";
    }

    createRightArrow = () => {
        this.rightArrow.classList.add("lightbox__right-arrow");
        this.rightArrow.textContent = ">";
    }

    createExitButton = () => {
        this.exitBtn.classList.add("lightbox__exit-button");
        this.exitBtn.textContent = "x";
    }
}