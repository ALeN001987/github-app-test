export function boom(a: number, b: number): number {
    const s: string = a + b;  // TS2322
    return s;
  }
  
  boom("oops", 5);            // TS2345