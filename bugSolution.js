function foo(a, b) {
  if (a === null || b === null || Number.isNaN(a) || Number.isNaN(b)) {
    return 0; // or another suitable default value
  }
  return a + b;
}