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