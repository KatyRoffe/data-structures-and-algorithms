'use strict';

//sets up the node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//sets up a linked list
class LinkedList {
  constructor() {
    this.head = null;
    //head is the very first node in the list
  }

  //begins traversing the list - going from node to node
  traverse() {
    let currentNode = this.head;
    while(currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  //inserts a new node into the list
  insert(value) {
    let currentNode = this.head;
    let newNode = new Node(value);

    if(!currentNode) {
      this.head = newNode;
    } else {
      newNode.next = currentNode;
      this.head= newNode;
    }
  }
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if(value === currentNode.value) {
        return true;
      } else if(currentNode.next === null) {
        return false;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
  toString() {
    let currentNode = this.head;
    let string = '';

    while(currentNode) {
      string += `${currentNode.value} ->`;
      currentNode = currentNode.next;
    }
    string += 'null';
    return string;
  }
}




module.exports = {LinkedList, Node};
