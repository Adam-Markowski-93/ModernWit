let index = null;

const lightbox = document.createElement('div');
lightbox.id = "lightbox";
document.body.appendChild(lightbox);


const img = document.createElement('div');

const leftArrow = document.createElement('div');
const rightArrow = document.createElement('div');
const exitBtn = document.createElement("div");

leftArrow.classList.add("lightbox__left-arrow");
leftArrow.textContent = "<";

rightArrow.classList.add("lightbox__right-arrow");
rightArrow.textContent = ">";

exitBtn.classList.add("lightbox__exit-button");
exitBtn.textContent = "x";


const sectionsGallery = document.querySelectorAll(".section > .section__realization");

let number = null;

sectionsGallery.forEach(el => {
    el.addEventListener("click", function () {

        index = this.dataset.key;

        lightbox.classList.add("active");

        img.classList.add("lightbox__container");
        img.style.backgroundImage = `url(/img/gallery-image/r${index}/1.jpg)`;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);
        img.appendChild(leftArrow);
        img.appendChild(rightArrow);
        img.appendChild(exitBtn);

        number = 1;
    })
})

exitBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
})

const realizationArrayLenghts = [3, 5, 6, 6, 8, 4, 6, 7, 3, 5, 4, 4, 7, 6, 8];


function moveToNextImg(num, direction) {

    if (direction) {
        if (number === realizationArrayLenghts[num - 1]) {
            number = 0;
        }

        number += 1;

    } else if (!direction) {
        if (number === 1) {
            number = realizationArrayLenghts[num - 1] + 1;
        }

        number -= 1;
    }

    img.style.backgroundImage = `url(/img/gallery-image/r${num}/${number}.jpg)`
}

rightArrow.addEventListener("click", function () {
    moveToNextImg(index, true);
});

leftArrow.addEventListener("click", function () {
    moveToNextImg(index, false);
});