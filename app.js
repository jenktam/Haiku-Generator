var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

// object constructor for each word
var Word = function(wordString, phoneme, numSyllables){
  this.wordString = wordString;
  this.phoneme = phoneme;
  this.numSyllables = numSyllables;
}

function formatData(data){
  var lines = data.toString().split('\n');
  var lineSplit;
  var numSyllables;
  var words = [];
  lines.forEach(function(line){
    lineSplit = line.split('  ');
    numSyllables = countSyllables(lineSplit[1]);

    // numSyllables = lineSplit[1].split(' ').length;
    // console.log('The word ' + lineSplit[0] + ' has this phoneme    layout: ' + lineSplit[1] + ' numSyllables: ' + numSyllables);

    var word = new Word(lineSplit[0], lineSplit[1], numSyllables);
    words.push(word);
  });

  // console.log("words:", words);


//  var word1 = words[Math.floor(Math.random() * words.length)].wordString;
//   console.log(word1);
// generateRandomWord(5, words);
  generateHaiku([15,2,1,7,2,2,1], words);
}

formatData(cmudictFile);


function countSyllables(line){
  if(line !== undefined){
    syllables = line.split(' ').length;
    return syllables;
  }
}

function generateRandomWord(num, array) {
  var matchingSyllablesArray = [];

  // populate array of words with same # syllables
  for(var i = 0; i < array.length; i++) {
    if(array[i].numSyllables === num) {
      matchingSyllablesArray.push(array[i]);
    }
  }
  // console.log("matchingSyllablesArray:", matchingSyllablesArray);
  var randomlyChosenWord = matchingSyllablesArray[Math.floor(Math.random() * matchingSyllablesArray.length)].wordString;
  console.log("Chosen Word:", randomlyChosenWord + "\n");
  // return word1;
}

function generateHaiku(haikuNumberArray, array){ // [5,7,5]
  // randomly select words from cmudict to create haiku
  for(var i = 0; i < haikuNumberArray.length; i++) {
    generateRandomWord(haikuNumberArray[i], array);
  }
}


