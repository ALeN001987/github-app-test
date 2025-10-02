export function bad(a: number, b: number): number {
    const s: string = a + b;   // TS2322: number not assignable to string
    return s;
  }
  
  const z = bad("nope", 2);    // TS2345: string not assignable to number
  console.log(z);