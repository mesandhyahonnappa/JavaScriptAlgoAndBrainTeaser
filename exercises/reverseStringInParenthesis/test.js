const reverseStringInParenthesis = require("./index");

test("reverseStringInParenthesis is a function", () => {
  expect(typeof reverseStringInParenthesis).toEqual("function");
});

test("reverseStringInParenthesis reverse the string in parenthesis", () => {
  expect(reverseStringInParenthesis("(bar)")).toEqual("rab");
});

test("reverseStringInParenthesis reverse the string in parenthesis", () => {
  expect(reverseStringInParenthesis("ab(bar)")).toEqual("abrab");
});

test("reverseStringInParenthesis reverse the complex string in parenthesis", () => {
  expect(reverseStringInParenthesis("foo(bar(baz))blim")).toEqual(
    "foobazrabblim"
  );
});
