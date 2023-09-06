
function balancedParens(input) {
  let stack = [];

  for (let char of input) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      let last = stack.pop();
      if ((char === ')' && last !== '(') || (char === ']' && last !== '[') ||  (char === '}' && last !== '{')) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Examples -->

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
