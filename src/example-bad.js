// src/example-bad.js

function testFunc(x) {
    if (x == 5) console.log("x is five") // eqeqeq + curly issue
    let unused = 42; // no-unused-vars issue
    const obj = { a: 1 }
    console.log(obj.b) // no-undef (accessing undefined property)
    return  x+  1    // spacing issues (extra spaces)
  }
  
  testFunc(5)
  // bad example file