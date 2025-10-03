// More obvious TS errors

type User = { id: number; name: string };

// ❌ Wrong arg type passed to function
function printUser(u: User): void {
  console.log(u.id.toFixed(0), u.name.toUpperCase());
}

printUser({ id: "not-a-number", name: 123 } as any); // TS2345 (after any removed, but kept as any to avoid parser)
                                                    // If you want strict diagnostics, change to:
                                                    // printUser({ id: "not-a-number", name: 123 }); // TS2322/TS2345