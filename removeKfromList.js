// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    if (l === null)
        return null
    while (l && l.value === k)
        l = l.next
    let current = l
    while (current && current.next) {
        if (current.next.value === k) {
            current.next = current.next.next
        }
        else
            current = current.next
    }
    return l
}
