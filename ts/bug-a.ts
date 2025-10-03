// ts/bug-c.ts
export const dbl = (n: number): string => {
    return n * 2; // TS2322 (string <- number)
  };