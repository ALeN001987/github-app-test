// Intentionally problematic TypeScript for both tsc + ESLint rules.

// TS compile errors:
// - Type mismatch (number vs string)
// - Possibly undefined access
// - Unused variable
// - Missing return type (if you enable that in rules later)

// ESLint (TS) rules in your map:
// - @typescript-eslint/no-unused-vars
// - @typescript-eslint/no-explicit-any (using any)

type User = { id: number; name: string };

function getUser(id: number): User | undefined {
  if (id === 1) return { id: 1, name: 'Alice' };
  // else undefined
}

const result: string = 123 as any; // ❌ type mismatch + uses any (TS + ESLint TS rule)

const maybe = getUser(2);
console.log(maybe.name); // ❌ possibly 'undefined' (TS)

const unusedTsVar: number = 999; // ❌ unused (TS ESLint)

function add(a, b) {
  // no explicit types; not necessarily an error by default, but could be flagged if stricter config is used later
  return a + b;
}

add('1', 2); // ❌ string + number → type error if noImplicitAny/strict are on
