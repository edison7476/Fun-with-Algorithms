/*
Reverse a singly linked list.
*/


var reverseList = function(head) {
    if(!head) return null ;

    else if(!head.next) return head;
                                       // ex 1-2-3-4
    var moveToBack = head;             // 1-2-3-4
    var remainingList = head.next;     // 2-3-4
    moveToBack.next = null;            // moveToBack --> 1

    while(remainingList){
        var newHead = remainingList;         // 2-3-4
        remainingList = remainingList.next;  // 3-4
        newHead.next = moveToBack;           // newHead --> 2-1

        moveToBack = newHead;
    }

    return newHead;
};
