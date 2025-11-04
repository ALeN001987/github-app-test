// src/ts/bug-a.ts
export function add(a: number, b: number): number {
  const wrong: string = a + b; // TS2322 (string <- number)
  return wrong as unknown as number;
}

// src/ts/bug-b.ts
type User = { id: number; name: string };
export function getName(u: User): string {
  return u.nonexistent; // TS2339 property does not exist
}