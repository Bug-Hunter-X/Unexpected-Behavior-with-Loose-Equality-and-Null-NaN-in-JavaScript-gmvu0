function foo(a, b) {
  if (a === null || b === null) {
    return null;
  }
  return a + b; // potential bug here if a or b is NaN
}