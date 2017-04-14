var fs = require("fs");
var parseDict = require('./parseDict.js');
var makeHaiku = require('./makeHaiku.js');

var cmudictFile = readCmudictFile('./cmudict.txt');
var words = parseDict.formatData(cmudictFile);

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}


var haiku = makeHaiku.createHaiku([8,2,1], words);
var haiku1 = makeHaiku.createHaiku([5,7,5], words);
var haiku2 = makeHaiku.createHaiku([5,2,3], words);
var array = [
              [2,3],
              [1,3,3],
              [3,2]
            ];

// work on complexity
// var haiku3 = makeHaiku.createHaiku(array, words);
console.log(haiku);
console.log(haiku1);
console.log(haiku2);
// console.log(haiku3);
