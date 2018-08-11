module.exports = {
  content: {
    page: 'episodes/_slug',
    permalink: ":slug",
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: false
  },
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000'
  }
}
