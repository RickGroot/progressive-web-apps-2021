let data = [];
let id;

//saves data and id
function saveJSON(obj) {
    data.push(obj);
    id = data.map(obj => obj.id);
}

//cleans JSON on page reload
function cleanJSON() {
    data = [];
}

export { saveJSON, cleanJSON, data, id };