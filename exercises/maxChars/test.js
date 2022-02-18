const maxCharOccurrence = require("./index");

test("maxCharOccurrence is a function", () => {
  expect(typeof maxCharOccurrence).toEqual("function");
});

test("Finds the most frequently used char", () => {
  expect(maxCharOccurrence("a")).toEqual("a");
  expect(maxCharOccurrence("abcdefghijklmnaaaaa")).toEqual("a");
});

test("Works with numbers in the string", () => {
  expect(maxCharOccurrence("ab1c1d1e1f1g1")).toEqual("1");
});
