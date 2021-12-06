'use strict';

function leftJoin(synonymTable, antonymTable) {

  const array1 = [];

  for (let i = 0; i < synonymTable.buckets.length; i += 1) {
    const array2 = [];

    if (synonymTable.buckets[i] !== undefined) {

      let key = (Object.keys(synonymTable.buckets[i].head.value)[0]);
      array2.push(key);
      array2.push(synonymTable.buckets[i].head.value[key]);

      if (antonymTable.contains(key)) {
        array2.push(antonymTable.get(key));
      } else {
        array2.push(null);
      }
      array1.push(array2);
    }
  }
  return array1;
}

module.exports = leftJoin;
