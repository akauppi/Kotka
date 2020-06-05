module.exports = {
  title: 'Kotka PBS',
  description: 'Plans for an ultra light rail vehicle',

  // dev
  port: 3100,
  //extraWatchFiles: ["**/*.md", "**/*.vue"],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'PBS', link: '/PBS' },

      //{ text: 'External', link: 'https://google.com' }
    ],

    sidebar: [
        ['/', 'Home'],
        '/PBS'
    ]
  },

  markdown: {
    // See -> https://vuepress.vuejs.org/guide/markdown.html#advanced-configuration
    toc: { includeLevel: [1, 2] },

    //there's also:
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },

  plugins: [
    //'@vuepress/back-to-top'
  ],

  // Reduces build times (rules IE-something out)
  evergreen: true
}
