/**
 * Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes.
 * Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
 * If no such second minimum value exists, output -1 instead.

        Example 1:
        Input: 
             2
            / \
           2   5
              / \
             5   7

        Output: 5
        
        Explanation: The smallest value is 2, the second smallest value is 5.
        Example 2:
        Input: 
             2
            / \
           2   2 

        Output: -1
        Explanation: The smallest value is 2, but there isn't any second smallest value.
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
var findSecondMinimumValue = function(root) {
    // Since every sub-node is either 0 node or 2 nodes
    // Only need to if one side of node exists or  both node values are equal
    if (!root.left || root.left.val === root.right.val) {
        return -1;
    } else if  (root.left.val < root.right.val) {
        const minValOnLeftTree = findMinVal(root.left, root.val);
        return minValOnLeftTree < root.right.val ? minValOnLeftTree : root.right.val;
    } else {
        const minValOnRightTree = findMinVal(root.right, root.val);
        return minValOnRightTree < root.left.val ? minValOnRightTree : root.left.val;
    }
    
    
};
            
function findMinVal(node, rootVal) {
    if (!node) return;
  
    node.val = (node.val === rootVal) ? 9999999999 : node.val;
    const leftNode = findMinVal(node.left, rootVal) || node.val;
    const rightNode = findMinVal(node.right, rootVal) || node.val;
    
    return Math.min(leftNode, rightNode)
}