let ar = [1,2,3,4,5,6];

let result = ar.map((value, index, ary)=>{
  return  value
});

// pollyfill

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
}


var result = ar.myMap((el)=>{
  return el + 10;
})

//output : [11, 12, 13, 14, 15, 16]