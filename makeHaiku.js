generateRandomWord = function(num, arrayOfAllWords) {
  var matchingSyllablesArray = [];
  var chosenWord;

  // populate array of words that match given syllable number. Then add to new matchingSyllablesArray
  for(var i = 0; i < arrayOfAllWords.length; i++) {
    if(arrayOfAllWords[i].numSyllables === num) {
      matchingSyllablesArray.push(arrayOfAllWords[i]);
    }
  }
  // throw error if no words have matching syllables number.
  if(matchingSyllablesArray.length === 0) {
    throw "No matches found";
  };
  // choose random word
  var index = Math.floor(Math.random() * matchingSyllablesArray.length);
  chosenWord = matchingSyllablesArray[index];W
  chosenWord = chosenWord.wordString;
  return chosenWord;
}

/*This is the main function that connects with the generateHaiku.js file and creates the haikus using the cmudict file.

The multiple words/line haiku is more complex and uses a nested array. Therefore, for clarity I added the innerArray and outerArray to simplify the variables called in the for loops.

*/
exports.createHaiku = function(haikuNumberArray, arrayOfAllWords){ // ([5,7,5], words)
  var haiku = "";
  var outerArray = haikuNumberArray;
  var innerArray;
  for(var i = 0; i < outerArray.length; i++) {
    innerArray = outerArray[i];
    for(var j = 0; j < innerArray.length; j++) {
      haiku += generateRandomWord(outerArray[i][j], arrayOfAllWords);
      if(j < innerArray.length - 1) {
        haiku += " ";
      }
    }
    haiku += '\n';
  }
  return haiku;
}
