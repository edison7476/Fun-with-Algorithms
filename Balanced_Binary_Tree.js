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
    // Check the depth of each sub-node on each tree level
    const leftNodeDepth = findDepth(root.left);
    const rightNodeDepth = findDepth(root.right);
    
    // check the next tree level only if the depth of each node on current tree level satisfied the condition 
    return Math.abs(leftNodeDepth - rightNodeDepth) < 2 &&
        isBalanced(root.left) &&
        isBalanced(root.right);
        
};

// Find the depth of the given node using recursion
function findDepth(node) {
    if (!node) return 0
    
    return Math.max(findDepth(node.left), findDepth(node.right)) + 1;
}



var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    // ex: 1 && true -> true
    // or use Boolen()
    return findDepth(root) && true;

    function findDepth(node) {
        if (!node) {
            return 0;
        }

        const L = findDepth(node.left);
        const R = findDepth(node.right);

        if (L === false || R === false) {
            return false;
        }

        const isBalanceTree = Math.abs(L - R) < 2;

        // false && 1 -> false
        // true && 1 -> 1
        return isBalanceTree && Math.max(L, R) + 1;
    }
}