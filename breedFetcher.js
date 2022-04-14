const request = require('request');
//let breedNamestr = process.argv[2].substring(0,3);
//if (process.argv.length < 3) {
//throw ("Entry cannot be blank");


const fetchBreedDescription = function(breedName, cb) {
  let substring = breedName.substring(0,3);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${substring}`, (error, response, body) => {
    let desc = null;
    if (JSON.parse(body).length !== 0) {
      desc = JSON.parse(body)[0]["description"];
    }
    cb(error, desc);
  //console.log('error:', error); // Print the error if one occurred
  //callback(error,body);
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log(JSON.parse(body)[0]["description"]);
  });
   
};
 
/*let errorHandling = (error,body) => {
  if (error) {
    throw ("Connection not established.Please check your network condition and url input");
  if (JSON.parse(body) === 0) {
    throw ("Cannot find information for the breed entered");
  }
};*/

module.exports = { fetchBreedDescription };


//console.log('data:', data); // Print the HTML for the Google homepage.
///console.log("type of data:" + typeof(data));
  
  
