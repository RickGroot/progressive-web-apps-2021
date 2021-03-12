# Progressive Web Apps @cmda-minor-web · 20-21

In this course we will convert the client side web application previously made Web App From Scratch into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately we are going to implement a series of optimisations to improve the performance of the application.  

## Learning goals
- _You understand the difference between client side and server side rendering and you can apply server side rendering
in your application_
- _You understand how a Service Worker works and you can implement it in your application._
- _You understand how the critical render path works and how you can optimize it for a better runtime and / or perceived performance._

[Rubric with learning goals](https://icthva.sharepoint.com/:x:/r/sites/FDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt/_layouts/15/Doc.aspx?sourcedoc=%7B276F53A7-2531-4006-8AD2-08C9A82D3A11%7D&file=PWA%202021%20Rubric.xlsx&action=edit&mobileredirect=true&wdPreviousSession=92686bea-446f-40e3-9303-33fa3f832b82&wdOrigin=TEAMS-ELECTRON.teams.undefined)

## Progress
### Week 1
First week of this course I was setting up my project with different types of compilers and bundlers. I looked into npm scripts and setting up simple commands. After this week I could use my main function, but modules were not supported because of the use of node, which doesn't support modules. I got my main version working using rollup and node, but that's not enough to get all functionality to my app, so I started testing different compilers and bundlers like browserify and babel. At the end of this week I got my main functionality working using nodemon, babel, express and ejs.  

To-Do:
* Build script
* Adding a detail page
* Data manipulation, checking image types (optional)


<!-- Add a link to your live demo in Github Pages 🌐-->
## Live link
N/A, sorry

<!-- ☝️ replace this description with a description of your own work -->
## This project
Pintreddit is a simple web application for inspiration. This project uses the reddit API, and data from reddit and puts it into your browser. With random images every refresh inspiration is guaranteed!

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
  $ T.B.A.
```

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->
### JSON example
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

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
# Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)