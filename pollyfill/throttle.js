// debounce(()=>{
//   return function;
// },interval);


let myThrottle = function(fn, interval) {
  let timer = '';
  return function () {
    if(timer == '') {
      let context = this, args = arguments;
      timer = setTimeout(() => {
        timer = '';
        fn.apply(context, args);
      }, interval); 
    }
  }
}



// myThrottle = function (fn, interval) {
//   let timer = '';
//   return function () {
//     if(timer == ''){
//       let context = this, args = arguments;
//       setTimeout(() => {
//        timer = '';
//        fn.apply(context, args);
//       }, interval);
//     }
//   }

// }
















// // let myThrottle = function (fn, timeinterval) {
// //   let timer = '';
// //   return function () {
// //     if(timer == '') {
// //       let context = this, args = arguments;
// //       timer = setTimeout(() => {
// //         timer = '';
// //         fn.apply(context,args);  
// //       }, timeinterval);
// //     }
    
// //   }
// // }