/* bad.js */
function isEqual(a, b){
  let unused = 42
  if(a == b) {
    console.log("equal")
    return true
  } else
    return false
}
isEqual(1, "1")
