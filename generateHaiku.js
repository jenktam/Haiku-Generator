var fs = require("fs");
var parseDict = require('./parseDict.js');
var makeHaiku = require('./makeHaiku.js');

var cmudictFile = readCmudictFile('./cmudict.txt');
var words = parseDict.formatData(cmudictFile);

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}


// Tests
var array = [
              [5,7,1,1],
              [4,3,5],
              [5,7,5]
            ];

var haiku = makeHaiku.createHaiku(array, words);
var haiku1 = makeHaiku.createHaiku([5,7,5], words);
var haiku2 = makeHaiku.createHaiku([5,2,3], words);
var array3 = [
              [2,3],
              [1,3,3],
              [3,2],
              [3,2],
              [3,2],
              [3,2]
            ];

// work on complexity
var haiku3 = makeHaiku.createHaiku(array3, words);
console.log(haiku);
// console.log(haiku1);
// console.log(haiku2);
console.log(haiku3);
