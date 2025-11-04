// ts/ts-failure-example.ts
// This file intentionally contains multiple TypeScript errors
// to confirm that the TypeScript Type-Check section is working
// even for files under the /ts folder.

export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  // ❌ Type error: assigning string to number
  const invalidNumber: number = "hello";
  
  // ❌ Type error: calling a non-existent property
  const result = multiply(2, 3).doesNotExist();
  
  // ❌ Type error: argument type mismatch
  multiply("wrong", 3);