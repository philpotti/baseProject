const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 1000,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      experimentalSessionAndOrigin: true;
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
  },
});


