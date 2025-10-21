// Intentional TS errors

// ❌ Type mismatch: number into string
export function greet(name: string): string {
    const msg: string = 42; // TS2322
    return "Hello " + msg;
  }
  
  // ❌ Return type mismatch: says string, returns number
  export function add(a: number, b: number): string {
    return a + b; // TS2322
  }