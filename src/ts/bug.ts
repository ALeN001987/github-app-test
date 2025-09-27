// src/ts/demo-bug.ts
export function add(a: number, b: number): number {
    const wrong: string = a + b; // TS2322
    return wrong as unknown as number;
  }