import { detail, home } from './modules/render.js';

import pkg from 'express';
import ejs from 'ejs';

const express = pkg;
const app = express()
const port = 8000;

app
    .engine('.html', ejs.__express)
    .set('views', 'src/views')
    .set('view engine', 'html')
    .use(express.static('public'))
    // .get('/nature', nature)
    // .get('/cars', cars)
    // .get('/art', art)
    .get('/:cat', home)
    .get('/r/:sub/post/:id', detail);

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})