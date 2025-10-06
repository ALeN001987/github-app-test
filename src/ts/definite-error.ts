// Two hard failures that always trip TSC:
export function brokenSum(a: number, b: number): number {
    const s: string = a + b;   // TS2322: number is not assignable to string
    return s;                  // TS2322: string is not assignable to number
  }