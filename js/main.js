
var allAnagrams = function(string) {
  var result = {};
  (function makeWord (word, remaining){
    if(!remaining){
      console.log(word)
      return result[word] = true;
   }
      for(var i = 0; i < remaining.length; i++){
        makeWord(word + remaining[i], remaining.substr(0, i) + remaining.substr(i+1));
      }
    })('', string);
    return Object.keys(result);
  };



var allAnagramsArray = allAnagrams('love');
console.log(allAnagramsArray);