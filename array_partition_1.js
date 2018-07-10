/** 
    Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

    Example 1:
    Input: [1,4,3,2]

    Output: 4
    Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
    Note:
    n is a positive integer, which is in the range of [1, 10000].
    All the integers in the array will be in the range of [-10000, 10000].

 */

 /**
 * @param {number[]} nums
 * @return {number}
 */

// what we want to do here is to pair the closest 2 numbers together
// one way to do this is to sort the array first
// then loop thru the elements by 2 steps
// and sum every odd element (even index 0, 2, 4,...)
var arrayPairSum = function(nums) {
    if (!nums || !nums.length) {
        return;
    }

    let largestSum = 0;
    nums.sort((a, b) => a - b);
    
    for (let i =  0; i < nums.length ; i += 2) {
        largestSum += nums[i];
    }
    
    return largestSum;
};