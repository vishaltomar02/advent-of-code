import inputArr from "./input.js";

let headPos = [0,0], tailPos = [0,0];

const directionObj = {
  'R': {
    idxToChange: 1,
    incrementBy: 1,
  },
  'L': {
    idxToChange: 1,
    incrementBy: -1,
  },
  'U': {
    idxToChange: 0,
    incrementBy: -1,
  },
  'D': {
    idxToChange: 0,
    incrementBy: 1,
  },
}

const visitedPosObj = {};

function handleStepsToMove(dir, steps) {
  for(let step = 1; step <= steps; step++) {
    let prevPos = [...headPos];
    headPos[directionObj[dir].idxToChange] += directionObj[dir].incrementBy;
    if (Math.abs(tailPos[0] - headPos[0]) > 1 || (Math.abs(tailPos[1] - headPos[1]) > 1)) {
      tailPos = [...prevPos];
    }
    if(!visitedPosObj[tailPos.join('')]) visitedPosObj[tailPos.join('')] = true;
  }
}

function getTotalPositionsVisited(inputArr) {
  for(let i = 0; i < inputArr.length; i++) {
    const [ inputDir, inputSteps ] = inputArr[i].split(' ');
    handleStepsToMove(inputDir, parseInt(inputSteps));
  }
}

getTotalPositionsVisited(inputArr);
console.log(Object.keys(visitedPosObj).length);