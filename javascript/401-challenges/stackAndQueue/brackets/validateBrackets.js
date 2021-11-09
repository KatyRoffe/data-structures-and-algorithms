'use strict';

let validateBrackets = (value) => {

  let stack = [];
  let bracketOpen = ['(', '[', '{'];
  let bracketClose = [')', ']', '}'];

  for (let i = 0; i < value.length; i += 1) {

    if (stack.length > 0) {
      return false;
    }

    if (bracketOpen.indexOf(value[i]) >= 0) {
      stack.push(value[i]);

    } else if (bracketClose.indexOf(value[i]) !== bracketOpen.indexOf(stack.pop())) {
      return false;
    }
  }
  return true;
};

module.exports = validateBrackets;
