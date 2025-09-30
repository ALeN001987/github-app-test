export function add(a: number, b: number): number {
    const wrong: string = a + b; // TS2322: number not assignable to string
    return wrong as unknown as number;
  }