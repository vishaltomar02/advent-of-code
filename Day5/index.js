import { moveSet, stack2DArray } from "./input.js";

console.log(stack2DArray)
function doEveryMoveSet(stack, moveSet) {
  for(let i = 0; i < moveSet.length; i++) {
    const [ numOfCrates, sourceCol, destinationCol ] = moveSet[i];
    console.log(numOfCrates, sourceCol, destinationCol)
    //for the first part just reverse the stack that is being pushed into the destination stack
    stack[destinationCol - 1].push(...(stack[sourceCol - 1].splice(-Math.abs(numOfCrates), Infinity)));
    console.log(stack)
  }
  return stack;
}

function getTopCrateString(newStack) {
  const topCrates = newStack.map((col, idx) => !!col.length ? col.pop().replace('[', '').replace(']', '') : '');
  return topCrates.join('');
}

const topCrateString = getTopCrateString(doEveryMoveSet(stack2DArray, moveSet));

console.log(topCrateString);