'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('This is to test a linked list', () => {
  xit('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    console.log(list);
    expect(list.head).toBe(null);
  });
  xit('can properly insert into the linked list', () => {
    const list = new LinkedList();
    console.log(list);
    list.insert(27);
    expect(list.head.value).toBe(27);
  });

  xit('head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    console.log(list);
    expect(list.head).toEqual(null);
  });
  xit('can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    console.log(list);
    list.insert('awesome possum', 6);
    expect(list.head.value).toBe('awesome possum', 6);
  });
});
