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
  //takes in two arguments and inserts a new value before an estabished value
  insertBefore(value, newValue) {
    let currentNode = this.head;
    let newNode = new Node(newValue);

    while(currentNode.value !== null) {
      if(currentNode.value === value) {
        newNode.next = currentNode;
        this.head = newNode;
      } else if(currentNode.next.value === value) {
        let insertNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = insertNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  // takes in two arguments and inserts a new value after an established value
  insertAfter(value, newvalue) {
    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.value === value) {
        let newNode = new Node(newvalue);
        let insertNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = insertNode;
      }
      currentNode = currentNode.next;
    }
  }
  //append a node at the end of the list and before null
  append(value) {
    let current = this.head;
    while (current) {
      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
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
  //this takes in no arguments, but returns a string to reprent all the values in the list
  toString() {
    let currentNode = this.head;
    let string = '';

    while(currentNode) {
      let listValues = currentNode.value;
      currentNode = currentNode.next;
      string += `{${listValues}} ->`;
    }
    string += '{null}';
    return string;
  }

  // brings in one argument (position) and returns the value of that argument
  kthFromEnd(k) {
    let current = this.head;
    if (current === null || k < 1) {
      return null;
    }
    let markerFirst = this.head;
    let markerSecond = this.head;

    for (let i = 0; i < k - 1; i += 1) {
      if (markerSecond === null) {
        return null;
      }
      markerSecond = markerSecond.next;
    }
    while (markerSecond.next !== null) {
      markerFirst = markerFirst.next;
      markerSecond = markerSecond.next;
    }
    return markerSecond.value;
  }
}


const linkedList = new LinkedList();

linkedList.head = new Node(0);
linkedList.append('apple');
linkedList.append('orange');
linkedList.append('banana');
linkedList.insertBefore('orange', 'tomato' );
linkedList.insertAfter('orange', 'carrot');
linkedList.toString();

module.exports = {LinkedList, Node};
