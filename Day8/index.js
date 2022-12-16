import input from './input.js';

const trees2DArray = input.map((el) => el.split('').map((item) => parseInt(item)));
const ROWS = input.length;
const COLUMNS = trees2DArray[0].length;

const memoisedVisibleTreesIdxs = {
  'TOP': [],
  'BOTTOM': [],
  'LEFT': [],
  'RIGHT': [],
};

let highestScenicScore = 0;

function isVisible(arr, rowIdx, colIdx) {

  let isVisibleArr = [true, true, true, true];
  let directionalScore = [0,0,0,0];
  for(let t = rowIdx - 1; t >= 0; t--) {
    directionalScore[0] += 1;
    if(arr[rowIdx][colIdx] <= arr[t][colIdx]) {
      isVisibleArr[0] = false;
      break;
    }
    if(isVisibleArr[0] && t===0){
      isVisibleArr[0] = true;
    }
  }
  for(let r = colIdx + 1; r < COLUMNS; r++) {
    directionalScore[1] += 1;
    if (arr[rowIdx][colIdx] <= arr[rowIdx][r]) {
      isVisibleArr[1] = false;
      break;
    }
    if (isVisibleArr[1] && r === COLUMNS - 1) {
      isVisibleArr[1] = true;
    }
  }
  for(let b = rowIdx + 1; b < ROWS; b++) {
    directionalScore[2] += 1;
    if (arr[rowIdx][colIdx] <= arr[b][colIdx]) {
      isVisibleArr[2] = false;
      break;
    }
    if (isVisibleArr[2] && b === ROWS - 1) {
      isVisibleArr[2] = true;
    }
  }
  for(let l = colIdx - 1; l >= 0; l--) {
    directionalScore[3] += 1;
    if (arr[rowIdx][colIdx] <= arr[rowIdx][l]) {
      isVisibleArr[3] = false;
      break;
    }
    if (isVisibleArr[3] && l === 0) {
      isVisibleArr[3] = true;
    }
  }

  // return !!isVisibleArr.find((el) => !!el);
  return directionalScore.reduce((acc, curr) => acc*curr, 1);
}

function visibleTrees(inputArr) {
  // let visibileTreesCount = 0;
  // for(let i = 1; i < ROWS-1; i++) {
  //   for(let j = 1; j < COLUMNS-1; j++) {
  //     const isTreeVisible = isVisible(inputArr, i, j);
  //     visibileTreesCount += isTreeVisible ? 1 : 0;
  //   }
  // }
  // console.log(memoisedVisibleTreesIdxs)
  // return visibileTreesCount;

  //for highest scenic score 
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      const scenicScore = isVisible(inputArr, i, j);
      console.log(scenicScore)
      highestScenicScore = (scenicScore > highestScenicScore) ? scenicScore : highestScenicScore;
    }
  }
  console.log(highestScenicScore)
  return highestScenicScore;
}

// console.log(visibleTrees(trees2DArray) + (ROWS*2) + (COLUMNS*2) - 4);

console.log(visibleTrees(trees2DArray))