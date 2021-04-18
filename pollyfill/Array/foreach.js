let ar = [1,2,3,4,5,6];

ar.forEach((element, index , ar) => {
  console.log(element, index, ar);
});


Array.prototype.customForEach = function (callback){

  //this is pointing to the array (in short this will behave as array)

  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this); // current value, index , array
  }

}
