'use strict';

const { Queue } = require('../stacks-and-queues.js');

describe('testing queue', () => {

  it('can successfully enqueue into a queue', () => {
    const queue = new Queue();

    queue.enqueue(5);

    expect(JSON.stringify(queue)).toStrictEqual('{"front":{"value":5,"next":null},"back":{"value":5,"next":null}}');
  });

  it('can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();

    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);

    expect(JSON.stringify(queue)).toStrictEqual('{"front":{"value":5,"next":{"value":10,"next":{"value":15,"next":null}}},"back":{"value":15,"next":null}}');
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue;

    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);

    queue.dequeue();

    expect(JSON.stringify(queue)).toStrictEqual('{"front":{"value":10,"next":{"value":15,"next":null}},"back":{"value":15,"next":null}}');

  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue;

    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);

    expect(queue.peek()).toStrictEqual(5);
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue;

    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(JSON.stringify(queue)).toStrictEqual('{"front":null,"back":null}');
  });

  it('can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toStricteEqual(null);
    expect(queue.back).toStricteEqual(null);
  });
});
