// function that calls all appends
export function details(post) {

    if (!post) {
        location.href = "/#undefined"; // changes your url
        return;
    }

    cleanPage();
    appendImage(post);
    appendTitle(post);
    appendSub(post)
    appendUps(post);
    appendRatio(post)
    appendSource(post);
}

//cleans page from earlier post clicks
function cleanPage() {
    let cont = document.getElementById('data');
    cont.innerHTML = "";
}

// appends image to page
function appendImage(post) {
    let img = document.getElementById('postimg');
    img.src = post.url; //sets src of image
}

// appends title
function appendTitle(post) {
    let cont = document.getElementById('data');
    let header = document.createElement('h2');
    let text = document.createTextNode(post.title);

    header.appendChild(text);
    cont.appendChild(header);
}

// appends subreddit
function appendSub(post) {
    let cont = document.getElementById('data');
    let p = document.createElement('p');
    let text = document.createTextNode('From sub: ' + post.subreddit_name_prefixed);

    p.appendChild(text);
    cont.appendChild(p);
}

// appends amout of upvotes
function appendUps(post) {
    let cont = document.getElementById('data');
    let p = document.createElement('p');
    let text = document.createTextNode('Likes: ' + post.ups);

    p.appendChild(text);
    cont.appendChild(p);
}

// appends upvote ratio
function appendRatio(post) {
    let cont = document.getElementById('data');
    let p = document.createElement('p');
    let text = document.createTextNode('Up/downvote ratio: ' + post.upvote_ratio);

    p.appendChild(text);
    cont.appendChild(p);
}

// appends source
function appendSource(post) {
    const prefix = 'https://www.reddit.com';
    let cont = document.getElementById('data');
    let a = document.createElement('a');
    let text = document.createTextNode('-> Post by ' + post.author);

    a.setAttribute('target', '_blank');
    a.setAttribute('href', prefix + post.permalink);
    a.appendChild(text);
    cont.appendChild(a);
}