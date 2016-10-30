/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

*/

var firstUniqChar = function(s) {
  var table = {};
  s = s.split("");

  if(s.length === 0) return -1;

  for (var i = 0; i<s.length; i++){
      table[s[i]] = (table[s[i]] ||0 ) + 1;
  }

  for(var j in table){
      if(table[j] === 1){
         return s.indexOf(j);
      }
  }
  return -1;

};
