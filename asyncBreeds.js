const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // Passing data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

// console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);
breedDetailsFromFile('Balinese', printOutCatBreed);