function foo(x) {
  if (x === 1) {
    console.log('eqeq');
  }
  // remove unused var or use it
  const y = 2;
  console.log(y);
}
foo(1);
