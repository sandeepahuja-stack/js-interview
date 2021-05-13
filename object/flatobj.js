let obj = {
  a: {
    name: "sandeep",
    work: "frontend"
  },
  b: {
    name: "tarun",
    work: "backend",
    f: {
      same: "here"
    }
  },
  c: "to be continued"
};
// let obj1 = {};
// function flatObj(source, target, flattenkey) {

//   for(let [key,value] of Object.entries(source)) {
//     let newKey = '';

//     if(typeof flattenkey === 'undefined') {
//       newKey = key;
//     } else {
//       newKey = flattenkey+'.'+key;
//     }
//     if (value instanceof Object) {
//       flatObj(value, target, newKey);
//     } else {
//       target[newKey] = value;
//     }
//   }

// }
// flatObj(obj, obj1);
// console.log(obj1);



function deepCopy(source) {
  function recur(source) {
    let destObj;
      if(Array.isArray(source)) {
        destObj = [];
        source.forEach((element,i) => {
          destObj[i] = recur(element);
        });
      } else if ( typeof source === 'object' ) {
        destObj = {};
        for ( let [key,value] of Object.entries(source)) {
          destObj[key] = recur(value);
        }
      } else {
        destObj = source;
      }

    return destObj;
  }
  return recur(source);
}


let obj2 = deepCopy(obj);
console.log(obj2);