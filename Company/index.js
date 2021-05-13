// function f(){
//   if(true){
//     let c = 20
//     var d = 10
//     console.log(c,d,e)
//   }
//   if(true){
//     var e = 4
//     console.log(c,d,e)
//   }
//   console.log(c,d,e)
// }
// f()



// function sum() {
//   console.log(this);
// }

// sum();


// var obj1 = {
//   name: 'sandeep',
//   getName: function () {
//     console.log(this.name);
//   }
// }

// obj1.getName() //sandeep

// var obj2 = {
//   name: 'sahil'
// }

// obj1.getName.call(obj2); // sahil

// function func() {
//   setTimeout(() => {
//     console.log("3");
//   }, 1000);
// }

// function sum() {
//  console.log("1");
//   func();
//  console.log("2");
// }

// 1
// 2
// 3




// setTimeout(() => console.log(1), 0)
// Promise.resolve().then(() => console.log(2))
// console.log(3)
// Promise.resolve(console.log(4))
// 3
// 4
// 2
// 1

// let user = {
//   name:'sandeep',
//   getName: function () {
//     console.log(this.name);
//   }
// }
// setTimeout(user.getName,1000);




// add(2,3)(4)
// sum(a,b,c)
// sum(a)(b,c)
// sum(a)(b)(c)


// function add(...args){
//   let totalArgs = [...args];
  
//   function result(...args2) {
//     totalArgs = [...totalArgs,...args2];
//     if(totalArgs.length == 3) {
//       return totalArgs.reduce((prev, el)=> el+prev, 0);
//     } 
//     return result;

//   }

//   return result;

// }


// console.log(add(1)(1)(5));






// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// }

// let ar = [1,2,3,4];

// let result = ar.myReduce((ac,el)=>ac*el,1);
// console.log(result);



