// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    let current1 = l1
    let current2 = l2
    let l3
    console.log(current1)
    console.log(current2)
    if (current1 && current2)
    {
        if (current1.value <= current2.value) {
            l3 = current1
            current1 = current1.next
        }   
        else {
            l3 = current2
            current2 = current2.next
        }
    }
    else if (current1)
        return current1
    else if (current2)
        return current2
    else
        return null
    let current3 = l3
    while (current1 && current2) {
        if (current1.value <= current2.value) {
            current3.next = current1
            current1 = current1.next
        }
        else {
            current3.next = current2
            current2 = current2.next
        }
        if (current3.next != null)
            current3 = current3.next
    }
    while (current1 !== null) {
        current3.next = current1
        current1 = current1.next
        current3 = current3.next
    }
    while (current2 !== null) {
        current3.next = current2
        current2 = current2.next
        current3 = current3.next
    }
    return l3
}
