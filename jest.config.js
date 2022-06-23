/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {    "\\.(css)": "identity-obj-proxy"  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"  },
  transformIgnorePatterns: [    "node_modules/(?!variables/.*)"  ]
  };
