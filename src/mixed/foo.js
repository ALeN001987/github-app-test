// Bad JS on purpose: eqeqeq, curly, no-unused-vars, semi/quotes/spacing
function greet(name){
    if(name == "world") console.log("hello, " + name) // <- eqeqeq + no curly + missing semicolon + double quotes
    const unused = 42
    return "hi, " + name
  }
  greet("world")
  // retrigger Fri Sep 26 11:27:00 CST 2025
// retrigger Fri Sep 26 11:49:55 CST 2025
