import {
    data
} from "./data.js";
import {
    details
} from "../detailpage.js";

export function router(url, posts) {

    // defines routes and says what to do at specific route
    routie({
        '': () => {
            document.getElementById('home').classList.remove("invis");
            document.getElementById('detail').classList.add("invis");
            document.getElementById('main').classList.remove("invis");
            document.getElementById('post').classList.add("invis");
            document.querySelector('footer').classList.remove("invis");
            document.getElementById('error').classList.add("invis");
        },
        'post/:id': (id) => {
            let thisPost = data.filter(post => post.id == id)
            details(thisPost[0])

            document.getElementById('home').classList.add("invis");
            document.getElementById('detail').classList.remove("invis");
            document.getElementById('main').classList.add("invis");
            document.getElementById('post').classList.remove("invis");
            document.querySelector('footer').classList.add("invis");
            document.getElementById('error').classList.add("invis");
        },
        'undefined': () => {
            document.getElementById('home').classList.add("invis");
            document.getElementById('detail').classList.add("invis");
            document.getElementById('main').classList.add("invis");
            document.getElementById('post').classList.add("invis");
            document.querySelector('footer').classList.add("invis");
            document.getElementById('error').classList.remove("invis");
        },
    })

}