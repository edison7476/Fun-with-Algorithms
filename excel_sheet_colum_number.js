/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28

*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    /*From the question we know that
      check ANSI code --> A = 65 and we want it to be 1 --> charCode(A) - 64
                      --> B = 66 and we want it to be 2 --> charCode(B) - 64

      if we have 2 characters, this gives
              AA    AB   AC .... AZ
             26+1 26+2 26+3    26+26
              BA    BB   BC .... BZ
             52+1  52+2  52+3    52+4

       --> 26^1*[charCode(letter)-64] + 26^0*[charCode(letter)-64] +

      if we have 3 characters
        ZZ      AAA        AAB ...    AAZ ...    ABA.....ABZ .... ACA
    26*26+26   26^2+26+1  26^2+26+2 26+26+26  26+52+1 26+52+26   26^2+78+1

       -> 26^2*[charCode(letter)-64] + 26^1*[charCode(letter)-64] + 26^0*[charCode(letter)-64]
    */
    var sum = 0;
    var exp = 0;
    for(var i = s.length -1 ; i >= 0 ; i--){

        var column = s.charCodeAt(i) - 64;
        column = column*Math.pow(26,exp++);
        sum += column;
    }
    return sum;
};
