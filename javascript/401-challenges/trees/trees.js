'use strict';

const { node } = require("../stackAndQueue/pseudoQueue/pseudoQueue");

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

let breadthFirst = (tree) => {
  let queue = [];
  let array = [];
  if (!tree.root) {
    return 'whoops';
  } else {
    queue.unshift(tree.root);
    array.push(tree.root);
  }
  let currentNode = queue.pop();
  while(currentNode) {
    if (currentNode.left) {
      queue.unshift(currentNode.left);
    }
    if (currentNode.right) {
      queue.unshift(currentNode.right);
    }
    currentNode = queue.pop();

    array.push(currentNode);
  }
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

class Kary {
  constructor(index) {
    this.index = index;
    this.root = null;
  }
}

function fizzBuzzTree(kAryTree) {

  let tree = new Kary(kAryTree.index);
  tree.root = new Node(kAryTree.root.value, kAryTree.index);

  let current = kAryTree.root;
  let final = tree.root;

  let newArray = [];
  let newArray2 = [];

  newArray.unshift(current);
  newArray2.unshift(final);

  while (newArray.length) {
    current = newArray.pop();
    final = newArray2.pop();
    if (current.value % 15 === 0) {
      final.value = 'FizzBuzz';
    }
    else if (current.value % 5 === 0) {
      final.value = 'Buzz';
    }
    else if (current.value % 3 === 0) {
      final.value = 'Fizz';
    }
    else {
      final.value = current.value.toString();
    }

    for (let i = 0; i < current.children.length; i += 1) {
      if (current.children[i]) {
        final.children[i] = new Node(i, kAryTree.index);
        newArray.unshift(current.children[i]);
        newArray2.unshift(final.children[i]);
      }
    }

  }
  return tree;
}


module.exports = { Node, BinaryTree, BinarySearchTree, Kary };
