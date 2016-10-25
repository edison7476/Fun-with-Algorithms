/*
Given an integer n, return the number of trailing zeroes in n!.
Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var count = 0;
  // In order to generate zeros we need 5 times an even number

  /* observation
   n = 25 ->  5..10..15..20..25 (25 = 5*5)   -> total siz 5's implies 6 zeroes
   n = 50 ->  5..10..15..20..25 (25 = 5*5)
          -> 30..35..40..45..50 (50 = 5*5*2) -> total 12 5's implies 12 zeroes
   n = 125 ->   5..10..15..20..25 (25 = 5*5)
           ->  30..35..40..45..50 (50 = 5*5*2)
           ->  55..60..65..70..75 (75 = 5*5*3)
           ->  80..85..90..95..100 (100 = 5*5*4)
           -> 105..110..115..120..125 (125 = 5*5*5)

    conclusion:
                            k
     trailing zeros in n! = ∑ floor(n / (5^k) )  whrer k = log_5(n)
                            1

      and can be simplfied to the following
  */
  while(n >= 5){
      count += Math.floor(n/5);
      n = parseInt(n/5);
  }

  return count;
};
