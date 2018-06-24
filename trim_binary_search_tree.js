/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * Def: Binary Search Tree
 * Binary Search Tree, is a node-based binary tree data structure which has the following properties:
 * The left subtree of a node contains only nodes with keys lesser than the node’s key.
 * The right subtree of a node contains only nodes with keys greater than the node’s key.
 * The left and right subtree each must also be a binary search tree.
 * There must be no duplicate nodes.
 *   ex.  8
 *       / \
 *      3  10
 *    / \    \
 *   1  6    14
 *     / \   /
 *    4  7  13
 *

/*
Example 1:
Input: 
    1
   / \
  0   2

  L = 1
  R = 2

Output: 
    1
      \
       2

Example 2:
Input: 
    3
   / \
  0   4
   \
    2
   /
  1

  L = 1
  R = 3

Output: 
      3
     / 
   2   
  /
 1

 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

/**
 * Since this is a binary search tree
 * 1. current node.val < lower bound (L), need a bigger val
 *      -> trim with node.right
 * 2. current node.val > upper bound (R), need a smaller val
 *      -> trim with node.left
 */
function trimBST(root, L, R) {
    if (!root) {
        return;
    }

    if (root.val >= L && root.val <= R) {
        root.left = trimBST(root.left, L , R);
        root.right = trimBST(root.right, L, R);
    }

    if (root.val < L) {
        root = trimBST(root.right, L, R);
    } else if (root.val > R) {
        root = trimBST(root.left, L, R);
    }

    return root;
};

var trimBST = function(root, L, R) {
    if (!root) {
        return null
    }
    
    if (root.val < L) {
        return trimBST(root.right, L, R)
    } else if (root.val > R) {
        return trimBST(root.left, L, R)
    }
    
    root.left = trimBST(root.left, L, R)
    root.right = trimBST(root.right, L, R)
    
    return root
}

