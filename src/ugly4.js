function calcBad(x,y){
  if(x == y) console.log("bad eqeq and no curly"); // eqeqeq + curly
  let unused = 123;                                // no-unused-vars
  console.log(notDefined);                         // no-undef
  return x + y
}
calcBad(1,1)
