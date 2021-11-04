'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(node) {
    if (this.isEmpty()) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.top;
  }

  pop() {
    let placeHolder = this.top;
    this.top = placeHolder.next;
    placeHolder.next = null;
    return placeHolder.value;
  }


  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.isEmpty()) {
      return 'no node in the stack!';
    } else {
      return this.top.value;
    }
  }
}

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }

  enqueue(value) {
    this.rear.push(value);
  }

  dequeue() {
    if (this.front.isEmpty()) {
      while (!this.rear.isEmpty()) {
        this.front.push(this.rear.pop());
      }
    }

    return this.front.pop();
  }
}

module.exports = {
  'stack': Stack,
  'queue': PseudoQueue,
  'node': Node,
};
