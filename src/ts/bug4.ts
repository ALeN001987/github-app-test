// Intentional type errors to trigger TSC
export function multiply(a: number, b: number): number {
    const text: string = a * b;  // ❌ TS2322: number is not assignable to string
    return text;                 // ❌ TS2322: string is not assignable to number
  }
  
  // Another error: calling with wrong type
  const result = multiply("oops", 5);  // ❌ TS2345: Argument of type 'string' is not assignable to parameter of type 'number'
  
  console.log(result);