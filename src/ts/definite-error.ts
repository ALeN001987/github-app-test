// Two hard failures: wrong type + missing symbol
export const wrong: number = "oops"; // TS2322
doesNotExist(123);                   // TS2304