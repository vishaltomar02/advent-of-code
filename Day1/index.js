import inputStr from './input.js';

const inputArr = inputStr.split('\n\n');

function getTotalCaloriesOfElf(elfCalories) {
  return elfCalories.split('\n').map((item) => item.trim()).reduce((acc, curr) => +(acc) + +parseInt(curr), [0]);
}

function handleNextBigCalorie(...arr) {
  console.log(arr)
  let [ topThreeArr, idx, prevCurrIdxCalorie ] = arr;
  let currTopCalorie = prevCurrIdxCalorie;
  if(!topThreeArr[idx + 1]) return;
  if(currTopCalorie > topThreeArr[idx+1]){
    currTopCalorie = topThreeArr[idx + 1];
    topThreeArr[idx + 1] = prevCurrIdxCalorie;
  }
  handleNextBigCalorie(topThreeArr, idx+1, currTopCalorie);
}

function getMaxCalories(inputArr) {
  let topThreeCalories = [0, 0, 0];
  for(let i = 0; i < inputArr.length; i++) {
    const currElfCalories = getTotalCaloriesOfElf(inputArr[i]);
    for(let j = 0; j < topThreeCalories.length; j++) {
      console.log(currElfCalories, topThreeCalories, j)
      if(currElfCalories > topThreeCalories[j]) {
        let prevCurrIdxCalorie = topThreeCalories[j];
        topThreeCalories[j] = currElfCalories;
        // const prevCalories = topThreeCalories[j];
        // topThreeCalories[j] = currElfCalories;
        // for(let k = j+1; k < topThreeCalories.length; k++ ) {
        //   if(topThreeCalories[k] && prevCalories > topThreeCalories[k]) topThreeCalories[k] = prevCalories;
        // }
        handleNextBigCalorie(topThreeCalories, j, prevCurrIdxCalorie);
        break;
      }
    }
  }
  console.log(topThreeCalories)
  return topThreeCalories.reduce((acc, curr) => +acc + +curr, [0]);
}

console.log(getMaxCalories(inputArr));