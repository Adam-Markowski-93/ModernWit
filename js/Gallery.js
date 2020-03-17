let index = null;

const lightbox = document.createElement('div');
lightbox.id = "lightbox";
document.body.appendChild(lightbox);


const img = document.createElement('div');

const leftArrow = document.createElement('div');
const rightArrow = document.createElement('div');
const exitBtn = document.createElement("div");

leftArrow.classList.add("lightbox__left-arrow");
rightArrow.classList.add("lightbox__right-arrow");
exitBtn.classList.add("lightbox__exit-button");


const sectionsGallery = document.querySelectorAll(".section > .section__realization");

sectionsGallery.forEach(el => {
    el.addEventListener("click", function (event) {

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
    })
})

exitBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
})

rightArrow.addEventListener("click", () => {

    let number = 2;

    img.style.backgroundImage = `url(/img/gallery-image/r${index}/${number}.jpg)`;
})