const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UOB";
  const e = new Intern("Guv", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Guv", 1, "test@test.com", "UOB");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UOB";
  const e = new Intern("Guv", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});