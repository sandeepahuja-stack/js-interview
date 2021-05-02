// string.indexof(findstring);


String.prototype.myIndexOf = function (findString, fromIndex = 0) {
  let indexOf = -1;
  let j = 0;
  for(let i = fromIndex; i<this.length; i++) {
    if (j != findString.length-1) {
      if(findString[j] == this[i] ) {
        j++;
        indexOf = indexOf == -1 ? i : indexOf;
      } else if(indexOf != -1) {
        indexOf = -1;
        j = 0;
        i--;
      }
    } else {
      break;
    }
  }
  return indexOf;
}

let index = 'sansandeep sandeep ahuja'.myIndexOf('sandeep',4);
console.log(index);

console.log('sansandeep sandeep ahuja'.indexOf('sandeep',4));