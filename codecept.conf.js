exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://hafilog.com/'
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'E2E-sample'
}