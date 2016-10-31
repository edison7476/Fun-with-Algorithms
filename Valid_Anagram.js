/*
Given two strings s and t, write a function to determine if t is an anagram of s.
For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.
Note:
You may assume the string contains only lowercase alphabets.
*/


var isAnagram = function(s, t) {
    // var table = {}

    // if(t == "" && s == "") return true

    // else if(t.length != s.length ) return false

    // for(var i in s){
    //     table[s[i]] = (table[s[i]] || 0) + 1;
    // }

    // for(j in t){
    //     table[t[j]]--
    //     if(table[t[j]] < 0 || isNaN(table[t[j]] )) return false
    // }

    // return true

    if(s.length != t.length) return false;

    var s = s.split("").sort().join("");
    var t = t.split("").sort().join("");

    return s == t;
};
