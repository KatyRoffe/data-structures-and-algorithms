'use strict';

const { BinaryTree } = require('./trees.js');

describe('testing binary tree', () => {
  it('Can successfully return a collection from a pre-order traversal', () => {

    const tree = new BinaryTree();

    tree.root = new Node('5');
    tree.root.left = new Node('10');
    tree.root.right = new Node('15');

    const preOrder = tree.preOrder();
    preOrder(tree.root);

    expect(preOrder).toEqual('5', '10,', '15');
  });

  it('Can successfully return a collection from an in-order traversal', () => {
    const tree = BinaryTree();

    tree.root = new Node('5');
    tree.root.left = new Node('10');
    tree.root.right = new Node('15');

    const inOrder = tree.inOrder();
    inOrder(tree.root);

    expect(inOrder).toEqual('10', '5', '15');
  });

  it('Can successfully return a collection from a post-order traversal', () => {
    const tree = BinaryTree();

    tree.root = new Node('5');
    tree.root.left = new Node('10');
    tree.root.right = new Node('15');

    const postOrder = tree.postOrder();
    postOrder(tree.root);

    expect(postOrder).toEqual('10', '15', '5');
  });

  it('can find the largest number in the tree', () => {
    const tree = BinaryTree();

    tree.root = new BinaryTree.node(5);
    tree.root.left = new BinaryTree.node(10);
    tree.root.right = new BinaryTree.node(15);
    const max = tree.findMaxValue();

    expect(max).toEqual(15);
  });
});
