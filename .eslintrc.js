module.exports = {
  root: true,
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  ignorePatterns: [
    "node_modules/",
    ".expo/",
    "dist/",
    "web-build/",
    "babel.config.js",
    "metro.config.js",
    "tailwind.config.js",
  ],
  rules: {
    "prettier/prettier": "warn",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/*.{test,spec}.[jt]s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
