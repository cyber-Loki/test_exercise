const { setHeadlessWhen } = require('@codeceptjs/configure');
const { setWindowSize } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

setWindowSize(1450, 850);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.mamba.ru/',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/mainPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test_exercise',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}