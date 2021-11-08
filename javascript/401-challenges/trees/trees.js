'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function PreOrder(current) {
  // reading the value
  console.log(current.value);
  
  if (current.left) {
    PreOrder(current.left);
  }
  if (current.right) {
    PreOrder(current.right);
  }
}

function InOrder(current) {  
  if (current.left) {
    InOrder(current.left);
  }

  // reading the value
  console.log(current.value);
  
  if (current.right) {
    InOrder(current.right);
  }
}

function PostOrder(current) {  
  if (current.left) {
    PostOrder(current.left);
  }
  
  if (current.right) {
    PostOrder(current.right);
  }

  // reading the value
  console.log(current.value);
}

module.exports = { Node, BinaryTree };
