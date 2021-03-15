import {
    router
} from "./router.js";
import {
    details
} from "../detailpage.js";
import {
    data
} from "./data.js";

const cont = document.getElementById('list');

// sets placeholder image for loading state
if (cont.children.length === 0) {
    cont.classList.add("load");
} 

// appends an image
function appendPosts(post) {
    let a = document.createElement('a')
    let article = document.createElement('article');
    let img = document.createElement('img');
    img.src = post.url; //sets src of image
    a.href = '#post/' + post.id;
    article.id = "image1";
    article.appendChild(img);
    a.appendChild(article);
    cont.appendChild(a);

    //removes placeholder when container has children
    if (cont.children.length > 0) {
        cont.classList.remove("load");
    }
}

export {
    appendPosts,
    cont
};