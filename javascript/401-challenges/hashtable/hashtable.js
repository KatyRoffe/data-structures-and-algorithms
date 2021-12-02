'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }
    previous.next = new Node(value);
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }
  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i ++) {
      sum += key.charCodeAt(i);
    }
    return (sum * 599) % this.size;
  }
  add(key, value) {
    let hash = this.hash(key);
    if (!this.buckets[hash]) this.buckets[hash] = new LinkedList();
    let entry = { [key]: value };
    this.buckets[hash].insert(entry);
  }
  contains(key) {
    let hash = this.hash(key);
    return this.buckets[hash] ? true : false;
  }
  get(key) {
    let hash = this.hash(key);
    return this.buckets[hash].head.value[key];
  }

// challenge 31: repeatedWord

repeatedWord(string) {

  const newTable = new hashTable(1024);
  const words = string.match(/((\b[^\s]+\b)((?<=\.\w).)?)/g);

  for (let i = 0; i < words.length; i += 1) {
    let key = words[i].toLowerCase();


    if (newTable.contains(key)) {
      return newTable.get(key);
    }

    newTable.add(key, key);
  }
};
}
module.exports = HashTable;
