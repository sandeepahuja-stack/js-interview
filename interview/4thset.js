// 5 yrs experience 





// const calculator = (()=>{
//     let result = 0;
//     return {
//         sum: (a = 0)=>{
//             if(a) {
//                 result = result + a;  
//                 console.log(result);
//             }  else {
//                 console.log(result);
//                 result = 0;
//             }
//         }
//     }
// })();


// let calc = calculator;
// calc.sum(); // 0
// calc.sum(20); // 20
// calc.sum(50); // 70
// calc.sum(); // 70 

// calc.sum(30); //30




// getter vs setter 

// let person = {
//   firstName: "James",
//   lastName: "Bond",

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   }
// };


// console.log(person.fullName); // Jane Oliver 
// person.fullName = "Jane Iyer";

// console.log(person.firstName); // Jane
// console.log(person.lastName); // Iyer


// var a =  40;
// let obj = {
//     a: 20,
//     getValue:  function(){
//         console.log(this.a);
//         console.log(this);
//     }
// }


// setTimeout(() => {
//     obj.getValue()
// });

// let __this = this;
// setTimeout(obj.getValue.bind(__this)); 

// 20 
// undefined



// let obj = {
//     a: {
//         b: {
//             c: {
//                 d: 20
//             }
//         }
//     }
// }

// getvalue('a.b') // {c: { d: 20 }}

// getvalue('a.e') // undefined


// let obj ={ 
//     a: {
//      "username": "sandeep" ,
//      msg: "here",
//         child: {
//             a: {
//                 "username": "praveen" ,
//                 msg: "here 1",
//                    child: {
//                         a: {
//                             "username": "sandeep" ,
//                             msg: "here",
//                             child: {
                                
//                             }
                    
//                         } 
//                    }
           
//             },
//             b: {
//                 "username": "amit" ,
//                 msg: "here2",
//                    child: {
                       
//                    }
           
//             }       
//         }

//     }
// }

// sandeep : "here",
//     praveen: "here1" 
//         sandeep: "here"
//     amit: "here2" 
    

// body
//     js 
//     css


// useTimer()
// 0 ,1,2,3,




//  performance optimization 
