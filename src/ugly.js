function badFunction(x){
  if(x == 2) console.log("loose eq no curly");  // eqeqeq + curly
  let unusedVar = 42;                           // no-unused-vars
  console.log(notDefinedVar)                    // no-undef
}
badFunction(2)
