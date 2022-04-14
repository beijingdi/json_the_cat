const request = require('request');
if (process.argv.length < 3) {
  throw ("Entry cannot be blank");
  
}

let breedNamestr = process.argv[2].substring(0,3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedNamestr}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  if (error) {
    throw ("Connection not established.Please check your network condition and url input");
  }
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  let data = JSON.parse(body);
  if (data && data.length === 0) {
    throw ("Cannot find information for the breed entered");
  }
  //console.log('data:', data); // Print the HTML for the Google homepage.
  ///console.log("type of data:" + typeof(data));
  console.log(data[0]["description"]);
  return;
  
});
 