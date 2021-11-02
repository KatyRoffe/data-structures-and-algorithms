'use strict';


const pseudoQueue = require('./pseudoQueue/pseudoQueue.js');


describe('tests for the functionality of pseudoQueue Function', () => {

  test('Can successfully push onto a stack', () => {
    let stack = new pseudoQueue.stack();
    let nodeA = new pseudoQueue.node('number one');
    let nodeB = new pseudoQueue.node('number two');

    stack.push(nodeA);
    stack.push(nodeB);

    let test = stack.pop();

    expect(test).toEqual('number two');
  });


  test('Can successfully push multiple values onto a stack', () => {
    let stack = new pseudoQueue.stack();
    let nodeA = new pseudoQueue.node('first');
    let nodeB = new pseudoQueue.node('second');
    let nodeC = new pseudoQueue.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    expect(stack.top.value).toEqual('third');
    expect(stack.top.next.value).toEqual('second');
  });


  test('Can successfully pop off the stack', () => {
    let stack = new pseudoQueue.stack();
    let nodeA = new pseudoQueue.node('first');
    let nodeB = new pseudoQueue.node('second');
    let nodeC = new pseudoQueue.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.pop();

    expect(test).toEqual('third');
  });


  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new pseudoQueue.stack();
    let nodeA = new pseudoQueue.node('first');
    let nodeB = new pseudoQueue.node('second');
    let nodeC = new pseudoQueue.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.pop();
    let test1 = stack.pop();
    let test2 = stack.pop();

    expect(test).toEqual('third');
    expect(test1).toEqual('second');
    expect(test2).toEqual('first');
    expect(stack.top).toEqual(null);
  });


  test('Can successfully peek the next item on the stack', () => {
    let stack = new pseudoQueue.stack();
    let nodeA = new pseudoQueue.node('first');
    let nodeB = new pseudoQueue.node('second');
    let nodeC = new pseudoQueue.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.peek(nodeA);

    expect(test).toEqual('third');
  });


  test('Can successfully instantiate an empty stack', () => {
    let stack = new pseudoQueue.stack();

    expect(stack.top).toEqual(null);
  });


  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new pseudoQueue.stack();
    let test = stack.peek();

    expect(test).toEqual('no node in the stack!');
  });
});
