// must fail: Type 'number' is not assignable to type 'string'
export const mustBeString: string = 123;

// keep module shape for tsc in isolated setups
export {};
