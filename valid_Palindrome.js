/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

    Note: For the purpose of this problem,
    we define empty string as valid palindrome.

    Example 1:

    Input: "A man, a plan, a canal: Panama"
    Output: true
    Example 2:

    Input: "race a car"
    Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s) {
        return true;
    }
    // s.replace(/\W/g, '')
    // \W is the equivalent of [^0-9a-zA-Z_]
    // To also remove underscores use
    const newStr = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const numOfiterations = Math.floor(newStr.length / 2);

    for (let i = 0; i < numOfiterations; i ++) {
        const indexFromEnd = newStr.length - 1 - i;
        
        if (newStr[i] !== newStr[indexFromEnd]) {
            return false;
        }
     
    }

    return true;
};