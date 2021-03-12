import { home } from './modules/render.js';

import pkg from 'express';
// import { path } from 'path';
// import { fetch } from 'node-fetch';
import ejs from 'ejs';
import cors from 'cors';


const express = pkg;
const app = express()
const port = 8000;

// app
//     .engine('.html', require('ejs').__express)
//     .set('views', path.join(__dirname, 'src/views'))
//     .set('view engine', 'html')
//     .use(express.static(path.join(__dirname, 'public')))
//     // .get('/', load)
//     .get('/home', home)

app
    .engine('.html', ejs.__express)
    .set('views', 'src/views')
    .set('view engine', 'html')
    .use(cors())
    .use(express.static('public'))
    // .get('/', load)
    .get('/home', home);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})