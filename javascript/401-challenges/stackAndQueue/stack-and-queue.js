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

  // adds a new node at top of stack.
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  // removes node from the top of the stack
  pop() {
    let temp = this.top;
    this.top = temp.next;
    return temp.value;
  }

  // finds top node's value
  peek() {
    return this.top.value;
  }

  // checks if stack is empty: returns boolean
  isEmpty() {
    return (this.top) ? false : true;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  // adds a new node to the back of the queue .
  enqueue(value) {
    let nodeToAdd = new Node(value);
    let currentBack = this.back;

    if(currentBack) {
      currentBack.next = nodeToAdd;
    }
    this.back = nodeToAdd;
    if(!this.front) {
      this.front = nodeToAdd;
    }
  }

  // removes the node from the front of the queue
  dequeue() {
    let nodeToRemove = this.front;
    this.front = nodeToRemove.next;

    if(this.back === nodeToRemove) {
      this.back = nodeToRemove.next;
    }
    return nodeToRemove.value;
  }

  // finds the value node at the front of the queue
  peek() {
    return this.front.value;
  }

  // checks if queue is empty: returns boolean
  isEmpty() {
    if(this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Stack,
  Queue
};
