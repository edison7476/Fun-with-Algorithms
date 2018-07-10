/**
 * Given a string which consists of lowercase or uppercase letters,
 * find the length of the longest palindromes that can be built with those letters.

    This is case sensitive, for example "Aa" is not considered a palindrome here.

    Note:
    Assume the length of given string will not exceed 1,010.

    Example:

    Input:
    "abccccdd"

    Output:
    7

    Explanation:
    One longest palindrome that can be built is "dccaccd", whose length is 7.} s 
 */

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {
    if (!s.length) {
        return 0;
    }

    const charachters = {};
    let length = 0;
    let extraChar = 0;

    // for (num of s) {
    //     charachters[num] = charachters[num] + 1 || 1;
    // }
    
    // for loop is much faster
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charachters[char] = charachters[char] + 1 || 1;
    }

    for (char in charachters) {
        // finding if there is an odd num of characters
        // if there is any, we only need 1 extra character 
        if (!extraChar && charachters[char] % 2 !== 0) {
            extraChar = 1;
        }

        // e.g.
        // 5 / 2 = 2 -> 4 (2 * 2) characters can form a Palindrome
        const charNums = Math.floor(charachters[char] / 2) * 2;
        length += charNums;
    }

    // case 1:
    //  we got some characters to form a Palindrome
    //  then we need to add an extra middle character
    //  if there is an odd number of characters
    // case 2:
    //  we can't form a Palindrome. meaning length = 0
    //  we should check if there is any of single extra character available
    //  NOTE: single character is a Palindrome. e.g. 'a'
    //  since we already check if string is empty
    //  so, we should always be able to find an extra character
    return length ? length + extraChar : 1;
};
