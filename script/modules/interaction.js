import {
    callFetch
} from "../app.js"; // when category changes
import {
    cleanJSON
} from "./data.js";

// ------------------------------------------------------------------------------ gets the category specified by the radio button
let category = localStorage.getItem('category'); // sets category to localstorage

if (!category) { // returns a standard category
    category = 'nature';
}

document.getElementsByName('subreddit')
    .forEach(radio => {
        if (radio.checked) {
            category = radio.value;
        }
        radio.onclick = () => {
            category = radio.value;
            localStorage.setItem('category', category); // saves it in localstorage
            refreshContent();
        }
    })

function refreshContent() {
    let list = document.getElementById('list'); // containers that need to be refreshed
    let sources = document.getElementById('sources');
    list.innerHTML = ""; // removes html inside container
    sources.innerHTML = "";
    list.classList.add("load"); // placeholder load image

    cleanJSON(); //resets JSON
    callFetch(); // calls another fetch for new data
}

// ------------------------------------------------------------------------------ gets the slider value for likes
const slider = document.getElementById("upvotes");
const content = document.getElementById("content");
let value = localStorage.getItem('slider'); // value of slider from localstorage

if (!value) { // sets default value
    slider.value = 100;
} else { // puts value to text
    slider.value = value
    content.innerHTML = "min " + value + " upvotes";
}

// when slider changes
slider.addEventListener('input', changeValue);

function changeValue() {
    value = slider.value;
    content.innerHTML = "min " + value + " upvotes";
    return value;
}

//apply effects on button press
const btn = document.getElementById("apply");
btn.addEventListener('click', (event) => {
    refreshContent();
    localStorage.setItem('slider', value);
    event.preventDefault();
    return false;
});

// ------------------------------------------------------------------------------ exports
export {
    category,
    value
};