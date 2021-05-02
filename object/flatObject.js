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



// output 
// {a.name: "sandeep", a.work: "frontend", b.name: "tarun", b.work: "backend", b.f.same: "here", c: "to be continued"}