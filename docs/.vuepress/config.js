module.exports = {
  port: 3100,
  title: 'Kotka PBS',
  description: 'Plans for an ultra light rail vehicle',

  themeConfig: {
    nav: [
      { text: 'PBS Sheet', link: 'https://docs.google.com/spreadsheets/d/1G5YIdf7PlUv7BphEBALlFeB5Ye0DMoW4dylRe6NaBZk' },
      /* later
      { text: 'CAD files', link: '/CAD' },    // a page that lists the CAD files and tells how to ask for access
      */
    ],

    sidebar: [
      ['/', 'Home'],
      '/PBS',
      {
        title: '#100 - Vehicle platform',
        path: '/1/',
        //collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/1/110-frame.md',
          '/1/111-beams.md',
          '/1/112-hub.md',
          '/1/113-tray.md',
          '/1/120-wheel-and-mount.md',
          '/1/121-suspension.md',
          '/1/140-control.md',
          '/1/160-batteries.md',
        ]
      },
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

  // deploy
  base: "/<REPO>/",

  // Reduces build times (rules IE-something out)
  evergreen: true
}
