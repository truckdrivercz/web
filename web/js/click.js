const images = document.querySelectorAll(".image-container img");
const popupImage = document.querySelector(".popup-image");
const popupImg = document.querySelector(".popup-image img");
const leftArrow = document.querySelector(".popup-image .left");
const rightArrow = document.querySelector(".popup-image .right");
let currentIndex = 0;

images.forEach((image, index) => {
    image.onclick = () => {
        currentIndex = index;
        showPopupImage();
    };
});

document.querySelector(".popup-image span").onclick = () => {
    popupImage.style.display = "none";
};

leftArrow.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updatePopupImage();
};

rightArrow.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updatePopupImage();
};

function showPopupImage() {
    popupImage.style.display = "block";
    updatePopupImage();
}

function updatePopupImage() {
    popupImg.src = images[currentIndex].getAttribute("src");
    updateArrowsVisibility();
}

function updateArrowsVisibility() {
    leftArrow.style.display = currentIndex === 0 ? "none" : "block";
    rightArrow.style.display = currentIndex === images.length - 1 ? "none" : "block";
}