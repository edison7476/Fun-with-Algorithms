/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example,
Given s = "Hello World",
return 5.


*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var ary = s.split(/\s/);

  if(s.length === 0) return 0;
  if(ary.length === 0) return 0;


  while(ary.length > 0){
      var v = ary.pop();
      if(v.length > 0){
          return v.length;
      }

  }

  return 0;
};
