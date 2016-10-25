/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(!s) return true;

  //split the combination of left characters  and right characters in to 2 groups
  var left = ['(','{','['];
  var right = [')', '}', ']'];

  // Define a match table so we can use the table to check if the combination of parentheses matches
  var matchTable = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

};
