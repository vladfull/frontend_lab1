const variantNumber = 13;
const firstElementIndex = (variantNumber % 10) + 1;
let isFirstClick = true;

const colors = [
    { bgColor: "#FFD700", textColor: "#000000" },
    { bgColor: "#8A2BE2", textColor: "#FFFFFF" }
];

function toggleColor(element, colorIndex) {
    element.style.backgroundColor = colors[colorIndex].bgColor;
    element.style.color = colors[colorIndex].textColor;
}

document.getElementById(`element-${firstElementIndex}`).onclick = function () {
    const colorIndex = isFirstClick ? 0 : 1;
    toggleColor(this, colorIndex);
    isFirstClick = !isFirstClick;
};

document.querySelector("ul").onclick = function () {
    const colorIndex = isFirstClick ? 0 : 1;
    toggleColor(this, colorIndex);
    isFirstClick = !isFirstClick;
};

const addButton = document.getElementById("add-image");
const increaseButton = document.getElementById("increase-image");
const decreaseButton = document.getElementById("decrease-image");
const removeButton = document.getElementById("remove-image");
let image = document.getElementById("kyiv-image");

let imageSize = 100;

addButton.onclick = function () {
    if (!document.getElementById("kyiv-image")) {
        const newImage = document.createElement("img");
        newImage.id = "kyiv-image";
        newImage.src = "https://lifeimg.pravda.com/images/doc/4/5/457f758-depositphotos-85021828-xl.jpg";
        newImage.alt = "Фото Києва";
        newImage.style.width = imageSize + "%";
        document.querySelector("a").appendChild(newImage);
        image = newImage;
    }
};

increaseButton.onclick = function () {
    if (image) {
        imageSize += 10;
        image.style.width = imageSize + "%";
    }
};

decreaseButton.onclick = function () {
    if (image && imageSize > 10) {
        imageSize -= 10;
        image.style.width = imageSize + "%";
    }
};

removeButton.onclick = function () {
    if (image) {
        image.remove();
        image = null;
    }
};