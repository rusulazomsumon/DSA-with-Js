/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // Edge case: If the input linked list is empty, return null
    if (!head) {
        return null;
    }

    // Create a dummy node to serve as the head of the reversed list
    const dummy = new ListNode();
    dummy.next = head;

    // Initialize the current node and the previous node to the dummy node
    let curr = head;
    let prev = dummy;

    // While there are at least k nodes remaining in the list
    while (curr) {
        // Find the kth node in the list
        let kth = curr;
        let count = k;
        while (kth && count > 0) {
            kth = kth.next;
            count--;
        }

        // If there are less than k nodes remaining, break out of the loop
        if (count > 0) {
            break;
        }

        // Reverse the k nodes starting from the current node
        let next = curr.next;
        for (let i = 0; i < k - 1; i++) {
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
            next = curr.next;
        }

        // Update the current and previous nodes
        prev = curr;
        curr = curr.next;
    }

    // Return the reversed list, excluding the dummy node
    return dummy.next;
};
