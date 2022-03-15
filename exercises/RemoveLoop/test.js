const removeLinkedListLoop = require("./index");
const L = require("./linkedlist");
const List = L.LinkedList;
const Node = L.Node;

test("removeLinkedListLoop", () => {
  expect(typeof removeLinkedListLoop).toEqual("function");
});

test("removeLinkedListLoop removes circular linked lists", () => {
  const l = new List();
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = b;

  expect(removeLinkedListLoop(l).size()).toEqual(1);
});

test("removeLinkedListLoop does not alter list if no circular reference found", () => {
  const l = new List();
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = null;

  expect(removeLinkedListLoop(l).size()).toEqual(4);
});
