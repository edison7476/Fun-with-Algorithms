/**
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as a binary tree 
 * in which the depth of the two subtrees of every node never differ by more than 1.

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Idea go to each level from top to bottom
// check the difference of the depth of subtrees of each node 
var isBalanced = function(root) {
    
    if (!root) return true
    const leftNodeDepth = findDepth(root.left);
    const rightNodeDepth = findDepth(root.right);
    
    return Math.abs(leftNodeDepth - rightNodeDepth) < 2 &&
        isBalanced(root.left) &&
        isBalanced(root.right);
        
};

function findDepth(node) {
    if (!node) return 0
    
    return Math.max(findDepth(node.left), findDepth(node.right)) + 1;
}



