// --- Directions
// Given a linked list, return a linked list by removing any circular loop.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   const d = new Node('d');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = d;
//   d.next = c;
//   removeLinkedListLoop(l)
// a -> b
// l.size = 2;

function removeLinkedListLoop(l) {
  let slow = l.head;
  let fast = l.head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    if (slow.next === fast) {
      slow.next = null;
      return l;
    } else {
      slow = slow.next;
    }
  }
  return l;
}

module.exports = removeLinkedListLoop;
