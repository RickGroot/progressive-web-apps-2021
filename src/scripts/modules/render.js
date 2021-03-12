import fetch from 'cross-fetch';


async function home(req, res) {
    const url = 'https://www.reddit.com/r/EarthPorn/random/.json'
    let data = []
    let i;

    //fetches 9 images
    for (i = 0; i < 9; i++) {
        const response = await fetch(url).catch(err => console.log('Request failed', err))
        const object = await response.json()
        const image = await object[0].data.children[0].data;
        data.push(image);
    }

    res.render('home', {
        title: "Pintreddit",
        data: data
    })
}

export { home };