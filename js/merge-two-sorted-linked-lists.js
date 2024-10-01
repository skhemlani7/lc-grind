/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Merge two sorted linked lists

function mergeTwoLists(list1, list2) {
    let l1 = list1;
    let l2 = list2;
    let temp = new ListNode();
    let res = temp;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            res.next = l1.val;
            l1 = l1.next;
        } else {
            res.next = l2.val;
            l2 = l2.next;
        }
        res = res.next;
    }
    res.next = l1 || l2;
    return temp.next;
}