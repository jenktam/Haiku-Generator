exports.formatData = function(data){
  var lines = data.toString().split('\n');
  var lineSplit;
  var numSyllables;
  var words = [];

  // formats each word into an individual object within word array
  lines.forEach(function(line){
    lineSplit = line.split('  ');
    numSyllables = countSyllables(lineSplit[1]);
    var word = new Word(lineSplit[0], lineSplit[1], numSyllables);
    words.push(word);
  });

  return words;
};

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

// object constructor for each word
function Word(wordString, phoneme, numSyllables){
  this.wordString = wordString;
  this.phoneme = phoneme;
  this.numSyllables = numSyllables;
};
