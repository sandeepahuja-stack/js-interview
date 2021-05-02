let searchObj = [

  {
    id: 1,
    name : "sandeep",
    hobbies:[{
      'music': 'piano',
      'game': 'chess'
    }]
  },
  {
    id: 2,
    name : "sahil",
    hobbies:[{
      'music': 'singer',
      'game': 'pubg'
    }]
  }
];

let result = [];


const searchItem = 'pubg';


const findItem = (obj)=>{
  Object.keys(obj).forEach((key)=>{
    if (typeof obj[key] === 'object' ) {
      traverseEachItem(obj[key]);
    } else if (typeof obj[key] === 'string' ) {
      
      if(obj[key].toLowerCase() === searchItem.toLowerCase() ){
        result.push(obj);
      }
    }

  });
}


const traverseEachItem = (obj) => {
  [].forEach.call(obj, (el)=>{
    findItem(el);
  });
}





