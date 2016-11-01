/*
Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.
*/

var removeElement = function(nums, val) {
    var index = 0;

    for(var i = 0; i < nums.length; i++){
        if(nums[i] !== val ){
            nums[index++] = nums[i];
        }
    }

    /*
      nums = [3,2,2,3]
      val = 3
      nums[i]           3   2  2  3
      nums[i] !== val   F   T  T  F
      index             0   1  2  2
      i                 0   1  2  3

      nums = [2,2,2,3]
    */

    // the number of index = the number of remaining elements
    // since we are returing the length of the array, we can just return index
    return index;


};
