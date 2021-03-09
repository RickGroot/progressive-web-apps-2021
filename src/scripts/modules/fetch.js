import { saveJSON, cleanJSON, data, id } from './saveData.js';

const fetch = require("node-fetch");

// ----------------------------------------------------------------------------------------- start function chain
export function callFetch() {
    // Loop below fetches 10 images from reddit API, one per second
    let i = 0; //  set your counter to 0

    function loop() {
        setTimeout(() => { //  call a 3s setTimeout when the loop is called
            // fetchSubreddits(getSubreddit());

            fetchSubreddits('EarthPorn');

            i++; // increment the counter
            if (i <= 9) { // counter will go to 10 and redo callFetch
                loop();
            }
        }, 500);
    }
    loop(); //activates the loop
}

// ----------------------------------------------------------------------------------------- fetches images
function fetchSubreddits(sub) {
    fetch('https://www.reddit.com/r/' + sub + '/random/.json', {
            mode: 'cors'
        })
        .then(response => response.json())
        .then(content => {
            // prevents too many items
            if (!id || id.length <= 9) {
                checkDuplicate(id, content);
            } else {
                return;
            }
        }) // modulate & check image
        .catch(function (error) {
            console.log('Request failed', error)
        });
}

// ----------------------------------------------------------------------------------------- checks for duplicates
function checkDuplicate(arr, data) {
    let post = data[0].data.children[0].data;

    if (!arr) { // if there is no compare data
        checkImage(data);
    } else if (arr.includes(post.id)) { // fetch new image when duplicate
        // fetchSubreddits(getSubreddit());
        fetchSubreddits('EarthPorn');
    } else { // no duplicate
        checkImage(data);
    }
}

// ----------------------------------------------------------------------------------------- modulate & check data
function checkImage(data) {
    let post = data[0].data.children[0].data;

    // if statement below checks if the post is really an image
    if (!post || !data[0] || !data[0].data || post.is_video || post.media) {
        // fetchSubreddits(getSubreddit()); // fetches another image if needed
        fetchSubreddits('EarthPorn');
    } else if ( // checks url tyes
        post.url.toLowerCase().includes('v.redd.it') ||
        post.url.toLowerCase().includes('gallery') ||
        post.url.toLowerCase().includes('youtu') ||
        post.url.toLowerCase().includes('comments') ||
        post.url.toLowerCase().includes('insta') ||
        post.url.toLowerCase().includes('preview') ||
        post.url.toLowerCase().includes('www') ||
        post.url.toLowerCase().includes('imgur')
    ) {
        // fetchSubreddits(getSubreddit());
        fetchSubreddits('EarthPorn');
    } else if (post.ups < 100) { // threshold amount of upvotes
        // fetchSubreddits(getSubreddit());
        fetchSubreddits('EarthPorn');
    } else { // renders image data
        console.log(id)

        // appendPosts(post);
        saveJSON(post);
    }
}