import inputString from './input.js';

const inputArr = inputString.split('');
const uniqueCharSet = new Set();
let startOfPacket = 0;
for(let i = 0; i < inputArr.length; i++) {
  for(let char of inputArr.slice(i, i + 4)) uniqueCharSet.add(char);
  if(uniqueCharSet.size == 4) {
    startOfPacket = i + 4;
    break;
  }
  uniqueCharSet.clear();
}

console.log(startOfPacket)