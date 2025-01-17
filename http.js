module.exports = () => {
  return {
    respondsTo: (query) => {
      return query.match(/^https?:\/\//)
    },
    search: (query) => {
      return new Promise((resolve, reject) => {
        resolve([{
          icon: 'fa-globe',
          title: query,
          subtitle: 'Open the typed url',
          value: query,
        }])
      })
    },
  }
}
