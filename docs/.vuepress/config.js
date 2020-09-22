module.exports = {
  title: 'Wiki Zone 5',
  description: 'My WiKi from dokuwiki to vuepress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/' }
    ],
    sidebar: [
      { title: "Home", children: [""] },
    ],
    lastUpdated: 'Last Updated', // string | boolean
    displayAllHeaders: true,
  }
}
