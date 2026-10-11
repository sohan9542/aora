/**
 * Shared client-side validation helpers for auth forms.
 * These are pure functions so they can be unit-tested without a device.
 */

/**
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  // Practical email shape check (not RFC-complete).
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

/**
 * @param {string} password
 * @param {{ minLength?: number }} [options]
 * @returns {boolean}
 */
export function isValidPassword(password, options = {}) {
  const minLength = options.minLength ?? 8;
  if (typeof password !== "string") return false;
  return password.length >= minLength;
}

/**
 * @param {string} username
 * @param {{ minLength?: number }} [options]
 * @returns {boolean}
 */
export function isValidUsername(username, options = {}) {
  const minLength = options.minLength ?? 3;
  if (typeof username !== "string") return false;
  const trimmed = username.trim();
  return trimmed.length >= minLength && /^[a-zA-Z0-9_]+$/.test(trimmed);
}

/**
 * Validates sign-in form fields.
 * @param {{ email: string, password: string }} form
 * @returns {{ ok: true } | { ok: false, message: string }}
 */
export function validateSignInForm(form) {
  if (!form?.email?.trim() || !form?.password) {
    return { ok: false, message: "Please fill in all fields." };
  }
  if (!isValidEmail(form.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (!isValidPassword(form.password)) {
    return { ok: false, message: "Password must be at least 8 characters." };
  }
  return { ok: true };
}

/**
 * Validates sign-up form fields.
 * @param {{ username: string, email: string, password: string }} form
 * @returns {{ ok: true } | { ok: false, message: string }}
 */
export function validateSignUpForm(form) {
  if (!form?.username?.trim() || !form?.email?.trim() || !form?.password) {
    return { ok: false, message: "Please fill in all fields." };
  }
  if (!isValidUsername(form.username)) {
    return {
      ok: false,
      message:
        "Username must be at least 3 characters and use only letters, numbers, or underscores.",
    };
  }
  if (!isValidEmail(form.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (!isValidPassword(form.password)) {
    return { ok: false, message: "Password must be at least 8 characters." };
  }
  return { ok: true };
}
