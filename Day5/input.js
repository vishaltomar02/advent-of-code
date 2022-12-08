const stackStr = 
`        [Q] [B]         [H]        
    [F] [W] [D] [Q]     [S]        
    [D] [C] [N] [S] [G] [F]        
    [R] [D] [L] [C] [N] [Q]     [R]
[V] [W] [L] [M] [P] [S] [M]     [M]
[J] [B] [F] [P] [B] [B] [P] [F] [F]
[B] [V] [G] [J] [N] [D] [B] [L] [V]
[D] [P] [R] [W] [H] [R] [Z] [W] [S]`;

function get2DArray() {
  const initialArray = stackStr.split(' ');
  // for(let i =0; i<initialArray.length; i++) {
  //   const individualArr = initialArray[i].split(' ');
  //   console.log(individualArr);
  // }
  const stack2DArray = [];
  let y = 0;
  let consecutiveSpaces = 0;
  for(let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] == '') {
      consecutiveSpaces = consecutiveSpaces + 1;
    }
    if(!stack2DArray[y]) stack2DArray[y] = [];
    if(initialArray[i].includes('\n')) {
      const charsAroundNewLine = initialArray[i].split('\n');
      if(charsAroundNewLine[0]) stack2DArray[y].unshift(charsAroundNewLine[0]);
      y = 0;
      if(charsAroundNewLine[1]){ 
        stack2DArray[0].unshift(charsAroundNewLine[1]);
        y++;
      }
      // previousStr = '\n';
      consecutiveSpaces = 0;
      continue;
    }
    if(initialArray[i] !== '') {
      stack2DArray[y].unshift(initialArray[i]);
      y++;
      consecutiveSpaces = 0;
      // previousStr = initialArray[i];
      continue;
    }
    if(!initialArray[i-1] && !initialArray[i] && consecutiveSpaces%3 === 0){
      y++;
    }
    // previousStr = initialArray[i];
  }
  return stack2DArray;
}

const stack2DArray = get2DArray().slice(0, -1);

const movesStr = `move 1 from 4 to 1
move 2 from 4 to 8
move 5 from 9 to 6
move 1 from 1 to 3
move 5 from 8 to 3
move 1 from 1 to 5
move 4 from 3 to 6
move 14 from 6 to 2
move 5 from 4 to 5
move 7 from 7 to 2
move 24 from 2 to 3
move 13 from 3 to 2
move 1 from 7 to 9
move 1 from 9 to 5
move 7 from 2 to 6
move 3 from 1 to 7
move 3 from 6 to 3
move 2 from 7 to 1
move 1 from 7 to 5
move 2 from 2 to 6
move 2 from 1 to 4
move 9 from 5 to 1
move 1 from 6 to 3
move 4 from 5 to 4
move 1 from 2 to 7
move 4 from 6 to 2
move 7 from 2 to 3
move 2 from 2 to 6
move 2 from 2 to 3
move 2 from 5 to 4
move 1 from 7 to 3
move 4 from 6 to 7
move 19 from 3 to 6
move 3 from 7 to 4
move 1 from 7 to 8
move 1 from 8 to 1
move 2 from 1 to 3
move 10 from 3 to 2
move 3 from 3 to 8
move 1 from 3 to 9
move 1 from 9 to 6
move 11 from 6 to 8
move 2 from 3 to 8
move 6 from 4 to 3
move 3 from 4 to 1
move 7 from 2 to 8
move 1 from 3 to 6
move 6 from 8 to 5
move 1 from 4 to 6
move 9 from 6 to 9
move 6 from 3 to 8
move 1 from 3 to 5
move 10 from 1 to 3
move 11 from 8 to 7
move 1 from 3 to 5
move 1 from 1 to 8
move 5 from 9 to 2
move 1 from 6 to 3
move 5 from 3 to 6
move 1 from 3 to 5
move 4 from 6 to 4
move 1 from 5 to 9
move 6 from 2 to 4
move 2 from 2 to 9
move 5 from 5 to 1
move 2 from 1 to 7
move 10 from 8 to 3
move 1 from 8 to 6
move 3 from 6 to 3
move 6 from 4 to 2
move 8 from 3 to 8
move 3 from 4 to 8
move 4 from 2 to 1
move 3 from 5 to 3
move 4 from 7 to 6
move 2 from 9 to 3
move 1 from 2 to 9
move 1 from 2 to 3
move 2 from 4 to 8
move 1 from 7 to 9
move 5 from 7 to 8
move 2 from 7 to 3
move 14 from 3 to 2
move 3 from 9 to 5
move 1 from 3 to 1
move 1 from 7 to 4
move 3 from 9 to 8
move 7 from 8 to 9
move 7 from 2 to 5
move 2 from 3 to 7
move 2 from 7 to 6
move 16 from 8 to 9
move 4 from 6 to 5
move 1 from 2 to 5
move 21 from 9 to 5
move 3 from 9 to 3
move 6 from 1 to 4
move 1 from 1 to 9
move 1 from 1 to 4
move 2 from 6 to 3
move 3 from 4 to 6
move 3 from 4 to 8
move 1 from 9 to 4
move 2 from 4 to 6
move 4 from 3 to 6
move 1 from 3 to 4
move 1 from 4 to 9
move 1 from 9 to 8
move 1 from 8 to 6
move 6 from 2 to 1
move 2 from 8 to 4
move 6 from 1 to 8
move 23 from 5 to 9
move 1 from 4 to 7
move 1 from 7 to 1
move 22 from 9 to 7
move 4 from 8 to 7
move 1 from 5 to 2
move 1 from 1 to 9
move 2 from 8 to 4
move 6 from 6 to 3
move 2 from 9 to 5
move 18 from 7 to 4
move 18 from 4 to 5
move 1 from 2 to 7
move 1 from 8 to 4
move 6 from 7 to 2
move 5 from 4 to 5
move 1 from 3 to 1
move 1 from 7 to 2
move 4 from 3 to 4
move 1 from 3 to 4
move 1 from 1 to 7
move 1 from 5 to 8
move 3 from 4 to 3
move 3 from 3 to 8
move 2 from 8 to 3
move 2 from 4 to 8
move 2 from 7 to 5
move 1 from 7 to 9
move 2 from 3 to 1
move 1 from 9 to 7
move 4 from 2 to 3
move 1 from 8 to 9
move 2 from 1 to 8
move 2 from 2 to 4
move 1 from 9 to 1
move 4 from 6 to 8
move 1 from 2 to 7
move 1 from 4 to 7
move 4 from 8 to 2
move 1 from 4 to 3
move 1 from 1 to 9
move 4 from 8 to 1
move 2 from 2 to 1
move 3 from 3 to 9
move 2 from 7 to 1
move 32 from 5 to 1
move 1 from 8 to 7
move 6 from 5 to 1
move 2 from 7 to 6
move 1 from 9 to 5
move 1 from 3 to 2
move 1 from 5 to 9
move 2 from 6 to 1
move 1 from 3 to 7
move 1 from 9 to 8
move 36 from 1 to 4
move 1 from 8 to 9
move 5 from 4 to 9
move 6 from 9 to 3
move 2 from 2 to 9
move 3 from 1 to 9
move 1 from 3 to 2
move 30 from 4 to 8
move 1 from 7 to 5
move 1 from 3 to 5
move 3 from 3 to 4
move 2 from 8 to 5
move 3 from 9 to 8
move 3 from 9 to 3
move 19 from 8 to 6
move 2 from 3 to 5
move 3 from 4 to 3
move 1 from 4 to 7
move 8 from 1 to 8
move 1 from 3 to 2
move 1 from 7 to 6
move 4 from 5 to 3
move 1 from 1 to 7
move 2 from 5 to 4
move 1 from 9 to 4
move 12 from 6 to 2
move 1 from 7 to 8
move 6 from 2 to 9
move 3 from 6 to 7
move 2 from 7 to 5
move 6 from 2 to 3
move 8 from 3 to 5
move 5 from 6 to 8
move 5 from 3 to 6
move 1 from 9 to 4
move 1 from 9 to 8
move 5 from 5 to 9
move 3 from 4 to 6
move 1 from 4 to 9
move 1 from 7 to 5
move 1 from 3 to 5
move 8 from 9 to 2
move 3 from 9 to 6
move 27 from 8 to 2
move 10 from 6 to 9
move 1 from 6 to 4
move 1 from 4 to 9
move 2 from 5 to 6
move 5 from 5 to 3
move 2 from 6 to 9
move 5 from 3 to 2
move 12 from 9 to 3
move 5 from 3 to 1
move 3 from 1 to 5
move 1 from 9 to 8
move 1 from 5 to 2
move 1 from 2 to 1
move 1 from 1 to 6
move 1 from 5 to 3
move 34 from 2 to 4
move 8 from 3 to 9
move 1 from 6 to 1
move 1 from 8 to 5
move 4 from 2 to 8
move 3 from 8 to 7
move 1 from 7 to 2
move 7 from 9 to 8
move 1 from 9 to 6
move 2 from 5 to 1
move 1 from 6 to 9
move 1 from 9 to 5
move 2 from 2 to 5
move 5 from 8 to 6
move 2 from 8 to 5
move 1 from 1 to 3
move 12 from 4 to 6
move 2 from 7 to 1
move 4 from 1 to 6
move 3 from 2 to 3
move 1 from 8 to 5
move 1 from 2 to 6
move 1 from 1 to 9
move 1 from 9 to 5
move 16 from 4 to 1
move 4 from 3 to 1
move 8 from 1 to 8
move 1 from 4 to 1
move 6 from 5 to 8
move 1 from 5 to 7
move 12 from 6 to 9
move 7 from 1 to 5
move 2 from 1 to 7
move 1 from 7 to 1
move 9 from 9 to 6
move 15 from 6 to 2
move 2 from 9 to 7
move 4 from 4 to 5
move 2 from 2 to 9
move 3 from 7 to 5
move 2 from 1 to 3
move 1 from 7 to 1
move 10 from 2 to 3
move 6 from 8 to 6
move 3 from 9 to 2
move 14 from 5 to 6
move 1 from 8 to 4
move 5 from 8 to 2
move 2 from 2 to 3
move 24 from 6 to 1
move 3 from 1 to 2
move 9 from 2 to 9
move 1 from 4 to 3
move 1 from 4 to 2
move 1 from 8 to 4
move 23 from 1 to 4
move 3 from 2 to 4
move 2 from 1 to 2
move 1 from 8 to 4
move 3 from 3 to 5
move 3 from 3 to 4
move 3 from 5 to 8
move 3 from 2 to 7
move 2 from 3 to 8
move 15 from 4 to 3
move 2 from 4 to 1
move 19 from 3 to 9
move 1 from 7 to 2
move 1 from 2 to 5
move 1 from 5 to 4
move 1 from 7 to 6
move 1 from 7 to 4
move 3 from 8 to 3
move 1 from 8 to 4
move 5 from 3 to 8
move 1 from 3 to 6
move 22 from 9 to 2
move 17 from 2 to 6
move 3 from 9 to 3
move 9 from 4 to 9
move 6 from 4 to 9
move 5 from 2 to 6
move 1 from 4 to 2
move 1 from 4 to 9
move 1 from 1 to 6
move 19 from 9 to 2
move 4 from 8 to 7
move 1 from 1 to 5
move 1 from 5 to 3
move 1 from 8 to 1
move 1 from 8 to 2
move 4 from 3 to 7
move 12 from 6 to 1
move 3 from 7 to 3
move 7 from 2 to 7
move 9 from 2 to 6
move 4 from 2 to 6
move 13 from 1 to 4
move 8 from 6 to 4
move 16 from 4 to 8
move 12 from 7 to 6
move 3 from 8 to 3
move 1 from 1 to 2
move 4 from 3 to 8
move 5 from 8 to 9
move 27 from 6 to 8
move 2 from 3 to 7
move 2 from 2 to 8
move 2 from 7 to 5
move 1 from 5 to 9
move 1 from 5 to 1
move 1 from 6 to 9
move 2 from 6 to 2
move 2 from 2 to 6
move 2 from 9 to 2
move 3 from 4 to 3
move 1 from 1 to 9
move 5 from 9 to 8
move 1 from 9 to 5
move 2 from 2 to 6
move 2 from 4 to 6
move 1 from 3 to 7
move 1 from 5 to 6
move 1 from 6 to 7
move 6 from 6 to 8
move 2 from 7 to 5
move 2 from 3 to 2
move 34 from 8 to 1
move 1 from 5 to 6
move 1 from 5 to 3
move 1 from 6 to 1
move 32 from 1 to 8
move 23 from 8 to 4
move 1 from 2 to 1
move 24 from 8 to 4
move 1 from 3 to 6
move 47 from 4 to 6
move 2 from 6 to 1
move 3 from 1 to 5
move 1 from 2 to 1
move 3 from 5 to 7
move 21 from 6 to 2
move 3 from 7 to 8
move 2 from 1 to 6
move 8 from 6 to 4
move 4 from 8 to 9
move 3 from 2 to 8
move 4 from 4 to 2
move 2 from 2 to 5
move 4 from 9 to 8
move 2 from 1 to 5
move 11 from 6 to 1
move 14 from 2 to 6
move 2 from 4 to 3
move 1 from 2 to 9
move 3 from 2 to 9
move 20 from 6 to 5
move 2 from 4 to 2
move 4 from 9 to 1
move 8 from 8 to 9
move 1 from 6 to 9
move 14 from 5 to 2
move 10 from 2 to 7
move 7 from 9 to 6
move 1 from 6 to 8
move 6 from 2 to 6
move 1 from 2 to 5
move 1 from 3 to 5
move 9 from 6 to 3
move 1 from 5 to 2
move 9 from 7 to 3
move 12 from 3 to 2
move 9 from 5 to 9
move 1 from 8 to 6
move 3 from 3 to 5
move 1 from 7 to 6
move 14 from 2 to 6
move 3 from 9 to 7
move 6 from 1 to 2
move 5 from 1 to 8
move 10 from 6 to 9
move 4 from 5 to 6
move 3 from 2 to 4
move 9 from 9 to 7
move 1 from 8 to 7
move 3 from 9 to 6
move 3 from 3 to 7
move 1 from 5 to 1
move 15 from 7 to 1
move 2 from 8 to 5
move 2 from 5 to 4
move 1 from 7 to 4
move 1 from 3 to 1
move 15 from 6 to 7
move 2 from 4 to 9
move 3 from 4 to 7
move 18 from 1 to 6
move 1 from 8 to 9
move 6 from 9 to 7
move 3 from 6 to 8
move 1 from 1 to 2
move 2 from 9 to 5
move 2 from 2 to 9
move 16 from 6 to 3
move 15 from 3 to 7
move 2 from 8 to 4
move 1 from 3 to 7
move 3 from 4 to 9
move 2 from 1 to 9
move 26 from 7 to 4
move 1 from 2 to 1
move 7 from 9 to 8
move 1 from 2 to 5
move 2 from 5 to 2
move 8 from 7 to 5
move 1 from 7 to 3
move 1 from 3 to 9
move 2 from 2 to 7
move 1 from 6 to 4
move 4 from 8 to 9
move 1 from 1 to 3
move 1 from 5 to 6
move 2 from 5 to 7
move 17 from 4 to 9
move 6 from 4 to 9
move 1 from 3 to 4
move 6 from 7 to 9
move 3 from 5 to 6
move 2 from 7 to 9
move 4 from 8 to 9
move 4 from 6 to 4
move 8 from 4 to 6
move 1 from 8 to 4
move 3 from 5 to 2
move 2 from 4 to 3
move 1 from 7 to 9
move 2 from 3 to 5
move 4 from 6 to 9
move 1 from 6 to 1
move 36 from 9 to 4
move 2 from 5 to 3
move 3 from 2 to 1
move 3 from 1 to 4
move 14 from 4 to 1
move 1 from 8 to 5
move 4 from 1 to 3
move 5 from 9 to 5
move 2 from 5 to 8
move 1 from 8 to 9
move 4 from 9 to 6
move 3 from 5 to 8
move 1 from 5 to 6
move 2 from 1 to 6
move 2 from 9 to 7
move 6 from 6 to 4
move 1 from 1 to 3
move 29 from 4 to 6
move 7 from 3 to 4
move 1 from 8 to 9
move 3 from 1 to 6
move 4 from 1 to 4
move 1 from 8 to 4
move 4 from 4 to 3
move 15 from 6 to 8
move 9 from 4 to 9
move 1 from 7 to 9
move 8 from 8 to 3
move 3 from 6 to 7
move 1 from 1 to 2
move 4 from 7 to 6
move 7 from 8 to 5
move 1 from 8 to 4
move 2 from 5 to 7
move 1 from 2 to 4
move 5 from 6 to 1
move 4 from 3 to 2`;

const moveSet = movesStr.split('\n').map((text, idx) => {
  const words = text.split(' ');
  const movesArr = words.filter((word) => /^\d+$/.test(word));
  return movesArr;
});
export { moveSet, stack2DArray };