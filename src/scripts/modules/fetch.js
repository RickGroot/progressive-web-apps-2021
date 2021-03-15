import fetch from 'cross-fetch';

export async function imageFetch(url) {
    const response = await fetch(url).catch(err => console.log('Request failed', err))
    const object = await response.json().catch(err => console.log('JSON failed', err));
    const image = await object[0].data.children[0].data;
   return image; 
}

export async function fetchDetails(url) {
    const response = await fetch(url).catch(err => console.log('Request failed', err))
    const object = await response.json().catch(err => console.log('JSON failed', err));
    const image = await object[0].data.children[0].data;
    return image;
}




export async function imageFetch2(url) {
        const response = fetch(url)
            .then(response => response.json())
            .then(object => check(object))
            .then(image => {
                if (image === undefined) {
                    imageFetch('https://www.reddit.com/r/earthporn/random/.json');
                } else {
                    console.log("fetch =========", image.url)
                    return image;
                }
            })
            .catch(err => console.log('Request failed', err))

        return response;
}

function check(object) {
    // console.log(object[0].data.children[0].data.url)

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