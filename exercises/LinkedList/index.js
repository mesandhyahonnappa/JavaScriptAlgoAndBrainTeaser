class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    const node = new Node(value, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(value) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(value, null);
    } else {
      this.head = new Node(value, null);
    }
  }

  getAt(index) {
    // on empty list
    if (!this.head) {
      return null;
    }

    if (this.size() < index + 1) {
      return null;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      if (node.next) {
        node = node.next;
      }
      counter++;
    }
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (this.size() < index + 1) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);
    previousNode.next = previousNode.next.next;
  }

  forEach(fn) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  insertAt(value, index) {
    if (!this.head) {
      this.insertFirst(value);
      return;
    }

    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    if (this.size() < index + 1) {
      this.insertLast(value);
      return;
    }

    const previousNode = this.getAt(index - 1);
    const curNode = this.getAt(index);
    let newNode = new Node(value, curNode);
    previousNode.next = newNode;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
