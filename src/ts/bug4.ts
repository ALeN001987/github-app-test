// src/ts/bug4.ts

// ❌ Intentional type error: assigning a number to a string
export function greet(name: string): string {
    let msg: string = 123; // TS2322: Type 'number' is not assignable to type 'string'
    return "Hello " + msg;
  }
  
  // ❌ Another one: wrong return type
  export function addNumbers(a: number, b: number): string {
    return a + b; // TS2322: Type 'number' is not assignable to type 'string'
  }