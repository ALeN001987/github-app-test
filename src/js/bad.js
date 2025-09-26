/* ESLint: eqeqeq, curly, no-unused-vars */
function check(x){
    let y = 123
    if(x == '42') console.log('loose eq')  // missing curly + loose equality
    return y
  }