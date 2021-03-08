export function callFetch() {
    // Loop below fetches 10 images from reddit API, one per second
    let i = 0; //  set your counter to 0

    function loop() {
        setTimeout(() => { //  call a 3s setTimeout when the loop is called
            // fetchSubreddits(getSubreddit());

            // console.log('hallo daar ik ben er klaar mee')

            i++; // increment the counter
            if (i < 9) { // counter will go to 10 and redo callFetch
                loop();
            }
        }, 500);
    }
    loop(); //activates the loop
}