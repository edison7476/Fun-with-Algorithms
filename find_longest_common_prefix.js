/**
 * Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
    Note:

    All given inputs are in lowercase letters a-z.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

 // Horizontal comparison
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return '';
    }

    let commonPrefix = strs[0];

    for (let str of strs) {
        // if the current str doesnt start with commonPrefix
        // take off the last character of the commonPrefix and try again
        while(commonPrefix && str.indexOf(commonPrefix) !== 0) {
            findCommonPrefix(str);
        }

        // escape for loop if commonPrefix is empty
        if (!commonPrefix) {
            break;
        }
    }
    return commonPrefix;

    function findCommonPrefix(str) {
        lastChar = commonPrefix.length - 1;
        commonPrefix = commonPrefix.substring(0, lastChar);
    }
};

// Vertical comparison
var longestCommonPrefixVertical = function(strs) {
    if (!strs || !strs.length) {
        return '';
    }

    // take each character from the first string
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        /** 
         * compare the character of the first string
         * vertically with the rest of the strings
         * e.g.
         * ["flower","flow","flight"]
         * index i = 0; f -> f -> f
         * index i = 1; l -> l -> l
         * index i = 2; o -> o -> i -> stop
         * take substring 0 -> 2 from the first string ('fl')
        */
        for (let j = 1; j < strs.length; j++) {
            if (char !== strs[j][i]) {
                return strs[0].substring(0, i);
            }
        }
    }
}