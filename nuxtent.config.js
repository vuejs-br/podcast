module.exports = {
  content: [
    ['seasons', {
      page: '_episode',
      permalink: "season/:section*/:slug",
      generate: [ // for static build
        'get', 'getAll'
      ],
      isPost: false
    }]
  ],
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000'
  }
}
