// Intentional type error for test
export function brokenSum(a: number, c: number): number {
    const result: string = a + c; // ❌ TS2322: number is not assignable to string
    return result;
  }