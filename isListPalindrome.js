// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    let s1 = ""
    let s2 = ""
    let current = l
    while (current) {
        s1 = current.value + s1
        s2 = s2 + current.value
        current = current.next
    }
    return s1 === s2
}

