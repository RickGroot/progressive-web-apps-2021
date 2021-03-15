import { imageFetch } from './fetch.js';

const domain = 'https://www.reddit.com/r/';
const end = '/random/.json';

async function home(req, res) {

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
        // console.log(image.url)
        data.push(image);
    }

    // console.log(data)

    res.render('home', {
        title: "Pintreddit",
        data: data
    })
}

export { home };