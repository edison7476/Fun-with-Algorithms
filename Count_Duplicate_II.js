/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <= 1) return false;

    //using map to store appeared numbers
    var map = {};

    for(var i in nums){
        var v = nums[i];

        if(map[v] && (i - map[v] <= k)){

            return true;
        }

        map[v] = i;
    }

    return false;
};
