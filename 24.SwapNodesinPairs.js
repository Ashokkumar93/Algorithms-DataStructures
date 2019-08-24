/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
}


// Solution

/*
Time - O(n)	
Space - O(h)
Leetcode Complexity - Medium
*/

var swapPairs = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    let second = head.next;
    let third = second.next;
    second.next = head;
    head.next = swapPairs(third);
    
    return second;
};
