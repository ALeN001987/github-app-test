export const badType: number = "wrong"; // TS2322
function sum(a: number, b: number): string {
  return a + b; // TS2322
}
sum("a", 2); // TS2345
