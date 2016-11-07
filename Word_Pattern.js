/*
Given a pattern and a string str, find if str follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
Examples: pattern = "abba", str = "dog cat cat dog" should return true. pattern = "abba", str = "dog cat cat fish" should return false. pattern = "aaaa", str = "dog cat cat dog" should return false. pattern = "abba", str = "dog dog dog dog" should return false. Notes: You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

*/


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var patternMap = {};
    var strMap = {};
    var ary = str.split(/\s/)


    if(pattern.length != str.split(/\s/).length){
        return false;
    }

    for(var i in pattern){
        var p = pattern[i];
        var s = ary[i];
    
        if(!patternMap[p]){
            patternMap[p] = s;
        } else if(patternMap[p] != s){
            return false;
        }

        if(!strMap[s]){
            strMap[s] = p;
        }  else if(strMap[s] != p) {
            return false;
        }

    }

    return true;
};
