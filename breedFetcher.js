const request = require('request');
const breed = process.argv[2];
const apiEndpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(apiEndpoint, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
  } else {
    const data = JSON.parse(body);
    if (data.length > 0 && data[0].name.toLowerCase() === breed.toLowerCase()) {
      console.log(`${breed} found! Here is the data:`, data[0]);
    } else {
      console.error(`${breed} not found.`);
    }
  }
});