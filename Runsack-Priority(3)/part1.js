import inputString from './input.js';

const inputArr = inputString.split('\n');

function repeatedCharValue(halfIndex, wholeString) {
  for (let firstHalfIdx = 0; firstHalfIdx < halfIndex; firstHalfIdx++) {
    const firstHalfChar = wholeString[firstHalfIdx];
    for (let secondHalfIdx = halfIndex; secondHalfIdx < wholeString.length; secondHalfIdx++) {
      const secondHalfChar = wholeString[secondHalfIdx];
      if (firstHalfChar === secondHalfChar) {
        console.log(firstHalfChar, secondHalfChar, firstHalfChar.toUpperCase() === firstHalfChar ? (firstHalfChar).charCodeAt(0) - 38 : (firstHalfChar).charCodeAt(0) - 96);
        return firstHalfChar.toUpperCase() === firstHalfChar ? firstHalfChar.charCodeAt(0) - 38 : firstHalfChar.charCodeAt(0) - 96;
      }
    }
  }
}

function prioritySum() {
  let prioritySum = 0;
  for(let i = 0; i < inputArr.length; i++) {
    const stringWithoutSpace = inputArr[i].trim();
    const halfIndex = Math.floor(stringWithoutSpace.length / 2);
    console.log(halfIndex)
    prioritySum += repeatedCharValue(halfIndex, stringWithoutSpace);
  }
  return prioritySum;
}
console.log(prioritySum());


