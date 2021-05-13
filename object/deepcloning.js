function inner (){
  function innervar() {
    console.log('a');

  outer();
  }
  innervar();
}
function outer() {
    console.log('b');
}
inner();