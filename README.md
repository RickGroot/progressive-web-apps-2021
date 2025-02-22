# Progressive Web Apps @cmda-minor-web · 20-21

## This project
Pintreddit is a simple web application for inspiration. This project uses the reddit API, and data from reddit and puts it into your browser. With random images every refresh inspiration is guaranteed! This web-application is converted from [Web App From Scratch](https://github.com/RickGroot/web-app-from-scratch-2021) into a server side rendered application.
![Preview](https://github.com/rickgroot/progressive-web-apps-2021/blob/main/assets/preview.jpg?raw=true)

## Live link
[Click here to view live site!](https://rick-groot-pwa.herokuapp.com/category/nature)

## Table of contents 
* [Progress](https://github.com/RickGroot/progressive-web-apps-2021#progress)
* [Installation guide](https://github.com/RickGroot/progressive-web-apps-2021#install-this-project)
* [Features](https://github.com/RickGroot/progressive-web-apps-2021#features)
* [Service worker](https://github.com/RickGroot/progressive-web-apps-2021#service-worker)
* [Performance](https://github.com/RickGroot/progressive-web-apps-2021#performance)
* [Scripts](https://github.com/RickGroot/progressive-web-apps-2021#scripts)
* [Data](https://github.com/RickGroot/progressive-web-apps-2021#data)
* [Future](https://github.com/RickGroot/progressive-web-apps-2021#future-enhancements)

## Progress
### Week 1
<details>
<summary>View progress of Week 1</summary>
First week of this course I was setting up my project with different types of compilers and bundlers. I looked into npm scripts and setting up simple commands. After this week I could use my main function, but modules were not supported because of the use of node, which doesn't support modules. I got my main version working using rollup and node, but that's not enough to get all functionality to my app, so I started testing different compilers and bundlers like browserify and babel. At the end of this week I got my main functionality working using nodemon, babel, express and ejs.  

To-Do:
* **create live version** *!important*
* Build script
* Adding a detail page
* Data manipulation, checking image types (optional)
</details>

### Week 2
<details>
<summary>View progress of Week 2</summary>
New week, new me. This week I started making some progress. I realised babel and other stuff isn't necessary for now, so I deleted that functionality. After that I started pushing to heroku, which worked and now I can see all of my project in the browser. It's a huge cleanup which has set me back, but I think from here on out I can make good progress. Next I started adding more modules, and more pages. Now there is a detail page whitch fetches a single image, and also a not found page.  
I also implemented a manifest.json which contains all icons and colors, and I addd a serviceworker. My serviceworker saves some data from the app, like my manifest file, an offline page and the CSS. If the user has nog internet connection the pages will not be fetched, and instead it renders an offline page. This only works when the user has visited the site before.

To-Do: 
* Performance
* Skeleton page?
</details>

### Week 3
<details>
<summary>View progress of Week 3</summary>
The focus of this week is performance, how can I make the project be and feel faster. First I started doing some research to the reddit API. The API is very slow, and it takes a lot of time to get back nine images. Rendering these images also takes some time, because the images are very big sometimes. The API unfortunately cannot be any faster, there are no parameters to pass or other faster methods. Then I added some client side JS to increase runtime performance, it now first loads thumbnails which works much faster. I also got working with build scripts. CSS and cient side js now gets compiled and minifed to improve performance. I also added some client side JS to enhance the UX. If a button gets clicked there will be a loading state. This gives the user feedback and (hopefully) makes loading times seem slower.
</details>

## Install this project
    
Clone the repository.
```bash
  $ git clone https://github.com/RickGroot/progressive-web-apps-2021.git
```
    
Navigate to repository...
```bash
  $ cd progressive-web-apps-2021
```

...and then install packages.
```bash
  $ npm install
```
    
Start local dev environment.
```bash
  $ npm run dev
```
    
Build export.
```bash
  $ npm run build
```

## Features
* Get inspired
* Choose your image category
* Look at image details
* See different images every time

## Service worker
To improve loading speed and stability this project has a service worker. Whenever a page gets loaded the service worker looks at the requests and send back CSS and javaScript files. Because these files get stored in your browser cache the response time will become shorter, because these files don't need to be fetched from the server. The service worker also stores an offline page, which is shown whenever the user is offline.

## Performance
### API
API calls take a long time, I did some research to improve fetch time, but there is no solution. Serving cached images doesn't fit the project concept and therefore is not suitable.

### Performance enhancements
| <ul><li>- [x] Minified JS</li><li>- [x] Minified CSS</li><li>- [x] Low total blocking time</li><li>- [x] No layout shifts</li><li>- [x] Very fast contentful paint</li><li>- [x] Very fast time to interactive</li><li>- [ ] Fast API calls</li></ul> | ![Performance](https://github.com/rickgroot/progressive-web-apps-2021/blob/main/assets/performance.jpg?raw=true) |
|:---|:---:|

### UX performance enhancements
* Some client side JS was added to enhance loading experience. When a new page gets loaded there's a loading animation on the image containers. 
* Thumbnails get loaded first, to get a faster first contentful paint and time to interactive. Big images can take up to 5 seconds, and the thumbnails are loaded under 50ms.  

With all of these enhancements the load responsiveness, runtime responsiveness and visual stability is greatly improved. Lighthouse gives me only these improvements: `reduce initial server response` and `avoid big network payloads`.

## Scripts
### NPM scripts
```json
"scripts": {
    "start": "node src/scripts/main.js",
    "dev": "nodemon src/scripts/main.js",
    "watch": "concurrently --kill-others \"npm run watch:css\" \"npm run watch:js\"",
    "watch:css": "chokidar \"src/css/*.css\" --c \"npm run build:css\"",
    "watch:js": "chokidar \"src/scripts/client/*.js\" --c \"npm run build:js\"",
    "build:css": "node scripts/build-css.js",
    "build:js": "node scripts/build-js.js"
  },
```
Most scripts are straight forward. I use build scripts to minify and compress files into my [`public`](https://github.com/RickGroot/progressive-web-apps-2021/tree/main/public) folder, and watch file changes in my src folder using chokidar. Concurrently is used to run multiple npm commands at once, so I can do `npm run watch` to both run watch:js and watch:css at the same time. 

### Build scripts
This project uses two build scripts, located in the [scripts folder](https://github.com/RickGroot/progressive-web-apps-2021/tree/main/scripts).  

#### [`scripts/build-js.js`](https://github.com/RickGroot/progressive-web-apps-2021/blob/main/scripts/build-js.js)
All the (client side) scripts are getting concatenated and minified to one file (`index-min.js`) and placed in the [`public/js`](https://github.com/RickGroot/progressive-web-apps-2021/tree/main/public/js) directory.

#### [`scripts/build-css.js`](https://github.com/RickGroot/progressive-web-apps-2021/blob/main/scripts/build-css.js)
First all the css files are getting processed (with autoprefixer), then it will be concatenated, after that it's getting formatted (with cleanCSS) and eventually the bundled file will be placed in the [`public/css`](https://github.com/RickGroot/progressive-web-apps-2021/tree/main/public/css) directory.

## Data
Data below is some data of an image. This is just a small section of all image data that gets passed to the application trough the reddit API.    

This is some data manipulation to get to the correct data:
```js
let post = data[0].data.children[0].data;
```
    
And this is a section of the JSON data from 'post':
```json
{
    "hide_score": false,
    "id": "ljfawo",
    "link_flair_css_class": null,
    "link_flair_richtext": [],
    "link_flair_text": null,
    "link_flair_text_color": "dark",
    "link_flair_type": "text",
    "locked": false,
    "media": null,
    "media_embed": {},
    "mod_reports": [],
    "name": "t3_ljfawo",
    "no_follow": false,
    "num_comments": 23,
    "num_reports": null,
    "over_18": false,
    "parent_whitelist_status": "all_ads",
    "permalink": "/r/NatureIsFuckingLit/comments/ljfawo/black_rain_frog/",
    "pinned": false,
    "post_hint": "image",
    "preview": {"images": [], "enabled": true},
    "pwls": 6,
    "subreddit": "NatureIsFuckingLit",
    "subreddit_id": "t5_3gdh7",
    "subreddit_name_prefixed": "r/NatureIsFuckingLit",
    "subreddit_subscribers": 4580511,
    "subreddit_type": "public",
    "suggested_sort": "confidence",
    "thumbnail": "https://b.thumbs.redditmedia.com/JL9HCmUeXYEKTiT3_XGdaBFUOubPNRMP_74jRwHnMXo.jpg",
    "thumbnail_height": 105,
    "thumbnail_width": 140,
    "title": "🔥 Black Rain Frog 🔥",
    "top_awarded_type": null,
    "total_awards_received": 0,
    "treatment_tags": [],
    "ups": 314,
    "upvote_ratio": 0.99,
    "url": "https://i.redd.it/rolasx7rtch61.jpg",
    "url_overridden_by_dest": "https://i.redd.it/rolasx7rtch61.jpg",
}
```

### API Drawbacks
The reddit API is huge, and sends you lost of information about everything that has relation to the origional post. This means that every comment, and all userdata is sent via the API. Because of this it's difficult to get the correct data into the application. Another drawback is loading speed. The objects are big, and take some time to load, especially with multiple posts. Same goes for image sizes, feched images from these posts are big file sizes and take some time to load.
<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
## Future enhancements
- [x] Multiple categories
- [ ] Integrate user input filters

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
# Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)