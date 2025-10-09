export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  reporters: [
    "default",
    [
      "jest-allure2-reporter",
      {
        resultsDir: "./reports/allure-results",
      },
    ],
  ],
};
