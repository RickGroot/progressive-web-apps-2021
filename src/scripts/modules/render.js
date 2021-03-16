import {
    imageFetch,
    fetchDetails
} from './fetch.js';
import {
    getReddit
} from './getReddit.js';

async function home(req, res) {
    let data = []
    let i;
    let category = req.params.cat;

    for (i = 0; i < 9; i++) {
        const image = await imageFetch(getReddit(category))
        if (image === undefined) {
            i--;
        } else {data.push(image);}
        // data.push(image);
    }

    res.render('home', {
        title: "Pintreddit",
        data: data
    })
}

async function detail(req, res) {
    // const url = domain + req.params.sub + '/comments/' + req.params.id;
    const url = 'https://www.reddit.com/comments/' + req.params.id + '/.json'
    const image = await fetchDetails(url)

    res.render('detail', {
        title: "Pintreddit || "+ image.title,
        data: image
    })
}

function error(req, res) {
    res.status(404).render('not-found', {
        title: '404 Not Found || Pintreddit'
    })
}

export {
    detail,
    home,
    error
};