/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var numsTable = {};
    var n = Math.floor(nums.length/2);
    var majorityElement;

    if(nums.length == 1){
        return nums[0];
    }

    for(var i = 0; i < nums.length; i++){
       numsTable[nums[i]]  = (numsTable[nums[i]] || 0) + 1;
        if(numsTable[nums[i]] > n ){
            majorityElement = nums[i];
       }
    }
    return majorityElement;
};
