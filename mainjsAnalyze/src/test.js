/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let dummy = new ListNode();
    dummy.next = head;
    let dummy1 = new ListNode();
    dummy1.next = reversedList(head);
    let p = dummy.next;
    let q = dummy1.next;
    const print = (node) => {
        let tmp = node;
        let str = ''
        while (tmp) {
            str += tmp.val + ',';
            tmp = tmp.next;
        }
        console.log(str);
    }
    print(dummy);
    print(dummy1);
    while (p != null) {
        if (p.val != q.val) return false;
        p = p.next;
        q = q.next;
    }

    return true;
};

function reversedList(node) {
    let cur = node;
    let prev = null;
    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}