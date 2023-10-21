const slides = document.querySelectorAll(".img-slider");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter = (counter + 1) % slides.length;
    slideImage();
}

const goPrev = () => {
    counter = (counter - 1 + slides.length) % slides.length;
    slideImage();
}

const slideImage = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
