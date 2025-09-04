function foo(x){
  if (x == 1) console.log("loose eq"); // no curly, eqeqeq
  let y = 2; // no-unused-vars
}
foo(1)
