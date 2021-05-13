// let obj = {
//   a: {
//     name: "sandeep",
//     work: "frontend"
//   },
//   b: {
//     name: "tarun",
//     work: "backend",
//     f: {
//       same: "here"
//     }
//   },
//   c: "to be continued"
// };




let obj1 = {};
function flatObj(tempobj, target, flattenkey) {
  for (let [key, value] of Object.entries(tempobj)) {
    let newKey = "";

    if (typeof flattenkey === "undefined") {
      newKey = key;
    } else {
      newKey = flattenkey + "." + key;
    }

    if (value instanceof Object) {
      flatObj(value, target, newKey);
    } else {
      target[newKey] = value;
    }

    // flatObj(tempobj,target,flattenkey);

    // if (value instanceof Object) {
    //   let obj = flatObj(value, obj1);
    // } else {
    //   return value;
    // }
  }
}
flatObj(obj, obj1);
console.log(obj1);



// // output 
// // {a.name: "sandeep", a.work: "frontend", b.name: "tarun", b.work: "backend", b.f.same: "here", c: "to be continued"}





















// // var palindrome = (num) => {
// //   let reverse = 0;
// //   while (num != 0) {
// //     reverse = reverse * 10 + (num%10);
// //     num = parseInt(num/10);
// //   }
// //   return reverse;
// // }

// // console.log(palindrome(12211));



// var longestPanlid = function (str) {

// }



function person (name, age){
  this.name = name;
  this.age = age;
}

person.prototype.walk = function () {
  console.log(this.name, this.age);
}


var student = function (name, age, roll) {
  person.call(this,name,age);
  this.roll = roll;
}
student.prototype = Object.create(person);
// student.prototype = new person();
student.prototype.study = function () {
  console.log(this.name,'=>', this.roll);
}


let s1 = new student('sandeep', 20, 10);
s1.walk();
s1.study();


// let p1 = new person('sandeep1', 30);

// p1.walk();





// var obj1={a:1,
//   b:[2,3,[4,5],{
//       c:6,
//       d:{e:[6,7,8]}
//   }]};
  
  
// function deepCopy (source) {
//   function recur(source) {
//     let dest; 
//     if (Array.isArray(source)) {
//       dest = [];
//       source.forEach((el,i) => {
//         dest[i] = recur(el);
//       });
//     } else if( typeof source == 'object') {
//       dest = {};
//       for (let key in source) {
//         dest[key] = recur(source[key]);
//       }
//     } else {
//       dest = source;
//     }
//     return dest;
//   }
//   return recur(source);
// }
  // function deepCopy(source){
  //     function recur(source){
  //         let dest;
  //         if(Array.isArray(source)){
  //             dest=[];
  //             source.forEach((elem,i)=>{
  //                 dest[i]=recur(elem);
  //             })
  //         }
  //         else if(source instanceof Object && source.constructor===Object){
  //             dest={};
  //             for(let key in source){
  //                 dest[key]=recur(source[key]);
  //             }
  //         }
  //         else{
  //             dest=source;
  //         }
  //         return dest;
  //     } 
  
  //     return recur(source);
  // }
  
  
  // var obj2= deepCopy(obj1);
  // console.log(JSON.stringify(obj2));
  // console.log(obj2['b'][3]['d']===obj1['b'][3]['d']);






  // Function.prototype.myBind = function (...args) {
  //   let $this = this;
  //   let args1 = args.slice(1);
  //   return function (...params) {
  //     $this.apply(args[0], [...args1, ...params]);
  //   }
  // }

  // let obj = {
  //   name: 'sandeep',
  // }
  // function cal(hometown,state,country) {
  //   console.log(this.name, hometown, state, country);
  // }

  // let fun = cal.myBind(obj,'New Delhi','Delhi');
  // fun('India');