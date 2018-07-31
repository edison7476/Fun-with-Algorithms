/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

    For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

    Example:

    Given the sorted array: [-10,-3,0,5,9],

    One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) {
        return null;
    }

    
    return createBST(0, nums.length);
    
// [0, 1, 2, 3, 4, 5, 6]
// mid = 3 L = 0 - 2, R = 4 - 6
// mid = 1 L = 0 - 0, R
    function createBST(startIndex, endIndex) {
        
        if (endIndex < startIndex) {
            return null;
        }
        const midPoint = Math.floor((startIndex + endIndex) / 2);
        // if (!nums[midPoint]) {
        //     return null;
        // }
        
        // const partailNums = nums.slice(startIndex, endIndex);
        
        const bst = new TreeNode(partailNums[mid]);
        // const bst = new TreeNode(nums[mid]);
        bst.left = createBST(startIndex, midPoint - 1);
        bst.right = createBST(midPoint + 1, endIndex);
        
        return bst;
    }
};

