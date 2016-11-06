/*
Description:
Count the number of prime numbers less than a non-negative number, n.

*/


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    //The price prime number 2 will appear when n = 3
    if(n < 3) return 0;

    var count = 1;
    // We can actually skip those numbers that are divisible by 2 i.e. 4,6,8,10,....2k where k is an interger
    for(var i = 3 ; i < n ; i+=2){
        var flag = true;
        // 判斷i是不是質數
        for(var j = 3 ; j*j <= i; j+=2){
            if(i % j == 0){
                // check if i is divisible by any of previous appeared number.
                flag = false;
                break;
            }
        }

        if(flag) count++;
    }

    return count;
};
