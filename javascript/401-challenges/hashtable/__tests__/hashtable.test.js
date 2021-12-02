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
