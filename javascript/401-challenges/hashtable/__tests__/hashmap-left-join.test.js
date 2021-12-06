'use strict';

const Hashtable = require('./hashtable/hashtable.js');
const leftJoin = require('./hashtable/hashmap-left-join.js');

let synonymTable = new Hashtable(50);
let antonymTable = new Hashtable(50);

synonymTable.add('fond', 'enamored');
synonymTable.add('wrath', 'anger');
synonymTable.add('diligent', 'employed');
synonymTable.add('outfit', 'garb');
synonymTable.add('guide', 'usher');

antonymTable.add('fond', 'averse');
antonymTable.add('wrath', 'delight');
antonymTable.add('diligent', 'idle');
antonymTable.add('guide', 'follow');
antonymTable.add('flow', 'jam');

describe('Testing left join', () => {

  test('Outputs a keyword and its value from both the Synonym Hashtable and Antonym Hashtable', () => {
    expect(leftJoin(synonymTable, antonymTable)).toStrictEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
    ]);
  });
});
