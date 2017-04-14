var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var words = formatData(cmudictFile);

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

// object constructor for each word
function Word(wordString, phoneme, numSyllables){
  this.wordString = wordString;
  this.phoneme = phoneme;
  this.numSyllables = numSyllables;
}

function formatData(data){
  var lines = data.toString().split('\n');
  var lineSplit;
  var numSyllables;
  var words = [];

  // runs for each word
  lines.forEach(function(line){
    lineSplit = line.split('  ');
    numSyllables = countSyllables(lineSplit[1]);

    // numSyllables = lineSplit[1].split(' ').length;
    // console.log('The word ' + lineSplit[0] + ' has this phoneme    layout: ' + lineSplit[1] + ' numSyllables: ' + numSyllables);

    var word = new Word(lineSplit[0], lineSplit[1], numSyllables);
    words.push(word);
  });

  return words;
}


function countSyllables(phoneme){
  var totalSyllables = 0;
  if(phoneme !== undefined){
    var strings = phoneme.split(' ');
    strings.forEach(function(item){
      if(item.match(/\d/)) {
        totalSyllables += 1;
      }
    });
    return totalSyllables;
  }
}

function generateRandomWord(num, array) {
  // console.log("array:", array);
  var matchingSyllablesArray = [];
  var chosenWord;

  // populate array of words with same # syllables
  for(var i = 0; i < array.length; i++) {
    if(array[i].numSyllables === num) {
      matchingSyllablesArray.push(array[i]);
    }
  }

  if(matchingSyllablesArray.length === 0) {
    throw "No matches found";
  };
  // console.log("matchingSyllablesArray:", matchingSyllablesArray);
  var index = Math.floor(Math.random() * matchingSyllablesArray.length);
  chosenWord = matchingSyllablesArray[index];
  chosenWord = chosenWord.wordString;
  return chosenWord;
}

function createHaiku(haikuNumberArray, array){ // ([5,7,5], arrOfAllWords)
  var haiku = "";
  // randomly select words from cmudict to create haiku
  for(var i = 0; i < haikuNumberArray.length; i++) {
    haiku += generateRandomWord(haikuNumberArray[i], array) + "\n";
  }

  return haiku;
}


  // generateRandomWord(19, words);
  createHaiku([8,2,1], words);

var haiku = createHaiku([8,2,1], words);
var haiku1 = createHaiku([5,7,5], words);
var haiku2 = createHaiku([5,2,3], words);
console.log(haiku);
console.log(haiku1);
console.log(haiku2);


