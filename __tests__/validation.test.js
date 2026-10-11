import {
  isValidEmail,
  isValidPassword,
  isValidUsername,
  validateSignInForm,
  validateSignUpForm,
} from "../lib/validation";

describe("isValidEmail", () => {
  it("accepts a normal email", () => {
    expect(isValidEmail("user@example.com")).toBe(true);
  });

  it("rejects empty or malformed values", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("not-an-email")).toBe(false);
    expect(isValidEmail("a@b")).toBe(false);
    expect(isValidEmail(null)).toBe(false);
  });
});

describe("isValidPassword", () => {
  it("requires at least 8 characters by default", () => {
    expect(isValidPassword("short")).toBe(false);
    expect(isValidPassword("longenough")).toBe(true);
  });
});

describe("isValidUsername", () => {
  it("allows alphanumeric usernames with underscores", () => {
    expect(isValidUsername("sohan_9542")).toBe(true);
  });

  it("rejects short or invalid usernames", () => {
    expect(isValidUsername("ab")).toBe(false);
    expect(isValidUsername("bad name")).toBe(false);
  });
});

describe("validateSignInForm", () => {
  it("returns ok for valid credentials", () => {
    expect(
      validateSignInForm({ email: "a@b.co", password: "password1" }),
    ).toEqual({ ok: true });
  });

  it("requires all fields", () => {
    expect(validateSignInForm({ email: "", password: "" }).ok).toBe(false);
  });
});

describe("validateSignUpForm", () => {
  it("returns ok for a complete valid form", () => {
    expect(
      validateSignUpForm({
        username: "sohan",
        email: "sohan@example.com",
        password: "password1",
      }),
    ).toEqual({ ok: true });
  });

  it("rejects an invalid username even when email is fine", () => {
    const result = validateSignUpForm({
      username: "!!",
      email: "sohan@example.com",
      password: "password1",
    });
    expect(result.ok).toBe(false);
    expect(result.message).toMatch(/Username/i);
  });
});
