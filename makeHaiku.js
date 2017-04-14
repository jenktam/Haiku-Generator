generateRandomWord = function(num, arrayOfAllWords) {
  var matchingSyllablesArray = [];
  var chosenWord;

  // populate array of words with same # syllables
  // use nested for loop
  for(var i = 0; i < arrayOfAllWords.length; i++) {
    if(arrayOfAllWords[i].numSyllables === num) {
      matchingSyllablesArray.push(arrayOfAllWords[i]);
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

exports.createHaiku = function(haikuNumberArray, arrayOfAllWords){ // ([5,7,5], words)
  var haiku = "";
  var outerArray = haikuNumberArray;
  var innerArray;
  // randomly select words from cmudict to create haiku
  for(var i = 0; i < outerArray.length; i++) {
    haiku += "|";
    innerArray = outerArray[i];
    for(var j = 0; j < innerArray.length; j++) {
      haiku += generateRandomWord(outerArray[i][j], arrayOfAllWords);
      if(j < innerArray.length - 1) {
        haiku += " ";
      }
    }
    haiku += "|";
    haiku += '\n';
  }
  return haiku;
}
