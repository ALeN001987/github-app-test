// src/ts/bug-check.ts

// ❌ Intentional TypeScript errors for testing
export function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  // Wrong argument types (string instead of number)
  addNumbers("foo", "bar");
  
  // Variable with incorrect type annotation
  let age: string = 42;  // ❌ number assigned to string
  
  // Using an undeclared variable
  console.log(notDeclaredVar);
  
  // Missing return in function with declared return type
  function mustReturnNumber(): number {
    // ❌ no return here
  }