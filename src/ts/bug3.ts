// src/ts/bug3.ts

// Function claims to return a number but returns a string
export function multiply(a: number, b: number): number {
    const result: string = `${a * b}`; // ❌ TS2322: Type 'string' is not assignable to type 'number'
    return result; // another type error
  }
  
  // Function with unused variable
  export function greet(name: string): string {
    const unused: number = 123; // ❌ TS6133: 'unused' is declared but its value is never read
    return "Hello " + name;
  }