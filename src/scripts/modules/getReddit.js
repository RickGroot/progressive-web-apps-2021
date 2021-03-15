const domain = 'https://www.reddit.com/r/';
const end = '/random/.json';

export function getReddit(cat) {
    if (cat === 'nature') {
        const subReddits = [
            'NatureIsFuckingLit',
            'travel',
            'EarthPorn',
            'natureporn'
        ];
        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        let url = domain + random + end;
        return url;
    } else if (cat === 'cars') {
        const subReddits = [
            '4Runner',
            'carporn',
            'F1Porn',
            'RallyPorn',
        ];
        let random = subReddits[Math.floor(Math.random() * subReddits.length)];
        let url = domain + random + end;
        return url;
    } else if (cat === 'art') {
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
        let url = domain + random + end;
        return url;
    }
}