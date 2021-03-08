'use strict';

function callFetch() {
    // Loop below fetches 10 images from reddit API, one per second
    let i = 0; //  set your counter to 0

    function loop() {
        setTimeout(() => { //  call a 3s setTimeout when the loop is called
            // fetchSubreddits(getSubreddit());

            // console.log('hallo daar ik ben er klaar mee')

            i++; // increment the counter
            if (i < 9) { // counter will go to 10 and redo callFetch
                loop();
            }
        }, 500);
    }
    loop(); //activates the loop
}

// require('./modules/fetch.js')

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app
    .engine('.html', require('ejs').__express)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'html')
    .use(express.static(path.join(__dirname, 'public')))
    // .get('/', load)
    .use('/home', home);



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
        images: images
    });
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

function init() {
    callFetch();
}

init();
