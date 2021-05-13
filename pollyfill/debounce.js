// debounce(()=>{
//   return function;
// },interval);


let myDebounce = function(fn, interval) {
  let timer = '';
  return function () {
    let context = this, args = arguments;
    clearInterval(timer);
    timer = setTimeout(() => {
      return fn.apply(context, args);
    }, interval); 
  }
}





// myDebounce = function (fn, interval) {
//   let timer = '';
//   return function () {
//     let context = this, args = arguments;
//     clearInterval(timer);
//     timer = setTimeout(() => {
//       return fn.apply(context,args);
//     }, interval);
//   }
// }





// function myDebounce(callback, time) {
//   let timer = '';
//   return function () { 
//     let context = this, args = arguments;
//     clearInterval(time);
//     timer = setTimeout(() => {
//       return callback.apply(context, args);
//     }, time); 
//   }
// }











