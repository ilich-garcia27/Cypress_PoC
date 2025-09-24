const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const dotenv = require('cypress-dotenv');

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    cucumber: {
      stepDefinitions: ['cypress/support/step_definitions/**/*.js']
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      config = dotenv(config);

      config.env.EMAIL = process.env.EMAIL;
      config.env.PASSWORD = process.env.PASSWORD;
      config.env.ZIPCODE = process.env.ZIPCODE;
      config.env.ADDRESS1 = process.env.ADDRESS1;

      return config;
    },
    baseUrl: 'https://qa.meetmarlo.com',
    supportFile: 'cypress/support/e2e.js',
  },
  viewportWidth: 1920,
  viewportHeight: 1080
});