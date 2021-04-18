let ar = [1,2,3,4,5,6];

// let result = ar.reduce((accumulator, currentValue, index , ar)=>{
// }, initialValue); //accumulator is the final output, in starting accumulator = initialvalue


let result = ar.reduce((ac,el)=>ac+el, 1  ) // 22 output


// pollyfill
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }
  return accumulator;
}
let result = ar.myReduce((ac,el)=>ac+el, 1  ) // 22