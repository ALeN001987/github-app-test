// src/ts/bad-types.ts
export function boom(a: number, b: number): number {
    const s: string = a + b; // TS2322: number is not assignable to string
    return "nope";           // TS2322: string is not assignable to number
  }