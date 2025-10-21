// src/ts/missing-symbol.ts
export function useMissing() {
    const value: NotAType = 123; // TS2304: Cannot find name 'NotAType'
    return value;
  }