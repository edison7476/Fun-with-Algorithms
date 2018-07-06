/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

    Example 1:

    Input: [3,0,1]
    Output: 2
    Example 2:

    Input: [9,6,4,2,3,5,7,0,1]
    Output: 8
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numbersMap = {};

    // create elements in map
    // e.g. [3, 0. 1] -> { 0: true, 1: true; 3: true }
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        numbersMap[num] = true;
    }

    // check which element is missing
    // e.g numbersMap[2] --> undefined --> return 2;
    for (let i = 0; i <= nums.length; i++) {
        if (!numbersMap[i]) {
            return i;
        }
    }
};

// Using Gauss' Formula
// e,g. Given [3, 0, 1]
// expected sum of [0, 1, 2, 3] = (3 + 1) * 3 / 2 = 6;
// actual sum = 3 + 0 + 1 = 4
// missing num = expected sum - actual sum = 6 - 4 = 2;
var missingNumber2 = function(nums) {
    // Given [3, 0, 1]
    // length = 3         
    // expected sum should be calculated
    // [0, 1, 2, 3]          (3)          (1 + 3)
    const expectedSum = nums.length * (nums.length + 1) / 2;
    const actualSum = 0;
    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
};