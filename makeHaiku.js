generateRandomWord = function(num, array) {
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

exports.createHaiku = function(haikuNumberArray, array){ // ([5,7,5], arrOfAllWords)
  var haiku = "";
  // randomly select words from cmudict to create haiku
  for(var i = 0; i < haikuNumberArray.length; i++) {
    haiku += generateRandomWord(haikuNumberArray[i], array) + "\n";
  }
  return haiku;
}
