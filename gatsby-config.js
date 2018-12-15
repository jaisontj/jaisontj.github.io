const lost = require('lost')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  siteMetadata: {
    url: 'https://jaisontj.github.io',
    title: 'Jaison Titus',
    subtitle: 'Currently exploring Systems and Network Engineering as a Masters student at Northeastern University',
    copyright: '© gatsby-v2-starter-lumen',
    source: 'https://github.com/jaisontj/jaisontj.github.io/tree/dev',
    name: 'Jaison Titus',
    menu: [
      {
        label: 'About',
        path: '/',
        internal: true,
      },
      {
        label: 'Resume',
        path: '',
        internal: false,
      },
    ],
    links: [
      {
        name: 'Github',
        icon_name: 'icon-github-circled',
        href: 'https://github.com/jaisontj',
      },
      {
        name: 'Stackoverflow',
        icon_name: 'icon-stackoverflow',
        href: 'https://stackoverflow.com/users/3907246/jaison-titus',
      },
      {
        name: 'Medium',
        icon_name: 'icon-medium',
        href: 'https://medium.com/@JaisonTitus',
      },
      {
        name: 'Twitter',
        icon_name: 'icon-twitter',
        href: 'https://twitter.com/JaisonTitus',
      },
      {
        name: 'LinkedIn',
        icon_name: 'icon-linkedin',
        href: 'https://www.linkedin.com/in/jaisontj/',
      },
      {
        name: 'Email',
        icon_name: 'icon-mail-alt',
        href: 'mailto:jaison.titus@gmail.com',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-131016979-1' },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto:400,400i,500,700'],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
			{
			  site {
				siteMetadata {
				  url
				}
			  }
			  allSitePage(
				filter: {
				  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
				}
			  ) {
				edges {
				  node {
					path
				  }
				}
			  }
		  }`,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.url + edge.node.path,
              changefreq: 'daily',
              priority: 0.7,
            }
          }),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
        precision: 8,
      },
    },
  ],
}
