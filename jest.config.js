module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
    "@/(.*)": "<rootDir>/src/$1",
    '^.+.(svg)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest/setupTests.js"
 ],
};