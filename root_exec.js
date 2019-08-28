const path = require('path')
const searches = require('./searches')

module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return query.length > 1
    },
    search: (query, env = {}) => {
      return Promise.resolve(
        [{
          icon: path.join('assets', 'execute.png'),
          title: query,
          value: query
        },
        {
          icon: path.join('assets', 'execute.png'),
          title: 'Terminal: ' + query,
          value: 'lxterminal -e "' + query + ';echo press any key to close...;read"'
        }]
      )
    }
  }
}
