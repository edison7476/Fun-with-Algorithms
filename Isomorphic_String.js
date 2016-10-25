/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var tableS = {};
    var tableT = {};

    for(var i in s){
      
      if(!tableS[s[i]]){
        tableS[s[i]] = t[i];
      }
      else if(tableS[s[i]] != t[i]){
        return false;
      }

      if(!tableT[t[i]]){
        tableT[t[i]] = s[i];
      }
      else if(tableT[t[i]] != s[i]){
        return false;
      }
    }
    return true;
};
