/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

  if(!head) return null;

    // example List = 1-2-3, val = 2
    // The way of removing 2 is to skip 2 and connect to the next element --> 1-3

    var node = new ListNode(0);
    var prevHead = node;
    node.next = head;

    while(head){
        if(head.val != val){
            prevHead = head;
            head = head.next;
        } else {
            // Skip the current node if node.val = val
            prevHead.next = head.next;
            head = head.next;

        }

    }

    return node.next;
};
