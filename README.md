


Q1 : __proto__ vs prototype https://javascript.plainenglish.io/proto-vs-prototype-in-js-140b9b9c8cd5
Ans 1
prototype : it is a property of a class 
proto: it is a property of  a class instance 

// constructor
function iPhone() {}

// a method for recognizing faces
iPhone.prototype.faceID = function() { };

// a method for taking 4k video
iPhone.prototype.video = function() { };

let newPhone = new iPhone(); // an iPhone 11
console.log(newPhone)

newPhone.__proto__
{faceID: ƒ, video: ƒ, constructor: ƒ}faceID: ƒ ()video: ƒ ()constructor: ƒ iPhone()[[Prototype]]: Object
iPhone.prototype
{faceID: ƒ, video: ƒ, constructor: ƒ}


///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
Q2 async vs defer attribute https://pagespeedchecklist.com/async-and-defer#:~:text=What's%20The%20Difference%20Between%20Async%20%26%20Defer%3F&text=async%20and%20defer%20both%20load,just%20before%20the%20DOMContentLoaded%20event.

Ans 

                                                                                async	defer
                    Loads at a low priority without render blocking	            Yes	    Yes
                    Only applies to external <script>s (with a src attribute)	Yes	    Yes
                    Executes immediately when loaded	                        Yes  	No
                    Executes in no particular order	                            Yes 	No
                    Executes in sequence	                                    No	    Yes
                    Can interrupt initial rendering to execute	                Yes 	No
Only executes after initial rendering, just before the DOMContentLoaded event	No	Yes

///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
Q3 execution context
Ans https://medium.com/@happymishra66/execution-context-in-javascript-319dd72e8e2c

///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////

let (block scope, modified), var (global scope), const(block scope, not modified)

Hoisting
Event loop 
///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
Q7 What is Type Coercion in JavaScript ?
https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////

map, reduce , filter, find, foreach

Array.prototype.myMap = function(callback) {
  let result = [];
  for(let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
}


Array.prototype.myForEach = function() {
  for(let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
}

Array.prototype.myFind = function(callback){
  for(let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)){
      return this[index];
    }
  }
}


Array.prototype.myFilter = function(callback){
  let result = [];
  for(let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)){
      result.push(this[index]);
    }
  }
  return result;
}

Array.prototype.myReduce = function(callback, initialValue){
  let acc = initialValue;
  for(let index= 0; index< this.length; i++) {
    acc = callback(acc, this[index], index, this);
  }
  return acc;
}


///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
pollyfill
A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.


///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
debounce vs throttle

The major difference between debouncing and throttling is that 
debounce calls a function when a user hasn’t carried out an event in a specific amount of time, 
while 
throttle calls a function at intervals of a specified amount of time while the user is carrying out an event. 

///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
call, apply , bind


Function.prototype.mybind = function(scope, ...args){
  
  scope._this = this;

  return function() {
    scope._this(...args);
  }

}


Function.prototype.myCall = function(scope, ...args){
  
  scope._this = this;

    scope._this(...args);
  

}



Function.prototype.myapply = function(scope, args){
  
  scope._this = this;

    scope._this(...args);
  

}


let obj = {
	a: 1,
	add: (a,b)=>{
  console.log("here",a,b);
  }
}



/* obj.add(); */

let obj1 = {
a: 2
};
let o = obj.add.myCall(obj1,'2','3');
console.log(o);

///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////

currying

 
/* const calculate = ( function(){let result = 0;
   return {
    add: function(a){

      result = result + a;
      return  this;
    },
    result: function() {
    return result
    }
  }
 })();
 

const a =  calculate.add(12);
console.log(a.result());
// calculate.add(10).sub(1).mul(10).result(); */

///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
deep copy, shallow copy
///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////

map vs object 
https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373
///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
es6 features

let const 
arrow function
classes
template literal `${}`
multiline string `sfd`
Promises
default parameters
destructuring
modules import 
enhanced object literals

///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
Object assign , create , seal, freeze
https://medium.com/@nlfernando11/object-freeze-vs-object-seal-vs-object-preventextensions-251ee99d0c47

getter vs setter 

let person = {
  firstName: "James",
  lastName: "Bond",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
};

// set fullName is executed with the given name value.
person.fullName = "Jane Iyer";

console.log(person.firstName); // Jane
console.log(person.lastName); // Iyer
///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////
document.onload vs window.onload
window.onload

By default, it is fired when the entire page loads, including its content (images, CSS, scripts, etc.).
In some browsers it now takes over the role of document.onload and fires when the DOM is ready as well.

document.onload

It is called when the DOM is ready which can be prior to images and other external content is loaded.

///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////

Promise
https://www.youtube.com/watch?v=3Hgac-wHiRE

let promise = new Promise();

///////// ****************** //////////////////////////// ****************** //////////////////////////// ****************** ///////

arguments
SetTimeout
async and await
string substring, charat, sort
array slice, splice, sort 
()=> , anonymous 
lexical scope 
closure pros and cons 
this keyword
symbol
event emiter
custom events
capturing vs bubling 

delegation
/////////////
react vs angular
Virtual dom 
key indexing 
react 18 
useCallback, use State, useeffect, usereducer, useMemo, useSelector
life style components
Pure components, 
render props, HOC, custom hooks 
code spliting 
suspence , lazy 
errorBoundary
useState Stale closures (prev) => prev + 1
react dom, react
/////////////
redux, context api
redux-thunk 
flow of redux 
action , reducer
custom middleware
/////////////
DOM vs BOM 

how browser loads the page ( CRITICAL RENDERING PATH) https://www.youtube.com/watch?v=PkOBnYxqj3k

memory leaks 



https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work



https://overreacted.io/
https://www.patterns.dev/posts/hoc-pattern/







## Promises


| Topic      | Description                |
| :--------  | :------------------------- |
| `all`  |  If one promise got rejected then promises will also got rejected |
|`allSetteled`| It will give us array and check all the promises whether promise get resolved or not|


## Event Emitter

## Optimizations Techniques
```
  Caching / Memoization 
  Preventing Memory Leaks 
  Reusable code (utility/helper func)
```



## Call / Apply/ Bind

```
  Function Borrowing
```
| Topic      | Description                |
| :--------  | :------------------------- |
| `call`  |    (context, arguments are **comma (,)** seprated) excutes immediately|
|`apply`|(context, [arguments])  excutes immediately|
|`bind`|(context, comma seprated)  excutes later when we want|




## Object using Const / Object.freeze

| Topic      | Description                |
| :--------  | :------------------------- |
| `Object using const`  |  we cant reassign the whole object, but we can add/ change the key values  |
|`Object.freeze`|we can add/ change the key values|



## Map / Weak Map

| Topic      | Description                |
| :--------  | :------------------------- |
| `Map`  |  iterable,  hold function, GC doesn't remove key from map |
|`Weak Map`| not iterable, holds reference, Gc removes the reference from weak map |





## Null / undefined

| Topic      | Description                |
| :--------  | :------------------------- |
| `Null`  |  we can set null  |
|`undefined`| when accessing a variable which doesn't exist |




## Hoisting
```
  Caching / Memoization 
  Preventing Memory Leaks 
  Reusable code (utility/helper func)
```

## Closure
```
 A closure is the combination of a function and 
 the lexical environment within which that function was declared. 

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

## Functions


| Topic      | Description                |
| :--------  | :------------------------- |
| `Anonymous`  |  function without name (function(){})() |
|`first class function`|  |
|`function expression`| var b = function(){} , during memory creation phase **b = undefined**|
|`named function expression`| var b = function add(){} , during memory creation phase **b = undefined**|
|`function statement`| function a(){}, during Hoisting function will get created |

## First Class Function 
```
  
  var b = function xyz (param){
    return function () {

    }
  }
  b(()=>{
    
  })
```



## arguments

## Higher Order Functions
```
  when we pass function inside function and get return new functionality / data

  map, filter, some, reduce,  

```
## Higher Order Components
## Debounce vs throttle
## splice vs slice
## Currying 
```
console.clear()
function sum(a = 0) {
  const s = Object.values(arguments);
  const sum1 = s.reduce((acc,item)=>acc+item,0);
   return function(b = null){
      if(b) {
        const s2 = Object.values(arguments);
        const sum2 = s2.reduce((acc,item)=>acc+item,0);
        return sum(sum1+sum2)
      } 
     return a;
   };
}

const a = sum(1)(2)()
console.log(a)



function sum(...args) {
    let _sum = 0;
    function curried(...args1) {
        if (args1.length == 0) {
            return _sum
        }
       _sum += args1.reduce((a,c) => a+c)
       return curried;
        
    }
    return curried(...args)
}

console.log(sum(1,2,3)(4,3)())
```



## Custom Hooks

### UsePrev

```
import "./styles.css";
import {useEffect, useRef, useState} from 'react'

const usePrev = (currState)=>{

  const prev = useRef(currState);
  useEffect(()=>{
    if(prev.current !== currState) {
      prev.current = currState;
    }
  },[currState])
  
  return {prevState: prev.current , currState}

}
export default function App() {
  const [count, updateCount] = useState(0);
  const  {prevState, currState}= usePrev(count);
  return (
    <div className="App">
      <button onClick={()=>{
        updateCount(count => count +1);
      }}>button</button>


      <h1>prev {prevState}</h1>
      <h2>curr {currState}</h2>
    </div>
  );
}

```



### useOnClickOutside 
```

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        console.log("return ");
        return;
      }
      handler(event);
    };
    // document.addEventListener("click", listener);

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      // document.removeEventListener("click", listener);

      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
```
