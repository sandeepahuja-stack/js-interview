// let c = new calculate();
// console.log(c.add(2,3,4).sub(1).mul(10).result());




// const calculate = (function () {
//   let a = 0;
//   return { 
//     add : function (i) {
//       a +=i;
//       return this;
//     },
//     sub : function (i) {
//       a -=i;
//       return this;
//     },
//     mul : function (i) {
//       a = a * i;
//       return this;
//     },
//     result: function () {
//       console.log(a);
//     }
//   }
// })();

// calculate.add(10).sub(1).mul(10).result();



// Function.prototype.myBind = function (myThis) {
//   let $this = this;
//   return function () {
//     $this.apply(myThis);
//   }
// }

// let x = { a: 2 };

// let myCAll = call.myBind(x);

// function call() {
//   console.log(this.a);
// }

// myCAll();



// let a = 2 + 5 + 8 + '3'+ 6+1; //15361 
// console.log(2/'2'); // 1

// let b = 10 || 1; //10
// let c = 0 ?? 1; //0
// map , set, weakmap ,weakset

// garbage collection

// for (var index = 0; index < 5; index++) {
//   function name(a) {
//     setTimeout(() => {
//       console.log(a);
//     }, 100); 
//   }
//   name(index);
// }

// // let obj1 = Object.create({name:'sandeep'}); vs Object.create();


// function cal () {
//   let a = 1;
//   return function () {
//     console.log(++this.a);
//   }
// }
// let c = cal();
// let c1 = cal();
// c(); // 2
// c(); //3
// c1();//2

// greatest sum
// [1,2,-1,3,-10,4,5,6]
// [10,-1,-1,-1,4]


// [1,2,3,4,2,2]

// [5,4,4,6,7,1,2] first +ive smallest no.




// [1,2,[4,5],[{a:1,b:[{a:1}]}]]
// flatten
// flattenary


//promise

// function cal () {
//   let a = 1;
//   return function () {
//     console.log(++a);
//   }
// }
// let c = cal();
// let c1 = cal();
// c(); 
// c(); 
// c1();




Function.prototype.myBind = function (...args) {
  let context = args[0];
  let $this = this;
  let params = args.slice(1);
  return function (...args1) {
    $this.apply(context, [...params,...args1]);
  }
}