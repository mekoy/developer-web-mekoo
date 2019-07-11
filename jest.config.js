module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/app.jsx',
    '!src/**/stories/*',
  ],
  coverageThreshold: {
    global: {
      branches: 59,
      functions: 57,
      lines: 67,
      statements: 67,
    },
  },
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleNameMapper: {
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
  ],
  setupFiles: [
    'jest-localstorage-mock',
  ],
  testRegex: 'tests/.*\\.test\\.js$',
  testResultsProcessor: './node_modules/jest-junit-reporter',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
