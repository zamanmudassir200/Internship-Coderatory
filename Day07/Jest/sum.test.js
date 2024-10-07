const sum = require("./sum");

// test("1st test Addition case", () => {
//   expect(sum(2, 2)).not.toBe(5);
// });
// test("2nd test Addition case", () => {
//   expect(sum(2, 1)).toBe(3);
// });

// test("Object test case ", () => {
//   expect(sum()).toEqual({ name: "Mudassir" });
// });

test("String test case ", () => {
  expect(sum).toMatch("ello");
});
  