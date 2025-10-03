// TS2322 proof
export function bad(x: number): string {
    const y: string = x; // TS2322: number not assignable to string
    return y;
  }