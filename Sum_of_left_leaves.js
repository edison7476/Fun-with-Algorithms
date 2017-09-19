/**
 * Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var sumOfLeftLeaves = function(root) {
    if (!root) return 0;

    let sum = 0;

    // going through each node
    // return the value of the left node if there is NO children nodes under this left node
    // otherwise repear the process using recursion
    if (root.left) {
        if (!root.left.left && !root.left.right) {
            sum += root.left.val
        } else {
            sum += sumOfLeftLeaves(root.left);
        }
    }
    // withiin the same call stack
    // also check if there is a left node on the right branch
    sum += sumOfLeftLeaves(root.right);

    return sum
};