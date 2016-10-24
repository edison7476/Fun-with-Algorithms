/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var numsTable = {};

    for(var i = 0; i < nums.length; i++){
        numsTable[nums[i]] = (numsTable[nums[i]] || 0) + 1;
        if(numsTable[nums[i]] > 1){
            return true;
        }
    }
    return false;
};
