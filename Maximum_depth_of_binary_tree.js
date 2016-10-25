/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

var maxDepth = function(root) {
    return findMaxDepth(root);
    // 遞迴函式
    function findMaxDepth(node){

        if(node === null){
            return 0;
        }

        var deepL = 1;
        var deepR = 1;

        if(node.left !== null){
            deepL += findMaxDepth(node.left);
        }

        if(node.right !== null){
            deepR += findMaxDepth(node.right);
        }

        return deepL > deepR ?　deepL: deepR;
    }
};
