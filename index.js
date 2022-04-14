const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv[2];
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } 
  if(desc === null) {
    error = "Invalid entry of breed. Please retry");
    throw(error);
  }
});