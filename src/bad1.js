function greet(name){
  if (name == "Alex") console.log("hi"); // loose '==', no curly, double quotes
  let unused = 42                         // unused var, missing semicolon
  return 'ok'                             // missing semicolon
}
greet('Alex')
