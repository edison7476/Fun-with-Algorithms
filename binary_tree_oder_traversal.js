var orderLevel = function (root) {
  // first check if the root contains any elements
  if (!root || !root.length) {
    return [];
  }
  //create a table to store elements in each tree level
  var map = {};
  // initializ the first element in the binary tree
  var waitList = [{
    level: 0,
    node: root
  }];


  while (waitList.length > 0) {
    var current = waitList.pop(); // {level:0, node:root}  (for the init case)
    var node = current.node; // root (for the init case)
    var level = current.level;

    if (!map[current.level]) { // map = {
      map[current.level] = [node.val]; //        0: [node.val],
    } //        1: [node.val_1, node.val_2]
    else { //        :
      map[current.level].push(node.val); //        n: [node.val_1,..., node.val_n]
    } //       }

    // if the right child node exists, push it to the waitList first
    if (node.right) {
      waitList.push({
        level: level + 1,
        node: node.right
      });
    }
    if (node.left) {
      waitList.push({
        level: level + 1,
        node: node.left
      });
    }
  }

  var result = [];

  for (var key in map) {
    result.push(map[key]);
  }
  return result;
};
