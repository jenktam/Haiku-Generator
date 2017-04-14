/*
This is the main program file. It requires the export objects from makeHaiku and parseDict. They are both used in here to log you haiku to the console.
*/

var fs = require("fs");
var parseDict = require('./parseDict.js');
var makeHaiku = require('./makeHaiku.js');

var cmudictFile = readCmudictFile('./cmudict.txt');
var words = parseDict.formatData(cmudictFile);

// Synchronous call to cmudictFile
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

var array1 = [
              [2,3],
              [1,3,3],
              [3,2],
              [3,2],
              [3,2],
              [3,2]
            ];

var haiku1 = makeHaiku.createHaiku(array1, words);
console.log(haiku);
console.log(haiku1);
