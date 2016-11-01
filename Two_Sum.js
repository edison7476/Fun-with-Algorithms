var twoSum = function(nums, target) {
   // Ths is the straight way of solving the problem with O(n^2) runtime complexity
   // for (var i = 0; i<= nums.length; i++){
   //     for(var j = i+1; j<= nums.length; j++){
   //         if(nums[i] + nums[j] == target){
   //             return [i,j];
   //         }
   //     }
   // }

   var matchTable = {};

   for(var i = 0; i < nums.length; i++){
       var currentElement = nums[i];
       // Let target = currentElement + x
       // matchTable[target - currentElement] >= 0 means x is in the matchTable
       if(matchTable[target - currentElement] >= 0){
           return [matchTable[target - currentElement],i];
       }
       else{
           matchTable[currentElement] = i ;
       }
   }
};
