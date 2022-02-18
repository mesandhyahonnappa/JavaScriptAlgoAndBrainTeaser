const palindrome = require("./index");

test("palindrome function exists", () => {
  expect(palindrome).toBeDefined();
});

test("palindrome function is defined", () => {
  expect(typeof palindrome).toEqual("function");
});

test('"aba" is a palindrome', () => {
  expect(palindrome("aba")).toBeTruthy();
});

test('"abc" is not a palindrome', () => {
  expect(palindrome("abc")).toBeFalsy();
});
