/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/naming-convention */

// TODO: Check deprecation
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.test.(tsx|jsx)'],
  setupFilesAfterEnv: ['./react/jest/jest.setup.ts'],
};
