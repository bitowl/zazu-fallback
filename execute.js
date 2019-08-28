const exec = require('child_process').exec
const os = require('os')
const path = require('path')

module.exports = (pluginContext) => {
  return (app, env = {}) => {
    return new Promise((resolve, reject) => {

      exec(app)

      reject() // break chain
    })
  }
}
