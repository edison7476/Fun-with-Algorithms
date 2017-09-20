/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
 */

/**
 * 
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

var isSymmetric = function(root) {
    if (!root || !root.left && !root.right) return true;
    return checkNodeValue(root.left, root.right);
}

/**
 * This function does the jod to chech node values on each symmetric position
 * There are 3 cases:
 *  1. both nodes at the symmetrci postion are empty ==> symmetric
 *  2. one of the node at the symmetrci postion is empty ==> NOT symmetric
 *  3. symmetric <==> both node values at the symmetrci postion are the same
 */
function checkNodeValue(leftNode, rightNode) {
   /**
   * If Both nodes contain values, then we check if the values are the same
   * if they are the same valus, then we keep comparing the nodes at the symmetric positions
   */
   if (!leftNode && !rightNode) {
       return true;
   } else if (!leftNode || !rightNode) {
       return false;
   }
   /**
   * If Both nodes contain values, then we check if the values are the same
   * if they are the same valus, then we keep comparing the nodes at the symmetric positions
   */
   return leftNode.val === rightNode.val &&
        checkNodeValue(leftNode.left, rightNode.right) &&
        checkNodeValue(leftNode.right, rightNode.left);
}