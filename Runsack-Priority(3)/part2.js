import inputString from './input.js';

const inputArr = inputString.split('\n');

function getBadgeValueOfGroup(groupStartIdx) {
  const firstLine = inputArr[groupStartIdx].trim(), secondLine = inputArr[groupStartIdx + 1].trim(), thirdLine = inputArr[groupStartIdx + 2].trim();
  for (let i = 0; i < firstLine.length; i++) {
    const charToCheck = firstLine[i];
    let isPresent = false;
    for(let j=0; j<secondLine.length; j++){
      if(charToCheck === secondLine[j]) isPresent = true
    }
    if(!isPresent) continue;
    for(let k = 0; k<thirdLine.length; k++) {
      if (charToCheck !== thirdLine[k]) isPresent = false;
      else {
        isPresent = true;
        break;
      }
    }
    if(!isPresent) continue;
    else if(isPresent){
      charToCheck;
      return charToCheck.toUpperCase() === charToCheck ? charToCheck.charCodeAt(0) - 38 : charToCheck.charCodeAt(0) - 96;
    }
  }
}

function prioritySumOfGroups() {
  let prioritySum = 0;
  for (let i = 0; i < inputArr.length; i+=3) {
    prioritySum += getBadgeValueOfGroup(i);
  }
  return prioritySum;
}
console.log(prioritySumOfGroups());


