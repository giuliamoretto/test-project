export const getValue = function*(a, b) {
  return a + b;
};

export const generator = function*() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
};

export const delayGenerator = function*() {
  yield new Promise(r => setTimeout(r, 1000));
  return 42;
};
