function createHaiku(haikuNumberArray, array){ // [5,7,5]
  // randomly select words from cmudict to create haiku
  for(var i = 0; i < haikuNumberArray.length; i++) {
    generateRandomWord(haikuNumberArray[i], array);
  }
}
