exports.formatData = function(data){
  var lines = data.toString().split('\n');
  var lineSplit;
  var numSyllables;
  var words = [];

  // formats each word into an individual object and then pushes information into the words array
  lines.forEach(function(line){
    lineSplit = line.split('  ');
    numSyllables = countSyllables(lineSplit[1]);
    var word = new Word(lineSplit[0], lineSplit[1], numSyllables);
    words.push(word);
  });

  return words;
};

/*Counts the number of syllables in the CMUDict file.
Link: https://gist.githubusercontent.com/davidyang/d4076ecf66056b3d0b73/raw/0d0ada7e0d99db349b54de38922eb1c112437c8f/a.rb

Syllables determined by looking at pronounciation version from file and counting syllables based on the number of numbers found in each word.
*/
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
};

// Object Constructor for each word
function Word(wordString, phoneme, numSyllables){
  this.wordString = wordString;
  this.phoneme = phoneme;
  this.numSyllables = numSyllables;
};
