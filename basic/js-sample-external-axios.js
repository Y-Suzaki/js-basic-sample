const axios = require('axios');
const url = "https://google.com";

//
// When axios get method is called, it returns the promise object.
//
axios.get(url)
    .then(response => {
        console.log(response.status);
        //console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });

//
// improve the above code with async and wait grammar.
//
async function get(url) {
    try {
        const response = await axios.get(url);
        console.log(response.status);
        return response
    } catch (e) {
        console.log(e)
    }
}

get(url).then(
    response => console.log(response)
)
