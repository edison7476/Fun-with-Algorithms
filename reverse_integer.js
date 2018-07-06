/**
 * Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:

    Input: 123
    Output: 321
    Example 2:

    Input: -123
    Output: -321
    Example 3:

    Input: 120
    Output: 21

    Note:
    Assume we are dealing with an environment which could only store integers
    within the 32-bit signed integer range: [−231,  231 − 1].
    For the purpose of this problem,
    assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
      const sign = (x < 0) ? -1 : 1;
      let reversedInt = 0;
  
      // covert x to a positive integer
      x = sign * x;
  
      if(x > Math.pow(2,31) || !x) {
          return 0;
      }
  
      while(x > 0) {
          // get the last digit using modulo
          lastDigit = x % 10;
          
          // Multiplying current reversed integer by 10 (carry)
          // before adding the last digit (strip from x) 
          // to the current reversed integer
          // e.g. 3 -> 30
          reversedInt = reversedInt * 10 + lastDigit;
  
          // convert a float to an integer using a no-op binary or (| 0):
          // same as x = Math.floor(x / 10);
          // or we can substacct the last digit then x / 10
          // x = (x - lastDigit) / 10;
          x = (x / 10) | 0;
      }
      
      // Check if the reversed integer is also satisfied the condition
      return reversedInt > Math.pow(2, 31) ?
          0 :
          sign * reversedInt;
  };