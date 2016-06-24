'use strict'

const window = require('global/window')
const webStorage = window.localStorage

/**
 * Manage the WebStorage to save and retrive the inital state for the stores.
 */
const storage = {
  // Save data in the WebStorage
  saveData: function (key, value) {
    if (webStorage) webStorage.setItem(key, JSON.stringify(value))
    else return null
  },

  // Retrieve data from the WebStorage
  getData: function (key) {
    if (webStorage) return JSON.parse(webStorage.getItem(key))
    else return null
  },

  // Restore the WebStorage
  reset: function () {
    if (webStorage) webStorage.clear()
  }
}

module.exports = storage
