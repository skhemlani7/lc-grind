// This problem was asked by Google.

// Given the head of a singly linked list, reverse it in-place.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseList = function(head) {
    let current = head;
    let previous = null;
    while (current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};
