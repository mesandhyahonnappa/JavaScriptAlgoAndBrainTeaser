const sort = require("./index");

test("fromLast is a function", () => {
  expect(typeof sort).toEqual("function");
});

test("sorts the array", () => {
  const inputArray = [3, 15, 2, 4, 10, 12, 8];
  expect(sort(inputArray)).toEqual([2, 3, 4, 8, 10, 12, 15]);
});

test("sorts the array", () => {
  const inputArray = [1, 2, 3, 4, 5];
  expect(sort(inputArray)).toEqual([1, 2, 3, 4, 5]);
});
