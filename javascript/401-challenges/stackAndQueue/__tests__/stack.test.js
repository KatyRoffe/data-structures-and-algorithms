'use strict';

const { Stack } = require('./stacks-and-queues.js');

describe('testing stack', () => {

  it('can succesfully push onto a stack', () => {

    const stack = new Stack();
    stack.push(5);

    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":5,"next":null}}');
  });

  it('can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);

    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":15,"next":{"value":10,"next":{"value":5,"next":null}}}}');
  });

  it('can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);

    stack.pop();

    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":10,"next":{"value":5,"next":null}}}');
  });

  it('can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(JSON.stringify(stack)).toStrictEqual('{"top":null}');
  });

  it('can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);

    expect(JSON.stringify(stack)).toStrictEqual(15);
  });

  it('can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toStricteEqual(null);
  });
});
