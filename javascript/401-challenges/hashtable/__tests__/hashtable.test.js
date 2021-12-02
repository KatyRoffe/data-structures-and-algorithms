'use strict';

const HashTable = require('../hashtable');

describe('Testing the HashTable', () => {

  it('should add the key value pair to the table', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('apple', 'orange');

    expect(hashTable.map[hashTable.hash('apple')].head.value['apple']).toStrictEqual('orange');
  });

  it('should get the value associated with that key in the table', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('apple', 'orange');

    expect(hashTable.get('apple')).toStrictEqual('orange');
  });

  it('should return a boolean, indicating if the key exists in the table already', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('apple', 'orange');

    expect(hashTable.contains('apple')).toStrictEqual(true);
  });

});

describe('Tests hashmap repeated words', () => {

  const test1 = 'Once upon a time, there was a brave princess who...';

  test('Finds the first word to occur more than once in a string', () => {
    let test = HashTable(test1);

    expect(test).toEqual('a');
  });

});
