let images = document.querySelectorAll('article img:nth-child(2)');

function addImage() {
    for (img of images) {
        img.classList.add("loaded")
    }
}

setTimeout(addImage(), 10000)