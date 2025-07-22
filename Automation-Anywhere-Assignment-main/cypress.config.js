const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 90000,
    baseUrl: 'https://community2.cloud-2.automationanywhere.digital/#/login',
    specPattern: "cypress/e2e/**/*.cy.js",
    watchForFileChanges: false,
    env: {
      username: "saeed.automation@gmail.com",
      password: "Automation@CE77",
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
});
