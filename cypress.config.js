const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false // Setzen Sie supportFile auf false, wenn Sie keine Support-Datei benötigen
  },
});
