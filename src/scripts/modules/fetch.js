import fetch from 'cross-fetch';

export async function imageFetch(url) {
    const image = await getImage(url);
    return image;
}

export async function fetchDetails(url) {
    const response = await fetch(url).catch(err => console.log('Request failed', err))
    const object = await response.json().catch(err => console.log('JSON failed', err));

    const image = await object[0].data.children[0].data;
    return image;
}

async function getImage(url) {
    const response = await fetch(url).catch(err => console.log('Request failed', err))
    const object = await response.json().catch(err => console.log('JSON failed', err));
    
    const image = await checkImage(object)
    return image;
}

async function checkImage(object) {
    if (!object) {
        return undefined;
    } else if (!object[0].data) {
        return undefined;
    } else if (!object[0].data.children[0].data) {
        return undefined;
    } else if (!object[0].data.children[0].data.url_overridden_by_dest) {
        return undefined;
    } else if (object[0].data.children[0].data.url.toLowerCase().includes('i.redd.it')) {
        const post = object[0].data.children[0].data;
        const img = {
            id: post.id,
            url: post.url,
            thumbnail: post.thumbnail,
            subreddit: post.subreddit
        }
        return img;
    } else {
        return undefined;
    }
}