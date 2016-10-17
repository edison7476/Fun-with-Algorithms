
var swapPairs = function(head) {
if( head == null || head.next == null) {
  return head;
};
var firstNode = new ListNode(0);

firstNode.next = head;
var current = head; // head is the first node.
var init = firstNode;


var nextPair; // use this to save the next pair of nodes

/*suppose the we have the following list  firstNode - 1 - 2 - 3 - 4
                                              |       |       |
                                            init   current  nextPair
*/
while (current!=null && current.next!=null){
    nextPair = current.next.next; // save the next fo pair of nodes. ex: 'node 3 & 4'

    current.next.next = current; // since current.next is pointing to the postion_2
                        // and we let current.next.next = current
                        // This simply points postion_2 back to the position 1
  /*
    current.next.next
              √---|
  firstNode - 1 - 2 - 3 - 4
      |       |       |
    init   current  nextPair
  */


    init.next = current.next; //init.next is actually pointing to the position_1
                          // we let init.next to be current.next(node_2)
                          // This simply set the node_2 to be at the position_1
    /*
      init.next = current.next
        |-----------√
    firstNode - 1 - 2 - 3 - 4
        |       |       |
      init   current  nextPair
    */

    current.next = nextPair;  // Connect node_3 and node_4 at the position after node_1
    /*
        current.next = nextPair
                |-------√
    firstNode - 1 - 2 - 3 - 4
        |       |       |
      init   current  nextPair
    */

    // Redo the entire process by setting init = node_1
    init = current;
    current = current.next;
}
return firstNode.next;
};
