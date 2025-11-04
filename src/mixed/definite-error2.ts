// src/ts/definite-error.ts
// Intentionally broken TS to verify the bot surfaces TS errors.

export function brokenSum(a: number, b: number): number {
    // TS2322: Type 'string' is not assignable to type 'number'.
    const n: number = "oops";
    return a + b + n;
  }
  
  // TS2554: Expected 2 arguments, but got 1.
  brokenSum(1);
  
  // TS2339: Property 'toUpper' does not exist on type 'string' (correct is toUpperCase).
  const s = "hi";
  s.toUpper();
  
  // TS2571: Object is of type 'unknown'.
  function formatUnknown(x: unknown) {
    return x.toFixed();
  }
  
  // TS2322: Type 'string' is not assignable to type 'number'.
  const mustBeNumber: number = "not a number";
  
  // TS2322: Type 'number' is not assignable to type 'string'.
  function needsString(): string {
    return 123;
  }
  
  // TS2322 (generics): Type 'string' is not assignable to type 'number'.
  function first<T>(arr: T[]): T {
    return arr[0];
  }
  const n2: number = first<string>(["a"]);
  
  // TS2322 (structural typing): property types don’t match.
  interface User {
    id: number;
    name: string;
  }
  const u: User = { id: "x", name: 42 };