/**
 * Given an input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. Don't worry about duplicate
 * strings. What is the time complexity of your solution?
 *
 * Extra credit: Return only unique strings without using _.uniq().
 */

var allAnagrams = function(string) {
  var result = {};
  (function makeWord(word, remaining) {
    if (!remaining) {
      return result[word] = true;
    }
    for (var i = 0; i < remaining.length; i++) {
      makeWord(word + remaining[i], remaining.substr(0, i) + remaining.substr(i + 1));
    }
  })('', string);
  return Object.keys(result);
};



var allAnagramsArray = allAnagrams('herb');

for (var i = 0; i < allAnagramsArray.length; i++) {
  setTimeout(function(y) {
    console.log(allAnagramsArray[y]);
  }, i * 1000, i);
}