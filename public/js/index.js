if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                return registration.update();
            })
            .catch((error) => {
                // registration failed
                console.log('Registration failed with ' + error);
            });
    });
}
let images = document.querySelectorAll('article img:nth-child(2)');

function addImage(img) {
    img.classList.add("loaded")
}
for (img of images) {
    setTimeout(addImage(img), 5000);
}