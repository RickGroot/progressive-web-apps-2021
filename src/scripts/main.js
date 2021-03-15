import { detail, home, error } from './modules/render.js';

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
    .get('/', redirect)
    .get('/category/:cat', home)
    .get('/r/:sub/post/:id', detail)
    .get('*', error)

function redirect(req, res) {
    res.redirect('/category/nature');
}

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})