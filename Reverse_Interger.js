/*

Reverse digits of an integer.

Example1: x = 123, return 321 Example2: x = -123, return -321

Have you thought about this? Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var INT_MAX = Math.pow(2,31)-1;
    if(0 <= x && x < 10) return x;

    var nFlag = "";
    // x to string
    var str = x.toString();

    // reverse number string
    var rStr = nFlag + str.split("").reverse().join("");

    // if x < 0, move '-'  from rStr back to front
    if(rStr.indexOf('-') != -1){
        rStr = '-' + rStr.replace('-','');    
    }

    var result = parseInt(rStr);

    if(result > INT_MAX || result < -(1+INT_MAX)) return 0;
    return result;
};
