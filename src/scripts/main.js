// require('./modules/fetch.js')

import {
    callFetch
} from './modules/fetch.js';
import {
    data
} from './modules/saveData.js';

const express = require('express');
const path = require('path');
const app = express()
const port = 8000;

app
    .engine('.html', require('ejs').__express)
    .set('views', path.join(__dirname, 'src/views'))
    .set('view engine', 'html')
    .use(express.static(path.join(__dirname, 'public')))
    // .get('/', load)
    .get('/home', home)



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

function load(req, res) {
    // res.redirect('/home')
    // console.log('called')
}

function home(req, res) {
    res.render('home', {
        title: "Pintreddit",
        images: images,
        data: data
    })
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function init() {
    callFetch();
}

init()