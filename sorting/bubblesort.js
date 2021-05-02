let ar = [64, 25, 12, 22, 11];
// swap adjacent and sbse phle last main biggest value jati rhti hai


for (let i = 0; i < ar.length; i++) {
  for (let k = 0; k < ar.length - i - 1; k++) {
    if(ar[k] > ar[k+1]) {
      //  swap without using third variable
      
      ar[k] = ar[k+1] + ar[k];
      ar[k+1] = ar[k] - ar[k+1];
      ar[k] = ar[k] - ar[k+1];

      // let temp = ar[k];
      // ar[k] =  ar[k+1];
      // ar[k+1] = temp;
    }
    
  }

}

console.log(ar);