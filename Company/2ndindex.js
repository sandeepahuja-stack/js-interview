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

function wait() {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

wait().then(()=>{
  console.log('hello world');
}).catch(()=>{
  console.log('some error happen');
})