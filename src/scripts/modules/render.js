import { imageFetch, fetchDetails } from './fetch.js';

const domain = 'https://www.reddit.com/r/';
const end = '/random/.json';

async function nature(req, res) {

    let data = []
    let i;

    //fetches 9 images
    for (i = 0; i < 9; i++) {
        const subReddits = [
            'NatureIsFuckingLit',
            'travel',
            'EarthPorn',
            'natureporn'
        ];
        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        let url = domain + random + end;
        
        const image = await imageFetch(url);
        data.push(image);
    }

    res.render('home', {
        title: "Pintreddit",
        data: data
    })
}

async function cars(req, res) {

    let data = []
    let i;

    //fetches 9 images
    for (i = 0; i < 9; i++) {
        const subReddits = [
            '4Runner',
            'carporn',
            'F1Porn',
            'RallyPorn',
        ];
        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        let url = domain + random + end;
        
        const image = await imageFetch(url);
        data.push(image);
    }

    res.render('home', {
        title: "Pintreddit",
        data: data
    })
}

async function art(req, res) {

    let data = []
    let i;

    //fetches 9 images
    for (i = 0; i < 9; i++) {
        const subReddits = [
            'Art',
            'ArtPorn',
            'Calligraphy',
            'Design',
            'drawing',
            'doodles',
            'Graffiti',
            'Illustration'
        ];
        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        let url = domain + random + end;
        
        const image = await imageFetch(url);
        data.push(image);
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
        title: "Pintreddit",
        data: image
    })
}

export { nature, cars, art, detail };