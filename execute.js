const exec = require('child_process').exec
const os = require('os')
const path = require('path')

module.exports = (pluginContext) => {
  return (app, env = {}) => {
    exec(app)
    return Promise.resolve()
  }
}
