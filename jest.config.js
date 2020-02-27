module.exports = {
  testEnvironment: 'jest-environment-jsdom-sixteen',
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: 'coverage',
  testMatch: ['<rootDir>/src/**/*.spec.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
