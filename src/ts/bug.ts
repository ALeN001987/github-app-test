/* TypeScript: type mismatch */
export function add(a: number, b: number): number {
    return (a as any) + b;
  }
  
  const total: string = add(1, 2); // ❌ assigning number to string
  console.log(total)