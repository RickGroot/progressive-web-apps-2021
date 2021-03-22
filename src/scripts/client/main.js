let images = document.querySelectorAll('article img:nth-child(2)');

function addImage(img) {
    img.classList.add("loaded")
}
for (img of images) {
    setTimeout(addImage(img), 5000);
}