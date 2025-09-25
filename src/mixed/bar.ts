// Bad TS on purpose: explicit any, unused vars, eqeqeq, missing semicolons
function add(a: any, b: any){
    const notUsed: number = 123
    if(a == 0) { return b }  // <- eqeqeq
    return a + b
  }
  export default add
  