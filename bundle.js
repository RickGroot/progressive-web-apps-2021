'use strict';

let data = [];

const fetch = require("node-fetch");

// ----------------------------------------------------------------------------------------- start function chain
function callFetch() {
    // Loop below fetches 10 images from reddit API, one per second
    let i = 0; //  set your counter to 0

    function loop() {
        setTimeout(() => { //  call a 3s setTimeout when the loop is called
            // fetchSubreddits(getSubreddit());

            fetchSubreddits('EarthPorn');

            i++; // increment the counter
            if (i <= 9) { // counter will go to 10 and redo callFetch
                loop();
            }
        }, 500);
    }
    loop(); //activates the loop
}

// ----------------------------------------------------------------------------------------- fetches images
function fetchSubreddits(sub) {
    fetch('https://www.reddit.com/r/' + sub + '/random/.json', {
            mode: 'cors'
        })
        .then(response => response.json())
        .then(json => console.log(json))
        // .then(content => {
        //     // prevents too many items
        //     if (!id || id.length <= 9) {
        //         checkDuplicate(id, content);
        //     } else {
        //         return;
        //     }
        // }) // modulate & check image
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

// require('./modules/fetch.js')

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app
    .engine('.html', require('ejs').__express)
    .set('views', path.join(__dirname, 'src/views'))
    .set('view engine', 'html')
    .use(express.static(path.join(__dirname, 'public')))
    // .get('/', load)
    .get('/home', home);



let images = [
    {link: 'https://i.redd.it/16b17yjz4bl61.jpg'},
    {link: 'https://i.redd.it/16b17yjz4bl61.jpg'},
    {link: 'https://i.redd.it/16b17yjz4bl61.jpg'},
    {link: 'https://i.redd.it/16b17yjz4bl61.jpg'},
    {link: 'https://i.redd.it/16b17yjz4bl61.jpg'},
    {link: 'https://i.redd.it/16b17yjz4bl61.jpg'},
    {link: 'https://i.redd.it/16b17yjz4bl61.jpg'},
    {link: 'https://i.redd.it/16b17yjz4bl61.jpg'},
    {link: 'https://i.redd.it/16b17yjz4bl61.jpg'}
];

function home(req, res) {
    res.render('home', {
        title: "Pintreddit",
        images: images,
        data: data
    });
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

function init() {
    callFetch();
}

init();
