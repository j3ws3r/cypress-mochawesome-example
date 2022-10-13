const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotsFolder: './report/screenshots',
  screenshotOnRunFailure: true,
  video: false,
  videosFolder: './report/videos',
  reporter: 'mochwesome',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'report/reportJsons',
    inlineAssets: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
