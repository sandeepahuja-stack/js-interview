// Kadanes algorithm | Longest sum contiguous subarray


let ar = [-2,-3,4,-1,-2,1,5,-3];

function getLargestContiguousSum(array) {
  let msf = '',// max so far
    meh = 0; // max ending here

  for (let index = 0; index < array.length; index++) {
    meh = meh + array[index];

    if (meh < array[index]) meh = array[index];

    if (msf < meh) msf = meh;
    
  }


  return msf; // max so far
}
let largestSum = getLargestContiguousSum(ar);

console.log(largestSum);