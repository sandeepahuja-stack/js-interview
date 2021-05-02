let ar = [64, 25, 12, 22, 11];
// select krna hai sbse chota element


// Find the minimum element in arr[0...4]
// and place it at beginning
// 11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
// 11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
// 11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
// 11 12 22 25 64 



for (let i = 0; i < ar.length; i++) {
  let minIndex = i;
  for (let j = i+1; j < ar.length; j++) {
    if(ar[minIndex] > ar[j]) {
      minIndex = j;
    }
  }
  let temp = ar[i];
  ar[i] = ar[minIndex];
  ar[minIndex] = temp;
}

console.log(ar);