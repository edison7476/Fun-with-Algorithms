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

  else if (s.length === 1) return false;

   //split the combination of left characters  and right characters in to 2 groups
   var left =  [ '(', '{', '[' ];
   var right = [ ')', '}', ']' ];

   // Define a match table so we can use the table to check if the combination of parentheses matches
   var matchTable = {
     ")" : "(",
     "}" : "{",
     "]" : "["
   };

   // create an array varaible to store the left part parentheses in the given string
   var check = [];

   for (i in s){
     // if we found a character in the string that belongs to the left part
     // we store it in an array
     if(left.indexOf(s[i]) > -1 ){
       check.push(s[i]);
     }
     // if we found a character in the string that belongs to the right part
     // we take the last element in the check array and see if the left part and the right part match
     else if(right.indexOf(s[i]) > -1 ){
       var leftParenthese = check.pop();
       if( matchTable[s[i]] != leftParenthese ) return false;
     }

   }
   // if all the characters in the string match, then the length of check array should be 0
   return check.length === 0;

};
