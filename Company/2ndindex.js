let ar = [1,2,3,4,5];
// calculate sum of odd

// let result = ar.reduce((ac,el)=> (el%2 != 0 ) ? ac = ac + el : ac = ac,0);

// console.log(result);


// Array.prototype.myReduce = function (callback, intialValue = '') {
//   let ac = intialValue;
//   for( let i = 0 ; i < this.length ; i++) {
//     ac = callback(ac,this[i],i,this);
//   }
//   return ac;
// }
// let result = ar.myReduce((ac,el)=> (el%2 != 0 ) ? ac = ac + el : ac = ac,0);

// console.log(result);

// function wait() {
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//       resolve();
//     }, 5000);
//   });
// }

// wait().then(()=>{
//   console.log('hello world');
// }).catch(()=>{
//   console.log('some error happen');
// })

Array.prototype.myMap = function(callback) {
  let result = [];
  for(let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
}


Array.prototype.myForEach = function() {
  for(let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
}

Array.prototype.myFind = function(callback){
  for(let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)){
      return this[index];
    }
  }
}


Array.prototype.myFilter = function(callback){
  let result = [];
  for(let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)){
      result.push(this[index]);
    }
  }
  return result;
}

Array.prototype.myReduce = function(callback, initialValue){
  let acc = initialValue;
  for(let index= 0; index< this.length; i++) {
    acc = callback(acc, this[index], index, this);
  }
  return acc;
}


