// module.exports = {
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1',
//     '^~/(.*)$': '<rootDir>/$1',
//     '^vue$': 'vue/dist/vue.common.js'
//   },
//   moduleFileExtensions: [
//     'js',
//     'vue',
//     'json'
//   ],
//   transform: {
//     '^.+\\.js$': 'babel-jest',
//     '.*\\.(vue)$': 'vue-jest'
//   },
//   collectCoverage: true,
//   collectCoverageFrom: [
//     '<rootDir>/components/**/*.vue',
//     '<rootDir>/pages/**/*.vue'
//   ]
// }
module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(vue-yandex-maps)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    '**/src/**/__test__/*.spec.js',
  ],
  testURL: 'http://vue:8080',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  setupFiles: [
    'jest-localstorage-mock',
    '<rootDir>/node_modules/regenerator-runtime/runtime',
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**',
  ],
  verbose: true,
};
