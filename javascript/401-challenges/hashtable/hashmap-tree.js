'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const values = [];
    const preOrder = (node) => {
      values.push(node.value);
      if (node.left) {
        preOrder(node.left);
      }
      if (node.right) {
        preOrder(node.right);
      }
    };

    let current = this.root;
    preOrder(current);
    return values;
  }
}

function treeIntersection(treeA, treeB) {

  let firstTree = treeA.preOrder();
  let secondTree = treeB.preOrder();

  let newArray = [];

  for(let i = 0; i < firstTree.length; i+= i) {
    if (firstTree[i] === secondTree[i]) {
      newArray[newArray.length] = firstTree[i];
    }
  }
  console.log('Matching values are:', newArray);
  return newArray;
}


module.exports = {
  Tree,
  Node,
  treeIntersection,
};