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
let containers = document.querySelectorAll('#list a');
let images = document.querySelectorAll('article');
let links = document.querySelectorAll('ul li a');

for (link of links) {
    link.addEventListener('click', load)
}

function load() {
    for (cont of containers) {
        let div = document.createElement('div');
        cont.appendChild(div)
    }

    for (image of images) {
        image.remove()
    }
}