/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

    Example:
    Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    

    Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

    Note: The length of path between two nodes is represented by the number of edges between them.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) {
        return 0;
    }
    
    let diameter = 0;
    findMaxDepth(root);

    return diameter;

    function findMaxDepth(node) {
        if (!node) {
            return 0;
        }
        
        const L = findMaxDepth(node.left);
        const R = findMaxDepth(node.right);
        // check if  the current diameter
        // or the sum of left and right edges is longer
        diameter = Math.max(diameter, L + R);

        // returs the max depth of the current node.
        return Math.max(L, R) + 1;
    }
}