let ar = [1,2,3,4,5,6];

let result = ar.filter(value=>{
  return value > 2; // return ary [3,4,5,6]
})

// pollyfill
Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)){
      result.push(this[index]);
    }
  }
  return result;
}

let result = ar.myFilter(value=>{
  return value > 2; // return ary [3,4,5,6]
})



