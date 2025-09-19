// src/bad2.js

// ❌ 1) eqeqeq – using == instead of ===
function check(x, y) {
    if (x == y) console.log("loose compare"); // ❌ curly, ❌ no-console
  }
  
  // ❌ 2) no-unused-vars – unused variable
  const unused = 123;
  
  // ❌ 3) semi – missing semicolon
  let greeting = "Hello"
  
  check(1, "1")
  