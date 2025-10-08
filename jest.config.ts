import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/tests/**/*.test.ts'],
  reporters: [
    'default',
    ['jest-allure2', { resultsDir: 'allure-results' }]
  ],
  verbose: true,
};

export default config;
