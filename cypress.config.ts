/// <reference types="cypress" />
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    morgan: false,
    watchForFileChanges: false,
    baseUrl: 'http://localhost:3003',
    defaultCommandTimeout: 1000,
    experimentalRunAllSpecs: true,
    video: process.env.CI ? true : false,
    screenshotOnRunFailure: process.env.CI ? true : false,
    supportFile: 'dist/support.js',
    setupNodeEvents
  }
})

async function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
    const isCypressCloud = !!config.env.RECORD_KEY || false
    config.env.isCypressCloud = isCypressCloud
    return config
}
