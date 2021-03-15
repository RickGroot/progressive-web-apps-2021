import { category } from "./interaction.js"

// gets the right subreddit
export function getSubreddit() {
    let random;

    //if statements check selected category
    if (category === 'nature') {

        //select subreddits for this category
        const subReddits = [
            'NatureIsFuckingLit',
            'travel',
            'EarthPorn',
            'natureporn'
        ];

        //select a random subreddit from list above
        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random;

    } else if (category === 'cars') {

        const subReddits = [
            '4Runner',
            'carporn',
            'F1Porn',
            'RallyPorn',
        ];

        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random;

    } else if (category === 'art') {

        const subReddits = [
            'Art',
            'ArtPorn',
            'Calligraphy',
            'Design',
            'drawing',
            'doodles',
            'Graffiti',
            'Illustration'
        ];

        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random;

    } else if (category === 'food') {

        const subReddits = [
            'food',
            'FoodPorn',
            'DessertPorn',
            'CulinaryPorn'
        ];

        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random;

    } else if (category === 'animal') {

        const subReddits = [
            'Aww',
            'Sneks',
            'RarePuppers',
            'wildlifephotography',
            'AnimalPorn',
            
        ];

        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        return random;

    }

    return random;
}