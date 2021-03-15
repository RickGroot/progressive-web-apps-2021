import fetch from 'cross-fetch';

export async function imageFetch(url) {
        const response = await fetch(url).catch(err => console.log('Request failed', err))
        const object = await response.json();
        const image = await check(object);
    console.log(image)
       return image; 
}

function check(object) {
    if (!object) {
        imageFetch('https://www.reddit.com/r/earthporn/random/.json')
    } else if (!object[0].data) {
        imageFetch('https://www.reddit.com/r/earthporn/random/.json')
    } else if (!object[0].data.children[0].data) {
        imageFetch('https://www.reddit.com/r/earthporn/random/.json')
    } else if (!object[0].data.children[0].data.url_overridden_by_dest) {
        imageFetch('https://www.reddit.com/r/earthporn/random/.json')
    } else if (object[0].data.children[0].data.url.toLowerCase().includes('i.redd.it')) {
        const post = object[0].data.children[0].data;
        return post;
    } else {
        imageFetch('https://www.reddit.com/r/earthporn/random/.json')
    }
}