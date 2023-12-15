const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
const apiEndpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(apiEndpoint, (error, response, body) => {
  if (error) {
    callback(`Error: ${error.message}`, null);
  } else if (response.statusCode !== 200) {
    callback(`Unexpected status code: ${response.statusCode}`, null);
  } else {
    const data = JSON.parse(body);

    if (data.length > 0 ) {
      callback(null, data[0].description);
    } else {
      callback(`Breed not found.`, null);
    }
  }
})
};


module.exports = {fetchBreedDescription};