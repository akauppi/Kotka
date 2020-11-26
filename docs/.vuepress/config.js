/*
* docs/.vuepress/config.js
*
* Note: This *must* be with '.js' extension (not '.cjs') and it *must* be CommonJS.
*     This means we cannot use 'type': "module" in the 'package.json' to default to ES6 'import'.
*/
module.exports = {
  // Content
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
        //path: '/1/',
        //collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/1/100-vehicle.md',
          '/1/110-frame.md',
          '/1/111-beams.md',
          '/1/112-hub.md',
          '/1/113-tray.md',
          '/1/120-wheel-and-mount.md',
          '/1/121-suspension.md',
          '/1/140-control.md',
          '/1/160-batteries.md',
          '/1/180-grabber.md',
          '/1/181-claw.md',
        ]
      },
      {
        title: '#500 - Barrel pit-stop',
        //path: '/5/500-barrel',
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/5/500-barrel',
          '/5/510-pedestal',
          '/5/520-wheels',
          '/5/530-crank',
          '/5/540-tracks',
        ]
      },
    ]
  },

  markdown: {
    // See -> https://vuepress.vuejs.org/guide/markdown.html#advanced-configuration
    toc: { includeLevel: [1, 2] },

    //there's also:
    extractHeaders: [ 'h2', 'h3', 'h4' ],

    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },

  plugins: [
    //'@vuepress/back-to-top'
  ],

  // development
  port: 3100,
  dest: 'dist/',

  // deploy
  // Note: GitHub origin repo name must be reflected here
  base: "/Kotka/",

  // browser support - 'true' reduces build times but rules IE-something out
  //evergreen: true
}
