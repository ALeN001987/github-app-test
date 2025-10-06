// Intentional type error for test
export function brokenSum(a: number, b: number): number {
    const result: string = a + b; // ❌ TS2322: number is not assignable to string
    return result;
  }