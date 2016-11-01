/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/

var intersect = function(nums1, nums2) {
    var result = [];
    /*
        Determine which array is shorter.
        We only need to check every element in the shorter array
        and see if we can the same element exist in the longer array
    */
    var CheckThisArray = nums2;
    var LoopThisArray = nums1;

    if(nums1.length >  nums2.length){
        CheckThisArray = nums1;
        LoopThisArray  = nums2;
    }


    for(var i = 0; i < LoopThisArray.length; i++){
        var value  = LoopThisArray[i];
        if(CheckThisArray.indexOf(value) >= 0 ){
            /*
              if we found the common element in the longer array (CheckThisArray),
              then we need to remove that element from the longer array,
              so we won't over count it.
              ex: long array =  [1,3,2,3,1]
                  short array = [3,3,3]
                  The result will be [3,3,3] if we don't remove the common element from the long array once we found it
            */
            CheckThisArray[CheckThisArray.indexOf(value)] = null;
            result.push(value);
        }
    }
    return result;
};
