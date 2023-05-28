const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 1000,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  env: {
    baseUrl: "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      experimentalSessionAndOrigin: true;
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
  },
});


