let ar = [1,2,3,4,5,6];

let result = ar.find(value=>{
  return value > 2; // return 3
})

// pollyfill
Array.prototype.myFind = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)){
      return this[index];
    }
  }
}

ar.myFind(item=>{
  return item != 1; // 2
})
  

let result = ar.myFind(value=>{
  return value > 2; // return 3
})