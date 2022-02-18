const reverse = require("./index");

test("reverse function exists", () => {
  expect(reverse).toBeDefined();
});

test("reverse reverses the string", () => {
  expect(reverse("man")).toBe("nam");
});

test("reverse reverses the string", () => {
  expect(reverse("  man")).toBe("nam  ");
});
