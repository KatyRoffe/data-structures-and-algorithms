'use strict';

// node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// binary tree
class BinaryTree {
  constructor() {
    this.root = null;
  }
}

let preOrder = (current) => {
  console.log(current.value);

  if (current.left) {
    preOrder(current.left);
  }
  if (current.right) {
    preOrder(current.right);
  }
};

let inOrder = (current) => {
  if (current.left) {
    inOrder(current.left);
  }
  console.log(current.value);

  if (current.right) {
    inOrder(current.right);
  }
};

let postOrder = (current) => {
  if (current.left) {
    postOrder(current.left);
  }
  if (current.right) {
    postOrder(current.right);
  }
  console.log(current.value);
};

let findMaxValue = (current) => {

  const findMax = (node) => {
    if (node === null) {
      return;
    }

    let trueMax = node.value;
    let leftMax = findMax(node.left);
    let rightMax = findMax(node.right);

    if (leftMax > trueMax) {
      trueMax = leftMax;
    }

    if (rightMax > trueMax) {
      trueMax = rightMax;
    }

    return trueMax;
  };

  return findMax(current);
};

//binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.left = null;
    this.right = null;
  }

  add(value){
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while(currentNode) {
      if(value === currentNode.value) {
        return;
      }
      if(value < currentNode.value) {
        if(currentNode.left === null) {
          currentNode.left = newNode;
          currentNode = currentNode.left;
        } else {
          if(currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  contains(value){
    if(!this.root) {
      return 'What root?';
    }
    let currentNode = this.root;
    let containsValue = false;
    while(currentNode && !containsValue) {
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else if( value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        containsValue = currentNode;
      }
    }
    if(!containsValue){
      return false;
    }
    return containsValue;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
