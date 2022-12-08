import inputStr from './input.js';

const inputArr = inputStr.split('\n');

const rockPaperScissorObj = {
  'A': {
    points: 1,
    beats: 'C'
  },
  'X': {
    points: 1,
    beats: 'C'
  },
  'B': {
    points: 2,
    beats: 'A'
  },
  'Y': {
    points: 2,
    beats: 'A'
  },
  'C': {
    points: 3,
    beats: 'B'
  },
  'Z': {
    points: 3,
    beats: 'B'
  }
}

function getTotalScore(arr) {
  let totalScore = 0;
  for (let i = 0; i < arr.length; i++) {
    const currHands = arr[i].split(' ');
    const currHandsObj = currHands.map((hand) => rockPaperScissorObj[hand]);
    totalScore += currHandsObj[1].points;
    if (currHandsObj[1].beats === currHands[0]) {
      totalScore += 6;
      continue;
    }
    else if (currHandsObj[1].beats === currHandsObj[0].beats) {
      totalScore += 3;
      continue;
    }
  }
  console.log(totalScore);
  return totalScore;
}

// Objects for part two

const secondColumn = {
  'X': {
    points: 0
  },
  'Y': {
    points: 3
  },
  'Z': {
    points: 6
  }
};
const firstColumn = {
  'A': {
    points: 1,
    beatenBy: 'B',
    beats: 'C'
  },
  'B': {
    points: 2,
    beatenBy: 'C',
    beats: 'A'
  },
  'C': {
    points: 3,
    beatenBy: 'A',
    beats: 'B'
  },
}

function getTotalScorePartTwo(arr) {
  let totalScore = 0;
  for(let i = 0; i < arr.length; i++) {
    const currHands = arr[i].split(' ');
    totalScore += secondColumn[currHands[1]].points;
    console.log(currHands[1])
    if(currHands[1] === 'Y') {
      // console.log(firstColumn[currHands[0]]);
      totalScore += firstColumn[currHands[0]].points;
    }
    else if(currHands[1] === 'Z') {
      console.log(firstColumn[firstColumn[currHands[0]].beatenBy])
      totalScore += firstColumn[firstColumn[currHands[0]].beatenBy].points;
    }
    else {
      totalScore += firstColumn[firstColumn[currHands[0]].beats].points;
    }
  }

  console.log(totalScore)
}

getTotalScorePartTwo(inputArr);