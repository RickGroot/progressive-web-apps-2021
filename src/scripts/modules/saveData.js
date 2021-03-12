let data = [];
let id;
let sign;
// let url = [];

//saves data and id
function saveJSON(obj) {
    // console.log(obj)
    data.push(obj);
    // test.push(obj.id)
    // console.log(test)
    // id = data.map(obj => obj.id);

    if (data.length === 6) {
        sign = true;
        return sign
    }
}

//cleans JSON on page reload
function cleanJSON() {
    data = [];
}

async function getData() {
    await sign;
    if (sign === true) {
        return data;
    }
}

export { saveJSON, cleanJSON, data, id, getData };