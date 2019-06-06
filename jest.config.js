module.exports = {
  testEnvironment: 'jest-environment-jsdom-fifteen',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/index.js'
  ],
  coverageDirectory: 'coverage',
  testMatch: ['<rootDir>/src/**/*.spec.js'],
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    'jest-dom/extend-expect'
  ]
}
