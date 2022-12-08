import inputArr from './input.js';

function getCountOfFullYOverlappedPairs(arr) {
  let fullyOverlapCount = 0;
  for(let i =0; i<arr.length; i++) {
    const ranges = arr[i].replace(',', '-').split('-').map((item) => parseInt(item));
    //ranges[1] >= ranges[2] || ranges[3] <= ranges[0]

    // ((ranges[0] <= ranges[2]) && (ranges[1] >= ranges[3])) ||
    //   ((ranges[0] >= ranges[2]) && (ranges[1] <= ranges[3]))
    if (
      !((ranges[1] < ranges[2]) ||
      (ranges[3] < ranges[0]))
    ) {
      console.log(ranges)
      fullyOverlapCount += 1;
    }
  }
  console.log(fullyOverlapCount)
  return fullyOverlapCount;
}

getCountOfFullYOverlappedPairs(inputArr);