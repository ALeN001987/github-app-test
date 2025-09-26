// ESLint: no-unused-vars, eqeqeq, semi, quotes, no-console
function badCompare(a, b) {
  let unused = 42
  if (a == b) {
    console.log("equal");
  }
}