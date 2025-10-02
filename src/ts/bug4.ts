// src/ts/bug4.ts
export function divide(a: number, b: number): number {
    // ❌ Intentional bug: assigning a number to a string
    const message: string = a / b; // TS2322
  
    // ❌ Intentional bug: returning a string instead of number
    return "oops"; // TS2322
  }