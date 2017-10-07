/**
 * Given a binary tree, return all root-to-leaf paths.

    For example, given the following binary tree:

          1
        /   \
       2    3
        \
        5
All root-to-leaf paths are:

["1->2->5", "1->3"]
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
    if (!root) return [];
    let path = ''
    const result = [];
    
    createPath(root, path, result)
    return result
}

function createPath(node, path, result) {
    if (!node) return '';
    
    if (path) {
        path += '->'
    }
    path += node.val;
    
    path += createPath(node.left, path, result)
    path += createPath(node.right, path, result)
    //Push path to the result array only if there are NO sub-left & sub-right nodes
    if (!node.left && !node.right) {
        result.push(path)
    }

    return ''
}
