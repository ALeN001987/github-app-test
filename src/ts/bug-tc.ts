export function add(a: number, b: number): number {
    const wrong: string = a + b; // TS2322
    return wrong;
  }
  
  const z = add("nope", 2);      // TS2345
  console.log(z);