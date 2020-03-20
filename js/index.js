import {
    Gallery
} from './Gallery.js';

import {
    Scroller
} from './Scroller.js'

import {
    BackButton
} from './Back.js'

const gallery = new Gallery();
const scroller = new Scroller();

new BackButton();

gallery.rightArrow.addEventListener("click", function () {
    gallery.moveToNextImg(gallery.index, true);
});

gallery.leftArrow.addEventListener("click", function () {
    gallery.moveToNextImg(gallery.index, false);
});

gallery.exitBtn.addEventListener("click", () => {
    gallery.lightbox.classList.remove("active");
})

scroller.moveButtons.forEach((el) => {
    el.addEventListener("click", scroller.moveToSection);
})