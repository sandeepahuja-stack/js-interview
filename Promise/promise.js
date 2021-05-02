// Promise:
// - resolve
// - reject
// - pending

// function func() {
//   return new Promise(function(resolve, reject){
//     setTimeout(()=>{
//       const error = false;
//       if (!error){
//         console.log('your promise is resolved');
//         resolve();
//       } else {
//         console.log('your promise has not resolved');
//         reject();
//       }
//     },1000);
//   }) 
// }

// func().then((i)=>{
//   console.log("harry",i);
// }).catch((e)=>{
//   console.error("error",e);
// });

// https://dev.to/vijayprwyd/polyfill-for-promises-1f0e



function myPromise(executor){
  let onResolve;
  let fulfilled = false,
  called = false, value;

  function resolve(val){
    fulfilled = true;
    value = val;
    if( typeof onResolve === 'function') {
      onResolve(val);
      called = true; // indicates then callback has been called
    }
  }
  // on resolve
  this.then = function (callback) {
    onResolve = callback;
    if (fulfilled && !called){
      called = true;
      onResolve(value);
    }

    return this;
  }
  

  // on reject
  this.catch = function () {
    return this;
  }
  executor(resolve);
}


// new myPromise(function(resolve,reject){
//   setTimeout(()=>{resolve(1000);},1000);
// }).then(()=>{
//   console.log("resolve");
// });

new myPromise((resolve) => setTimeout(()=>{resolve(1000);},1000)).then(val => console.log(val)).then(()=>{
  console.log("here")
});
