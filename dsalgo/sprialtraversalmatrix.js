// 0 1 2 
// 3 4 5 
// 6 7 8 
// 9 10 11


let ar = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];

function spiralMatrixTraversal(ar) {
  let maxRow = ar.length - 1;
  let minRow = 0;
  let maxCol = ar[0].length - 1;
  let minCol = 0;
  let result = [];
  let totalCount = ar.length * ar[0].length;
  
  while (totalCount != result.length) {
    // left wall print
    for (let i = minRow, j = minCol; i <= maxRow && totalCount != result.length; i++) {
      
      result.push(ar[i][j]);
    }
    minCol++;

    // bottom wall print
    for (let i = maxRow, j = minCol; j <= maxCol && totalCount != result.length; j++) {
      result.push(ar[i][j]);
    }
    maxRow--;

    // right wall print
    for (let i = maxRow, j = maxCol; i >= minRow && totalCount != result.length; i--) {
      console.log(ar[i][j]);
      result.push(ar[i][j]);
    }
    maxCol--;

    // top wall print
    for (let i = minRow, j = maxCol; j >= minCol && totalCount != result.length; j--) {
      result.push(ar[i][j]);
    }
    minRow++;
  }

  return result;
    
}


let output = spiralMatrixTraversal(ar);
console.log(output);