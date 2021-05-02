let ar = [64, 25, 12, 22, 11];

function quickSort(tempAr, low, high) {

  if (low < high) {
    let pivotIndex = partition(tempAr, low, high);
    quickSort(tempAr,low, pivotIndex - 1);
    quickSort(tempAr,pivotIndex + 1, high);
    
  }
}


function partition(tempAr, low, high) {
  
  let pivot = tempAr[high];
  let i = low - 1;

  for (let j = low; j <= high; j++) {
    if (tempAr[j] <= pivot) {
      i++;
      let temp = tempAr[i];
      tempAr[i] = tempAr[j];
      tempAr[j] = temp;
    }
  }

  let temp = tempAr[i+1];
  tempAr[i+1] = tempAr[high];
  tempAr[high] = temp;
  return i+1;
}