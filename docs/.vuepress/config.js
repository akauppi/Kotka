module.exports = {
  title: 'Kotka PBS',
  description: 'Plans for an ultra light rail vehicle',

  port: 3100,

  extraWatchFiles: ["**/*.md", "**/*.vue"],

  markdown: {
    // See -> https://vuepress.vuejs.org/guide/markdown.html#advanced-configuration
    //toc: { includeLevel: [1, 2] }

    //there's also:
    //extractHeaders: [ 'h2', 'h3', 'h4' ]
  },

  plugins: [
    //'@vuepress/back-to-top'
  ],

  // Evergreen would reduce build times
  evergreen: true
}
